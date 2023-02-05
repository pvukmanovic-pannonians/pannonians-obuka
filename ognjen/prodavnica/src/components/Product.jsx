export default function Product ({product}) {
    return (
        <div className="productCard">
            <div className="imgBox">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="contentBox" style={{marginTop: '20px'}}>
                <h3 style={{margin: '0'}}>{product.title}</h3>
                <h2 style={{margin: '0'}}>{product.price}</h2>
            </div>
        </div>
    )
}