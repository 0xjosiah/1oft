import { Context } from "./ContextProvider";
import { useContext } from "react";

export default function CartItem({img}) {
    const {url, id} = img
    const {removeFromCart} = useContext(Context)
    return (
        <div className='cart-item' key={id}>
            <img src={url} />
        </div>
    )
}