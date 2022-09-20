import { Context } from "./ContextProvider";
import { useContext, useState } from "react";

export default function CartItem({item}) {
    const {url, id} = item
    const {removeFromCart} = useContext(Context)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='cart-item'>
            <i 
                onClick={() => removeFromCart(item)} 
                onMouseEnter={() => setIsHovered(prev => !prev)}
                onMouseLeave={() => setIsHovered(prev => !prev)}
                className={`ri-delete-bin-${isHovered ? "fill" : "line"}`}>
            </i>
            <img src={url} width="200px" />
            <p>$5.99</p>
        </div>
    )
}