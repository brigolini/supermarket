import {useQuery} from "react-query";
import {fetchData} from "../../API/api";
import ProductItem from "../../components/ProductItem/ProductItem.component";


const ProductList = () =>{
    const {isLoading, data} = useQuery("productList", () => fetchData());
    if (isLoading) return <div>loading</div>;
    return (

            <div className="app-container">
                <>
                    {data.map(item => <ProductItem
                        id={item.ProductID}
                        name={item.Name}
                        price={item.Price}
                        thumbnail={item.ThumbnailURL}
                        lastPrice={item["Retail Price"]}
                    />)}
                </>
            </div>
    )
}

export default ProductList;
