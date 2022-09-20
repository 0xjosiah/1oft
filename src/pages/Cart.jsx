import { useContext } from "react"
import { Context } from "../components/ContextProvider"

function Cart() {
    const {cartItems} = useContext(Context)
    const cartImgs = cartItems.map(i => (
        <div className='cart-item'>
            <img src={i.url} />
        </div>
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartImgs}
        </main>
    )
}

export default Cart