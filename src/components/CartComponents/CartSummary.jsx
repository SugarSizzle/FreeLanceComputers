import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CartSummary.module.css'


export const CartSummary = ({ cartItems, onOrderComplete }) => {

    const [isOrdering, setIsOrdering] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingFee = 10.00
    const orderTotal = totalPrice + shippingFee

    const handleOrderNow = async () => {
        if (cartItems.length === 0) {
            setError('Your cart is empty')
            return
        }

        setIsOrdering(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || 'Failed to create order')
            }

            const data = await response.json()
            
            // Call the callback to refresh cart if provided
            if (onOrderComplete) {
                onOrderComplete()
            }

            // Navigate to orders page
            navigate('/dashboard/orders')

        } catch (err) {
            console.error('Error creating order:', err)
            setError(err.message)
        } finally {
            setIsOrdering(false)
        }
    }

    const mappedCartItems = cartItems.map((item) => {
        return {
            name: item.name,
            price: item.price * item.quantity,

        }
     })
    return (
        <>
            <div className={styles.cartSummaryContainer}>

                <p className={styles.cartSummaryTitle}>Order Summary</p>

                <div className={styles.cartSummaryItems}>
                    {mappedCartItems.map((item) => (

                        <div className={styles.cartSummaryItem} key={item.name}>
                            <p className={styles.cartSummaryItemName}>{item.name}</p>
                            <p className={styles.cartSummaryItemPrice}>${Number(item.price).toFixed(2)}</p>
                        </div>

                    ))}
                </div>

                <div className={styles.cartShipping}>
                    <p className={styles.cartSummaryTotalTitle}>Shipping Fees</p>
                    <p className={styles.cartSummaryTotalPrice}>$10.00</p>
                </div>

                <div className={styles.cartSummaryTotal}>
                    <p className={styles.cartSummaryTotalTitle}>Order Total:</p>
                    <p className={styles.cartSummaryTotalPrice}>${orderTotal.toFixed(2)}</p>
                </div>

                {error && (
                    <p className={styles.errorMessage}>{error}</p>
                )}

                <div className={styles.cartSummaryButtonContainer}>   
                    <button 
                        className={styles.cartSummaryButton}
                        onClick={handleOrderNow}
                        disabled={isOrdering || cartItems.length === 0}
                    >
                        {isOrdering ? 'Processing...' : 'Order Now'}
                    </button>
                </div>

                
            </div>
        </>

    )
}