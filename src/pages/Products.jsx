import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

function Products() {

  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 39900,
      image:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-blacktitanium-select?wid=800"
    },

    {
      id: 2,
      name: "MacBook Air M3",
      price: 42900,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800"
    },

    {
      id: 3,
      name: "AirPods Pro",
      price: 7490,
      image:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=800"
    }
  ]

  return (
    <div className="products-page">

      <h1 className="page-title">熱門商品</h1>

      <div className="products-grid">

        {products.map((p) => (

          <div className="product-card" key={p.id}>

            {/* 👉 點圖片/名稱進商品詳情 */}
            <Link to={`/product/${p.id}`} className="product-link">

              <img
                src={p.image}
                alt={p.name}
                className="product-image"
              />

              <h3>{p.name}</h3>

            </Link>

            <p className="price">
              NT$ {p.price}
            </p>

            <button
              onClick={() => addToCart(p)}
              className="btn"
            >
              加入購物車
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Products