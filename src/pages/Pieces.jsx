import { useContext } from "react"
import { Context } from "../components/ContextProvider"
import Image from "../components/Image"
import getClass from "../utils/getClass"

export default function Pieces() {
    const {allPhotos} = useContext(Context)
    const images = allPhotos.map((img, index) => (
        <Image key={img.id} img={img} className={getClass(index)} />
    ))
    return (
        <main className="pieces">
            {images}
        </main>
    )
}