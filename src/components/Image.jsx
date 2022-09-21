import { useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "./ContextProvider"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const [isHovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    const {url, id, isFavorite} = img

    const favorited = isFavorite && <i onClick={() => toggleFavorite(id)} className={`ri-heart-fill favorite`}></i>

    return (
        <div 
            className={`${className} image-container`} 
            ref={ref}
        >
            {isHovered && (
                <>
                    <i onClick={() => toggleFavorite(id)} className={`ri-heart-line favorite`}></i>
                    {cartItems.some(item => item.id === id) ? 
                        <i onClick={() => removeFromCart(img)} className="ri-shopping-cart-fill cart"></i> :
                        <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
                    }
                </>
            )}
            {favorited}
            <img src={url} className="image-grid"/>
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
