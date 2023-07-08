import { useState } from "react";
import { createContext } from "react";



export const CartContext = createContext({
    cart: []
})

export let inCart = true;

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            inCart = true
        } else {
            console.error('El producto ya fue agregado')
            inCart = false
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const totalQuantity = cart.reduce((acc, producto) => acc + producto.amount, 0);

    const total = cart.reduce(
      (acc, producto) => acc + parseFloat(producto.price) * producto.quantity,
      0
    )
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}