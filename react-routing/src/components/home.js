import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Home = ()=>{
    const [products,setProducts] = useState([]);
    const fetchProducts = async ()=>{
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products})=>setProducts(products));
    }
    useEffect(()=>{
        fetchProducts().then()
        return ()=>{
            //do the cleanup
        }
    },[])
    return <div>
        <ul>
        {products && products.map(product=>{
            return (

                    <li key={product.id}>
                        <Link to={`product-details/${product.id}`}>{product.title}</Link>
                    </li>

            )
        })}
        </ul>
    </div>
}