import { useSelector } from "react-redux"

export default function ShoppingCart() {
    const cartItems = useSelector(state => state.products.cartItems)
    const itemPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    const shippingPrice = itemPrice > 1000 ? 0 : 20
    const totalPrice = itemPrice + shippingPrice
    return (
        <div>
            <div>
                {cartItems.length === 0 && <div className="emptyCart">Cart is empty</div>}
                {cartItems.length > 0 && <div className="shopingCart"><div className="cartBadge">{cartItems.length}</div><div>Total Price ${totalPrice}</div></div>}
            </div>
        </div>
    )
}