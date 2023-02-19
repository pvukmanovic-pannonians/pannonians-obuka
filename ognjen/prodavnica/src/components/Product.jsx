export default function Product (props) {
    const { onAdd, onRemove, product, item } = props
    return (
        <div className="productCard">
            <div className="imgBox">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="contentBox" style={{marginTop: '20px'}}>
                <h3 style={{margin: '0'}}>{product.title}</h3>
                <p style={{margin: '0'}}>Price: {product.price}$</p>
                <p style={{margin: '0'}}>In stock: {product.stock}</p>
                <p style={{margin: '0'}}>Brand: {product.brand}</p>
                <p style={{margin: '0'}}>Category: {product.category}</p>
                {/* <p style>{product.discountpercentage}</p> */}
                {/* {product.discount && (} */}
                <p>{product.rating}</p>
                <div>
                    {item ? <div>
                        <button onClick={() => onRemove(item)} className="remove"> - </button>
                        <span> {item.qty} </span>
                        <button onClick={() => {onAdd(item)}} className="add"> + </button>
                    </div> : <button onClick={() => onAdd(product)}>Add to cart</button>}
                    
                </div>
            </div>
        </div>
    )
}