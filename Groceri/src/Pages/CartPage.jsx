import { useCart } from "../context/CartContext";

const CartPage = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  const handling = 5;
  const grandTotal = totalPrice + handling;

  return (
    <div className="cart-container">

      <h2 className="cart-title">My Cart</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>

          <div className="item-left">
            <img src={item.image} alt={item.name} />

            <div className="item-info">
              <h4>{item.name}</h4>
              <p>{item.quantity}</p>

              <p className="price">
                ₹{item.price}
                {item.oldPrice && (
                  <span className="old-price">
                    ₹{item.oldPrice}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="qty-box">
            <button onClick={() => decreaseQty(item.id)}>−</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
        </div>
      ))}

      <div className="bill-box">
        <h3>Bill details</h3>

        <div className="bill-row">
          <span>Items total</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="bill-row">
          <span>Delivery charge</span>
          <span className="free">FREE</span>
        </div>

        <div className="bill-row">
          <span>Handling charge</span>
          <span>₹5</span>
        </div>

        <div className="bill-row grand-total">
          <span>Grand total</span>
          <span>₹{grandTotal}</span>
        </div>
      </div>

    </div>
  );
};

export default CartPage;