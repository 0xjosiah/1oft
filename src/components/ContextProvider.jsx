import { createContext, useEffect, useState } from "react";

const Context = createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json", {
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
              }
        })
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    console.log(allPhotos)
    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }

// https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings