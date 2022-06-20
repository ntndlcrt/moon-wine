import { createContext, useContext, useState, useEffect } from 'react'
import { createShopifyCheckout, updateShopifyCheckout, setLocalData, saveLocalData } from 'context/utils'

const CartContext = createContext()
const AddToCartContext = createContext()
const UpdateCartQuantityContext = createContext()

export function useCartContext() {
    return useContext(CartContext)
}
  
export function useAddToCartContext() {
    return useContext(AddToCartContext)
}
  
export function useUpdateCartQuantityContext() {
    return useContext(UpdateCartQuantityContext)
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [checkoutId, setCheckoutId] = useState('')
    const [checkoutUrl, setCheckoutUrl] = useState('')
    const [isLoading, setisLoading] = useState(false)
  
    useEffect(() => {
        setLocalData(setCart, setCheckoutId, setCheckoutUrl)
    }, [])
  
    useEffect(() => {
        const onReceiveMessage = (e) => {
            console.log(e)
            setLocalData(setCart, setCheckoutId, setCheckoutUrl)
        }
    
        window.addEventListener("storage", onReceiveMessage)

        return () => {
            window.removeEventListener("storage", onReceiveMessage)
        }
    }, [])
  
    async function addToCart(newItem) {
        setisLoading(true)

        if (cart.length === 0) {
            setCart([
                ...cart,
                newItem
            ])
    
            const response = await createShopifyCheckout(newItem)
            setCheckoutId(response.id)
            setCheckoutUrl(response.webUrl)
            saveLocalData(newItem, response.id, response.webUrl)
    
        } else {
            let newCart = [...cart]
            let itemAdded = false

            newCart.map(item => {
                if (item.variantId === newItem.variantId) {
                    item.variantQuantity += newItem.variantQuantity
                    itemAdded = true
                }
            })
    
            let newCartWithItem = [...newCart]
            itemAdded ? '' : newCartWithItem = [...newCart, newItem]
    
            setCart(newCartWithItem)
            await updateShopifyCheckout(newCartWithItem, checkoutId)
            saveLocalData(newCartWithItem, checkoutId, checkoutUrl)
        }

        setisLoading(false)
    }
  
    async function updateCartItemQuantity(id, quantity) {
        setisLoading(true)

        let newQuantity = Math.floor(quantity)

        if (quantity === '') {
            newQuantity = ''
        }

        let newCart = [...cart]

        newCart.forEach(item => {
            if (item.variantId === id) {
                item.variantQuantity = newQuantity
            }
        })
    
        newCart = newCart.filter(i => i.variantQuantity !== 0)
        setCart(newCart)
    
        await updateShopifyCheckout(newCart, checkoutId)
        saveLocalData(newCart, checkoutId, checkoutUrl)
        setisLoading(false)
    }
  
    return (
        <CartContext.Provider value={[cart, checkoutUrl, isLoading]}>
            <AddToCartContext.Provider value={addToCart}>
                <UpdateCartQuantityContext.Provider value={updateCartItemQuantity}>
                    {children}
                </UpdateCartQuantityContext.Provider>
            </AddToCartContext.Provider>
        </CartContext.Provider>
    )
}