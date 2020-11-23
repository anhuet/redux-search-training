const { fetTypeResquest, fetchTypeSuccess, fetchTypeFailure,fetchType } = require("../action/menu")

const axios = require('axios');

const fetchTypes = (title,currentTitle) => {
    return dispatch => {
        let url =`http://localhost:3001/types?&title=${currentTitle}`
        if(title) url.replace(`&title=${currentTitle}`,`&title=${title}`)

        const urlType = "http://localhost:3001/types?"
        dispatch(fetTypeResquest())
        Promise.all([
            axios.get(url)
                .then(res => res.data),
            axios.get(urlType)
                .then(res=> res.data)
        ])
        .then(result => {
            dispatch(fetchTypeSuccess(result[0]))
            dispatch(fetchType(result[1]))
        })
         .catch(error => dispatch(fetchTypeFailure(error)) )


    }
    

}
export default fetchTypes