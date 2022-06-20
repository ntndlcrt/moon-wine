export default function saveLocalData(cart, checkoutId, checkoutUrl) {
    localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, JSON.stringify([cart, checkoutId, checkoutUrl]))
}  