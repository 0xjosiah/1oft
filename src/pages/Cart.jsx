import { useContext } from "react"
import CartItem from "../components/CartItem"
import { Context } from "../components/ContextProvider"

function Cart() {
    const {cartItems} = useContext(Context)
    const cartImgs = cartItems.map(img => (
        <CartItem img={img} />
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItems.length ? cartImgs : 'Your cart is empty'}
        </main>
    )
}

export default Cart