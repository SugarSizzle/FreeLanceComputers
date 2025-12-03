import React, { useState, useEffect } from 'react'
import { Trash2, Minus, Plus } from 'lucide-react'
import styles from './CartMainSection.module.css'

export const CartMainSection = () => {
    const [cartItems, setCartItems] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchCartItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/cart', {
                credentials: 'include'
            })

            if(!response.ok){
                throw new Error('Failed to fetch cart items')
            }

            const data = await response.json()
            console.log('Fetched Data from Express:', data)
            setCartItems(data.items)
        } catch (error) {
            console.error('Error fetching cart items:', error.message)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCartItems()
    }, [])

    const handleDelete = async (cartItemId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/cart/${cartItemId}`, {
                method: 'DELETE',
                credentials: 'include'
            })

            if (response.ok) {
                setCartItems(cartItems.filter(item => item.cartItemId !== cartItemId))
            }
        } catch (error) {
            console.error('Error deleting item:', error)
        }
    }

    const handleQuantityChange = async (cartItemId, newQuantity) => {
       
        try{
            const response = await fetch(`http://localhost:5000/api/cart/${cartItemId}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({quantity: newQuantity})
            })

            if(!response.ok){
                throw new Error('Failed to update quantity')
            }
        
            const data = await response.json()

            console.log('Quantity updated:', data)

        } catch (error) {
            console.error('Error updating quantity:', error)
        } 
        setCartItems(cartItems.map(item => 
            item.cartItemId === cartItemId 
                ? { ...item, quantity: newQuantity }
                : item
        ))
    }

    return (
        <>
        <div className={styles.cartTitleContainer}>
            <h1 className={styles.cartTitle}>Your Cart</h1>
        </div>
        <div className={styles.cartMainSectionContainer}>
            {loading ? (
                <div className={styles.loadingState}>Loading...</div>
            ) : error ? (
                <div className={styles.errorState}>Error: {error}</div>
            ) : cartItems.length === 0 ? (
                <div className={styles.emptyState}>Your cart is empty</div>
            ) : (
                <div className={styles.cartItemsContainer}>
                    {cartItems.map((item) => (
                        <div key={item.cartItemId} className={styles.cartItemCard}>
                            <div className={styles.imageContainer}>
                                <img src={item.images[0]} alt={item.name} />
                            </div>

                            <div className={styles.itemInfoContainer}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemPrice}>${item.price}</p>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>

                            <div className={styles.actionsContainer}>
                                <div className={styles.quantityContainer}>
                                    <button 
                                        className={styles.quantityButton}
                                        onClick={() => handleQuantityChange(item.cartItemId, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className={styles.quantityValue}>{item.quantity}</span>
                                    <button 
                                        className={styles.quantityButton}
                                        onClick={() => handleQuantityChange(item.cartItemId, item.quantity + 1)}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <button 
                                    className={styles.deleteButton}
                                    onClick={() => handleDelete(item.cartItemId)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
}
