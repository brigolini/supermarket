import {useQuery} from "react-query";
import {fetchData} from "../../API/api";
import {useParams} from "react-router";
import "./ProductDetails.css";
import {ReactComponent as Star} from "../../components/SGV/star-empty.svg";
import Button from "../../components/Button/Button.component";
import {useState} from "react";
import SnackBar from "../../components/SnackBar/SnackBar.component";

const getStarArray = (rating) =>{
    const result = [];
    while (rating > 0){
        if (rating >= 1)
            result.push(1);
        else
            result.push(rating);
        rating--
    }
    return result;
}

const ProductDetails = () => {
    const [showMessage,setShowMessage] = useState(false);
    const {id} = useParams();
    const {isLoading, data} = useQuery("productList", () => fetchData());
    if (isLoading) return <div>loading</div>;
    const item = data.find(item => item.ProductID === parseInt(id));
    const stars = getStarArray(item.RatingAvg);
    const showSnackBar = () => {
        setShowMessage(true);
        setTimeout(()=>{
            setShowMessage(false);
        },1000)
    }
    return(
        <div className="product-details--container">
            <div>
                <span><img src={item.PictureURL} alt="picture"/></span>
            </div>
            <div className="product-details--description">
                <span>{item.Name}</span>
                <span className="product-details--stars">
                    {stars.map(item=>
                        <>
                            <span
                                style={{width:`${item*30}px`, height: "30px", paddingRight:"5px", overflow:"hidden"}}>
                                <Star/>
                            </span>
                        </>)}
                </span>
                <span>{item.Description}</span>
            </div>
            <div className="product-details--add-cart">
                <span>{item.Price}</span>
                {item.Stock===0?<span style={{color:"red",fontSize:"1.2rem"}}>Out of Stock</span>:null}
                <span>
                    <Button onClick={()=>showSnackBar()}>Add to Cart</Button>
                </span>
            </div>
            <div className="product-details--add-cart">
                <span>{item.price}</span>
                <span>{item.price}</span>
                <span>{item.price}</span>
            </div>
            {<SnackBar visible={showMessage} />}
        </div>
    );
};


export default ProductDetails;
