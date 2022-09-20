import { useContext } from "react"
import CartItem from "../components/CartItem"
import { Context } from "../components/ContextProvider"

function Cart() {
    const {cartItems} = useContext(Context)
    const cartImgs = cartItems.map(item => <CartItem key={item.id} item={item} />)

    const checkOutUI = (
        <>
            {cartImgs}
            <p className="total-cost">Total: {(cartImgs.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </>
    )

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItems.length ? checkOutUI : 'Your cart is empty'}
        </main>
    )
}

export default Cart