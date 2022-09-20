import { useContext, useEffect, useState } from "react"
import CartItem from "../components/CartItem"
import { Context } from "../components/ContextProvider"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    const cartImgs = cartItems.map(item => <CartItem key={item.id} item={item} />)
    
    const placeOrder = event => {
        let {style} = event.target
        console.log(event)
        setButtonText("Ordering...")
        style.cursor = "not-allowed"
        setTimeout(() => {
            setButtonText("Order Placed")
            emptyCart()
        }, 3000)
    }


    const checkOutUI = (
        <>
            {cartImgs}
            <p className="total-cost">Total: {(cartImgs.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                <button onClick={ e => placeOrder(e)} >{buttonText}</button>
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