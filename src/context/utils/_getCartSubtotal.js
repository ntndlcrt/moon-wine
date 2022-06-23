export default function getCartSubtotal(cart) {
    if (cart.length === 0) {
        return 0
    }

    else {
        let totalPrice = 0
        cart.forEach(item => totalPrice += parseInt(item.variantQuantity) * parseFloat(item.price))
        return Math.round(totalPrice * 100) / 100
    }
}  