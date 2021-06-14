import list from "./productList.json"

export const fetchData = async () =>{
    const productList = list;
    const result = await JSON.parse(JSON.stringify(productList));
    return result
}

