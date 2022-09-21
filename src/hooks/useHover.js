import { useEffect, useRef, useState } from "react";

function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)

    const enter = () => setIsHovered(true)
    const leave = () => setIsHovered(false)

    useEffect(() => {
        const instance = ref.current
        instance.addEventListener("mouseenter", enter)
        instance.addEventListener("mouseleave", leave)
        
        return () => {    
            instance.removeEventListener("mouseenter", enter)
            instance.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [isHovered, ref]
}

export default useHover