export const fetTypeResquest = () => {
    return {
        type: "FETCH_TYPE_RESQUEST"
    }

}
export const fetchTypeSuccess= (data) => {
    return {
        type: "FETCH_TYPE_SUCCESS",
        payload: data
    }
}
export const fetchTypeFailure = (data) => {
    return {
        type: "FETCH_TYPE_FAILURE",
        payload: data
    }
}
export const fetchType = (data) => {
    return {
        type: "FETCH_TYPE",
        payload: data
    }
}
export const fetchPriceResquest= () => {
    return {
        type: "FETCH_PRICE_RESQUEST"
    }
}
export const fetchPriceSuccess = (data) => {
    return {
        type: "FETCH_PRICE_SUCCESS",
        payload: data
    }
    
};
export const fetchPriceFailure = (data) => {
    return {
        type: "FETCH_PRICE_FAILURE",
        payload: data
    }
    
}

export const  setBrand= (brand) => {
    return {
        type:"SET_BRAND",
        payload: brand
    }
    
};
export const setType = (type) => {
    return {
        type: "SET_TYPE",
        payload: type
    }
}
export const setRate = (rate) => {
    return {
        type: "SET_RATE",
        payload: rate
    }
    
};
export const  setFrom = (from) => {
    return {
         
            type: "SET_FROM",
            payload: from

    
    }

    
};
export const setEnd = (end) => {
    return {
        type:"SET_END",
        payload: end
    }
    
};
export const setTitle = (title) => {
    return {
        type: "SET_TITLE",
        payload: title
    }
    
};
export const setClearAll = () => {
    return {
        type: "SET_CLEAR"

    }
}
export const setRange = (range) => {
    return {
        type:"SET_RANGE",
        payload: range
    }
    
};
export const setIdTitle = (id) => {
    return {
        type: "SET_ID_TITLE",
        payload: id
    }
}
export const setTitleLv1 = (title) => {
    return {
        type: "SET_TITLE_LV1",
        payload: title
    }
}
export const setTitleLv2 = title => {
    return {
        type: "SET_TITLE_LV2",
        payload: title
    }

}





