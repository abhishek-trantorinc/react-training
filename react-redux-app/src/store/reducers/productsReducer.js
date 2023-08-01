export const productsReducer = (state = {products: [], loading: true}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {...state, loading: true};
        case 'GET_PRODUCTS_SUCCESS':
            console.log(action.payload);
            return {...state, products: action.payload, loading: false};
        default:
            return state;
    }
}