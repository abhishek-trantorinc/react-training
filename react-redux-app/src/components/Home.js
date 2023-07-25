import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const {count} = useSelector(state => state.counter)
    return (
        <div className="App">
            <button onClick={()=>{
                dispatch({type:"INCREMENT"})
            }}>Add</button>
            <button onClick={()=>{
                dispatch({type:"DECREMENT"})
            }}>Subtract</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Home;