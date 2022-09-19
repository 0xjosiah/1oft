import { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "./ContextProvider"

function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems} = useContext(Context)
    const {url, id, isFavorite} = img

    const favorited = isFavorite && <i onClick={() => toggleFavorite(id)} className={`ri-heart-fill favorite`}></i>

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setIsHovered(prev => !prev)}
            onMouseLeave={() => setIsHovered(prev => !prev)}
        >
            {isHovered && (
                <>
                    <i onClick={() => toggleFavorite(id)} className={`ri-heart-line favorite`}></i>
                    {cartItems.some(item => item.id === id) ? 
                        <i className="ri-shopping-cart-fill cart"></i> :
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
