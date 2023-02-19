import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allProducts, changeCartItems, removeCartItems } from '../store/features/products'
import Product from '../components/Product'

export default function Store () {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const { data } = await axios.get('https://dummyjson.com/products')
        dispatch(allProducts(data.products))
    }

    const products = useSelector(state => state.products.allProducts)
    const [cartItems, setCartItems] = useState([])
    const onAdd = (product) => {
        console.log('product', product);
        const exist = cartItems.find(item => item.id === product.id)
        console.log('exist', exist);
        if (exist) {
            const newCartItems = cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
            setCartItems(newCartItems)
            dispatch(changeCartItems(newCartItems))
        } else {
            const newCartItems = [...cartItems, {...product, qty: 1}]
            setCartItems(newCartItems)  
            dispatch(changeCartItems(newCartItems))
        }
    }
    const onRemove = (product) => {
        const exist = cartItems.find(item => item.id === product.id)
        if (exist.qty === 1) {
            const newCartItems = cartItems.filter(item => item.id !== product.id)
            setCartItems(newCartItems)
            dispatch(removeCartItems(product))
        } else {
            const newCartItems = cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
            setCartItems(newCartItems) 
            dispatch(changeCartItems(newCartItems))
        }
    }
    

    return (
        <div className="allProducts">
           {products.map((product, id) => {
            return (
                <li key={id} >
                    <Product product={product} onAdd={onAdd} onRemove={onRemove} item={cartItems.find(x => x.id === product.id)}></Product>
                </li>
            )
           })}
        </div>
    )
}