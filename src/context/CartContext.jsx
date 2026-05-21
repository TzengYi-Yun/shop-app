import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {

  // 🔥 初始化：從 localStorage 讀資料
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  // 🔥 每次 cart 改變 → 存進 localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // ➕ 加入購物車（如果已存在 → +1）
  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id)

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }

      return [...prev, { ...product, qty: 1 }]
    })
  }

  // ➖ 減少數量
  const decreaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      ).filter(item => item.qty > 0)
    )
  }

  // ❌ 移除
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  // 🧹 結帳（清空）
  const checkout = () => {
    alert("結帳成功！")
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      decreaseQty,
      removeFromCart,
      checkout
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}