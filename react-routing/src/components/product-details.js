import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({});
    const fetchProductDetails = async () => {
        const responsePromise =
            await fetch(`https://dummyjson.com/products/${id}`);
        const productResponse = await responsePromise.json();
        setProduct(productResponse)
    }
    useEffect(() => {
        fetchProductDetails().then();
    }, [id])
    return <>
        Name:{product.title}<br/>
        Description:{product.description}<br/>
    </>
}