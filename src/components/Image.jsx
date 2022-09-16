import { useState, useContext } from "react"
import { Context } from "./ContextProvider"

export default function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const {url, id, isFavorite} = img

    // const favIcon = isHovered && 

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setIsHovered(prev => !prev)}
            onMouseLeave={() => setIsHovered(prev => !prev)}
        >
            {isHovered && (
                <>
                    <i onClick={() => toggleFavorite(id)} className={`ri-heart-${isFavorite ? 'fill' : 'line'} favorite`}></i>
                    <i  className="ri-add-circle-line cart"></i>
                </>
            )}
            <img src={url} className="image-grid"/>
        </div>
    )
}