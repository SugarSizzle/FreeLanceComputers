import React from 'react'
import styles from './CartSummary.module.css'


export const CartSummary = ({ cartItems }) => {

    console.log(cartItems)

    
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingFee = 10.00
    const orderTotal = totalPrice + shippingFee

    

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

                <div className={styles.cartSummaryButtonContainer}>   
                    <button className={styles.cartSummaryButton}>Order Now</button>
                </div>

                
            </div>
        </>

    )
}