import { Context } from "./ContextProvider";
import { useContext, useState } from "react";
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover";

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    // const [isHovered, setIsHovered] = useState(false)
    const [isHovered, ref] = useHover()

    
    return (
        <div className='cart-item'>
            <i 
                onClick={() => removeFromCart(item)} 
                ref={ref}
                className={`ri-delete-bin-${isHovered ? "fill" : "line"}`}
            >
            </i>
            <img src={item.url} width="200px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem