import { useState } from "react"

export default function Image({className, img, toggleFavorite}) {
    const [isHovered, setIsHovered] = useState(false)
    const {url, id, isFavorite} = img

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setIsHovered(prev => !prev)}
            onMouseLeave={() => setIsHovered(prev => !prev)}
        >
            {isHovered && (
                <>
                    <i onClick={() => toggleFavorite(id)} id={id} className="ri-heart-line favorite"></i>
                    <i  className="ri-add-circle-line cart"></i>
                </>
            )}
            <img src={url} className="image-grid"/>
        </div>
    )
}