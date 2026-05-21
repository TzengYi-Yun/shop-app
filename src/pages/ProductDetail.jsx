import { useParams, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"

function ProductDetail() {

  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 39900,
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-blacktitanium-select?wid=800",
      desc: "採用 A17 Pro 晶片，提供極致效能與專業級攝影能力。",
      specs: ["A17 Pro 晶片", "Pro 相機系統", "鈦金屬機身"]
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: 42900,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      desc: "輕薄設計搭配 M3 晶片，提供全天候高效能表現。",
      specs: ["M3 晶片", "18 小時續航", "超輕薄設計"]
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 7490,
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=800",
      desc: "主動式降噪與空間音訊，打造沉浸式聆聽體驗。",
      specs: ["主動降噪", "空間音訊", "MagSafe 充電"]
    }
  ]

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>找不到商品</h2>
  }

  return (
    <div className="detail-container">

      {/* 左：圖片 */}
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* 右：資訊 */}
      <div className="detail-info">

        <h1>{product.name}</h1>

        <p className="price">NT$ {product.price}</p>

        <p className="desc">{product.desc}</p>

        {/* 規格 */}
        <ul className="specs">
          {product.specs.map((s, i) => (
            <li key={i}>✔ {s}</li>
          ))}
        </ul>

        {/* 按鈕 */}
        <button
          className="buy-btn"
          onClick={() => addToCart(product)}
        >
          加入購物車
        </button>

        <button
          className="back-btn"
          onClick={() => navigate("/products")}
        >
          ← 返回商品
        </button>

      </div>

    </div>
  )
}

export default ProductDetail