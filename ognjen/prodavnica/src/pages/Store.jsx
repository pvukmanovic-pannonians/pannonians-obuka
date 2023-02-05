import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allProducts } from '../store/features/products'

export default function Store () {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const { data } = await axios.get('https://dummyjson.com/products')
        console.log('data', data);
        dispatch(allProducts(data.products))
    }

    const products = useSelector(state => state.products.allProducts)

    return (
        <div>
           {products.map((product, id) => {
            return (
                <li key={id}>
                    <div>{product.title}</div>
                    <div>{product.description}</div>
                    <div>{product.price}</div>
                    <div>{product.discountpercentage}</div>
                    <div>{product.rating}</div>
                    <div>{product.stock}</div>
                    <div>{product.brand}</div>
                    <div>{product.category}</div>
                    <div>{product.thumbnail}</div>
                    <div>{product.images}</div>
                </li>
            )
           })}
        </div>
    )
}