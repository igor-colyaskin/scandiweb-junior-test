export const replaceLocalStorageWithUpdatedCart = (updatedCart) => {
    localStorage.removeItem('cart')
    const cartImage = JSON.stringify(updatedCart)
    localStorage.setItem('cart', cartImage)
}