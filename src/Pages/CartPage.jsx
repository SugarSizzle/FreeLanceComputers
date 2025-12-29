import React, { useEffect } from 'react'
import { CartMainSection } from '../components/CartComponents/CartMainSection'
import { useCart } from '../Context/CartContext'


export const CartPage = () => {
    const { clearCartNotification } = useCart();

    useEffect(() => {
        clearCartNotification();
    }, [clearCartNotification]);

    return (
        <>
        <CartMainSection />
        </>
    )
}
