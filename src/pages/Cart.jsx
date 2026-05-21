import { useCart } from "../context/CartContext"

function Cart() {

  const {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    checkout
  } = useCart()

  // 💰 總價
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div className="cart-page">

      <h1>購物車</h1>

      {cart.length === 0 && <p>購物車是空的</p>}

      {cart.map(item => (
        <div className="cart-item" key={item.id}>

          <h3>{item.name}</h3>

          <p>NT$ {item.price}</p>

          {/* 數量控制 */}
          <div className="qty">

            <button onClick={() => decreaseQty(item.id)}>
              -
            </button>

            <span>{item.qty}</span>

            <button onClick={() => addToCart(item)}>
              +
            </button>

          </div>

          <p>小計：NT$ {item.price * item.qty}</p>

          <button onClick={() => removeFromCart(item.id)}>
            移除
          </button>

        </div>
      ))}

      {/* 總價 */}
      <div className="cart-total">
        <h2>總金額：NT$ {total}</h2>

        <button className="checkout-btn" onClick={checkout}>
          結帳
        </button>
      </div>

    </div>
  )
}

export default Cart