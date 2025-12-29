import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [hasCartNotification, setHasCartNotification] = useState(false)

    const showCartNotification = () => {
        setHasCartNotification(true)
    }

    const clearCartNotification = () => {
        setHasCartNotification(false)
    }

    return (
        <CartContext.Provider value={{ hasCartNotification, showCartNotification, clearCartNotification }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

