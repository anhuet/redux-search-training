const initialState = {
    category: [],
    type: [],
    brand: [],
    price:[],
    title: {title_lv0: '',title_lv1: '',title_lv2:""},
    rate: '',
    from:'',
    end:'',
    range:'',
    currentTitle: 'TV Home Theater',
    loadingType: false,
    errorType: null,
    innerCategory: [],
    loadingPrice: false,
    errorLoadPrice: null

}

const menuReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_TYPE_RESQUEST": {
           return {
            ...state,
            loadingType: true,
            errorType: null
           }

        }
        case "FETCH_TYPE_SUCCESS" : {
            return {
               
                    ...state,
                    category: action.payload,
                    loadingType: false
                }
    }
        case "FETCH_TYPE_FAILURE" : {
            return {
                ...state,
                error : action.payload,
                loadingType: false,
                category:[]
            }
        }
        case "FETCH_TYPE" : {
            return {
                ...state,
                innerCategory: action.payload
            }
        }
        case "FETCH_PRICE_RESQUEST": {
            return {
                ...state,
                loadingPrice:true,
                errorLoadPrice: null
                
            }

        }
        case "FETCH_PRICE_SUCCESS" : {
            return {
                ...state,
                price: action.payload,
                loadingPrice: false

            }
        }
        case "FETCH_PRICE_FAILUTRE": {
            return {
                ...state,
                price: [],
                loadingPrice: false,
                errorLoadPrice: action.payload
            }
        }
        case "SET_TYPE" : {
            return {
                ...state,
                type: action.payload
            }
        }
        case "SET_BRAND" : {
            return {
                ...state,
                brand: action.payload
            }
        }
        case "SET_RATE" : {
            return {
                ...state,
                rate: action.payload
            }
        }
        case "SET_TITLE" : {
            return {
                ...state,
                title: {
                    title_lv0 : action.payload ,
                    title_lv1:'',
                    title_lv2:''
                },
                currentTitle: action.payload
            }
        }
        case "SET_FROM" : {
            return {
                ...state,
                from: action.payload
            }
        }
        case "SET_END" : {
            return {
                ...state,
                end: action.payload
            }
        }
        case "SET_RANGE" : {
            return {
                ...state,
                range: action.payload
            }
        }
        case "SET_CLEAR": {
            return {
                ...state,
                brand: [],
                type: [],
                from: '',
                to: '',
                title: '',
                range:'',
                rate:'',
                currentTitle: 'TV Home Theater'

            }
        }
        case "SET_ID_TITLE" : {
            return {
                ...state,
                id: action.payload

            }
        }
        case "SET_TITLE_LV1" : {

            return {
                ...state,
                title:  {
                    title_lv0 : state.title.title_lv0 ,
                    title_lv1: action.payload,
                    title_lv2:''
                }
                
            }
        }
        case "SET_TITLE_LV2" : {
            return {
                ...state,
                title: {
                    title_lv0 : state.title.title_lv0,
                    title_lv1: state.title.title_lv1,
                    title_lv2:action.payload
                }
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default menuReducer