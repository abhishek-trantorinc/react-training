import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../store/actions";

const Home = () => {
    const dispatch = useDispatch();
    const {products, loading} = useSelector(state => state?.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <div className="App">
            {loading && <>Loading...</>}
            {products && products.map((product, index) => {
            return <div>{product.title}</div>
            })
            }
        </div>
    );
};

export default Home;