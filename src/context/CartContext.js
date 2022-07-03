import { useState, createContext, useEffect, useRef } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const countRenderRef = useRef(0)


    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        count: productToAdd.count
                    }
                    return newProduct
                } else {
                   return prod 
                }
            })
            setCart(cartUpdated)
        }
    }
    
    const setCount = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.count
        })
    
        return accu
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.count * prod.price
        })
        
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{ cart, addItem, setCount, getProduct, removeItem, getTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext