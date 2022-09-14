import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link to="/">
                <h2>1oft</h2>
            </Link>
            <Link to="/cart">
                <i className="ri-shopping-cart-2-fill ri-xl"></i>
                <i className="ri-shopping-cart-2-line ri-xl"></i> {/**change based on if cart full or not */}
            </Link>
        </header>
    )
}