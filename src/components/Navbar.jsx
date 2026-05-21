import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar() {
  const { cart } = useCart()

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        🛒 3C Store
      </div>

      {/* Links */}
      <div className="nav-links">

        <Link to="/" className="nav-item">
          首頁
        </Link>

        <Link to="/products" className="nav-item">
          商品
        </Link>

        <Link to="/cart" className="nav-item cart">
          購物車
          <span className="badge">
            {cart.length}
          </span>
        </Link>

      </div>

    </nav>
  )
}

export default Navbar