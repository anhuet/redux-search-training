import { fetchPriceFailure, fetchPriceSuccess } from "../action/menu"
import { fetchPriceResquest } from "../action/menu"

const axios = require('axios');

export const fetchPrice = () => {
    return(dispatch) => {
        dispatch(fetchPriceResquest())
        const url = "http://localhost:3001/prices"
        axios.get(url)
        .then((res) => {
            const {data} = res
            dispatch(fetchPriceSuccess(data))

        })
        .catch(error => dispatch(fetchPriceFailure(error)))

    }

}
export default fetchPrice