import { useSelector } from "react-redux"

export default function ShoppingCart() {
    const cartItems = useSelector(state => state.products.cartItems)
    const itemPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0) 
    return (
        <div>
            <div>
                {cartItems.length === 0 && <div className="emptyCart">Cart is empty</div>}
                {cartItems.length > 0 && <div className="shopingCart"><div className="cartBadge">{cartItems.length}</div><div>Total Price ${itemPrice}</div></div>}
            </div>
        </div>
    )
}