import { createContext, useEffect, useState } from "react";

const Context = createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const toggleFavorite = (id) => {
        let updatedPhotos = allPhotos.map(photo => {
            if(id === photo.id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setAllPhotos(updatedPhotos)
    }

    const addToCart = photoObj => setCartItems(prev => [...prev, photoObj])

    const removeFromCart = photoObj => setCartItems(prev => prev.filter(item => item.id !== photoObj.id))

    const emptyCart = () => setCartItems([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }

// https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings