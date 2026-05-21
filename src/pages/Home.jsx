import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <h1>Next-Gen 3C Store</h1>

          <p className="subtitle">
            輕薄筆電 × 極致效能 × AI 世代工作體驗
          </p>

          <Link to="/products" className="hero-btn">
            立即選購
          </Link>

        </div>

      </section>

      {/* 🔥 探索產品（已升級：直接對應商品） */}
      <section className="category-section">

        <h2 className="section-title">探索產品</h2>

        <div className="category-grid">

          {/* 💻 筆電 → MacBook Air M3 (id=2) */}
          <Link to="/product/2" className="category-card">
            <div className="icon">💻</div>
            <h3>筆電系列</h3>
            <p>MacBook Air M3</p>
          </Link>

          {/* 📱 手機 → iPhone 15 Pro (id=1) */}
          <Link to="/product/1" className="category-card">
            <div className="icon">📱</div>
            <h3>手機平板</h3>
            <p>iPhone 15 Pro</p>
          </Link>

          {/* 🎧 音訊 → AirPods Pro (id=3) */}
          <Link to="/product/3" className="category-card">
            <div className="icon">🎧</div>
            <h3>音訊設備</h3>
            <p>AirPods Pro</p>
          </Link>

        </div>

      </section>

      {/* PROMO */}
      <section className="promo">

        <div className="promo-box">

          <h2>🔥 本週精選優惠</h2>

          <p>
            MacBook Air M3 限時特價，AI 工作效能全面升級
          </p>

          <Link to="/products" className="promo-btn">
            查看全部商品
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home