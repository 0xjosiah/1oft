import { useState } from "react"

export default function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {url, id, isFavorite} = img

    return (
        <div className={`${className} image=container`}>
            <img 
                src={url}
                className="image-grid"
                onMouseEnter={() => setIsHovered(prev => !prev)}
                onMouseLeave={() => setIsHovered(prev => !prev)}
            />
        </div>
    )
}