import { useContext } from "react"
import CartItem from "../components/CartItem"
import { Context } from "../components/ContextProvider"

function Cart() {
    const {cartItems} = useContext(Context)
    const cartImgs = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItems.length ? cartImgs : 'Your cart is empty'}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart