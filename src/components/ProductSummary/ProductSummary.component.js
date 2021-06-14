import "./ProductSummary.css"
const ProductSummary = (props) => (
    <div className="product-summary--container">
        <div>
            <img src={props.thumbnail} alt="product"/>
        </div>
        <div className="product-name--container">
            <span>{props.name}</span>
            <span>${props.price}</span>
            <span>${props.lastPrice}</span>
        </div>
    </div>
);

export default ProductSummary;
