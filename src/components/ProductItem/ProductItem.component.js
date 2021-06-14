import ProductSummary from "../ProductSummary/ProductSummary.component";
import Button from "../Button/Button.component";
import "./ProductItem.css";
import {useHistory} from "react-router";

const ProductItem = (props) => {
    const {id} = props;
    const link = "/details/" + id;
    const history = useHistory();
    return (
        <div className="product-container">
            <div><ProductSummary {...props} /></div>
            <div>
                <Button onClick={()=>history.push(link)}>View Details</Button>
            </div>
        </div>
    );
};
export default ProductItem;
