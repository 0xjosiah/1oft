import { Context } from "./ContextProvider";
import { useContext } from "react";

export default function CartItem({item}) {
    const {url, id} = item
    const {removeFromCart} = useContext(Context)
    return (
        <div className='cart-item'>
            <i onClick={() => removeFromCart(item)} className="ri-delete-bin-line"></i>
            <img src={url} width="200px" />
            <p>$5.99</p>
        </div>
    )
}