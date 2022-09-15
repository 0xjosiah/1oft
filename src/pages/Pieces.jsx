import { useContext } from "react"
import { Context } from "../components/ContextProvider"
import Image from "../components/Image"
import getClass from "../utils/getClass"

export default function Pieces() {
    const {allPhotos} = useContext(Context)
    const images = allPhotos.map(i => (
        <Image key={i.id} img={i.url} className={getClass(allPhotos.indexOf(i))} />
    ))
    return (
        <main className="pieces">
            {images}
        </main>
    )
}