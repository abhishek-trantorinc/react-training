import {useEffect, useState} from "react";
import * as PropTypes from "prop-types";

function Product(props) {
    return <div>{props.product.title}</div>
}


Product.propTypes = {product: PropTypes.any};

export const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(0);
    const getProdcuts  = ()=>{
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
    }
    useEffect(() => {
        console.log(reload);
        // componentDidMount
        getProdcuts();
        return ()=>{
            // componentWillUnmount
            console.log("Unmounting")
        }
    }, [reload])
console.log("render",reload);
    return <>
        <button onClick={() => {

            //reload= reload + 1;
            setReload(reload + 1)
            console.log(reload);
        } }>Refresh</button>
        {products.map((product) => <Product product={product}/>)}
    </>
}