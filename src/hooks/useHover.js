import { useEffect, useRef, useState } from "react";

function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const mouseRef = useRef(null)

    const enter = () => setIsHovered(p => !p)
    const leave = () => setIsHovered(p => !p)

    useEffect(() => {
        mouseRef.current.addEventListener('mouseenter', enter)
        mouseRef.current.addEventListener('mouseleave', leave)

        return () => {
            mouseRef.current.removeEventListener('mouseleave', leave)
            mouseRef.current.removeEventListener('mouseenter', enter)
        }
    }, [])

    return [isHovered, mouseRef]
}

export default useHover