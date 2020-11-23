export const fetchProductResquest = () => {
    return {
        type: "FETCH_PRODUCT_RESQUEST"
    }
}

export const fetchProductSuccess = (data) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: data
    }
    
};
export const fetchProductFailure = data => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: data


    }

}

export const setTotalPage = (number) => {
    return {
        type: "SET_TOTAL_PAGE",
        payload: number
    }
};
export const setCurrentPage = (number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: number
    }
    
};
export const setSort = (type) => {
    return {
        type:"SET_SORT",
        payload: type
    }
    
};





