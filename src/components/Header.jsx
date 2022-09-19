import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './ContextProvider'

export default function Header() {
    const {cartItems} = useContext(Context)
    return (
        <header>
            <Link to="/">
                <h2>1oft</h2>
            </Link>
            <Link to="/cart">
                {cartItems.length ? 
                    <i className="ri-shopping-cart-2-fill ri-xl"></i> :
                    <i className="ri-shopping-cart-2-line ri-xl"></i>
                }
            </Link>
        </header>
    )
}