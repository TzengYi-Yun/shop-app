import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"

import { CartProvider } from "./context/CartContext"

import "./App.css"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* 導覽列 */}
        <Navbar />

        {/* 主內容 */}
        <main className="container">

          <Routes>

            {/* 首頁 */}
            <Route path="/" element={<Home />} />

            {/* 商品列表 */}
            <Route path="/products" element={<Products />} />

            {/* 商品詳情頁 ⭐新增 */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* 購物車 */}
            <Route path="/cart" element={<Cart />} />

          </Routes>

        </main>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App