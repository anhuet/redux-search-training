
const initialState = {
    product: [],
    page : 1,
    sort: '',
    totalPage : '',
    loading: false,
    error: null

}
const productReducer = (state = initialState,action) =>  {
    switch(action.type) {
        case "FETCH_PRODUCT_RESQUEST" : {
           return {
            ...state,
            loading: true,
            error: null
           }
            
        }
        case "FETCH_PRODUCTS_SUCCESS": {
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        }
        case "FETCH_PRODUCTS_FAILURE": {
            return {
                ...state,
                loading: false,
                error : action.payload,
                products: []
            }
        }
        
        case "SET_TOTAL_PAGE": {
           
            return {
                ...state,
                totalPage: action.payload,
            };
        }
        case "SET_CURRENT_PAGE": {
            console.log("anh")
            return {
                ...state,
                page: action.payload,
            };
        }
        case "SET_SORT": {
            return {
                ...state,
                sort: action.payload,
            };
        }
        default: {
            return {
                ...state,
            };
        }

    }

    
}
export default productReducer