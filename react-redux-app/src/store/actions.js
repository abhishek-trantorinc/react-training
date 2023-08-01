export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export const getProducts = () => ({type:GET_PRODUCTS});
export const getProductsSuccess = (products) => ({type: GET_PRODUCTS_SUCCESS, payload: products});
export const fetchProducts = () => (dispatch)=>{
    dispatch(getProducts());
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>{
            dispatch(getProductsSuccess(products))
        })
}

export const addToNumber = (number) => ({type: 'INCREMENT', payload: number});