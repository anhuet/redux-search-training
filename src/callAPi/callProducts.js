import { fetchProductFailure, fetchProductResquest, fetchProductSuccess, setTotalPage } from "../action/product";

const axios = require('axios'); 

export const fetchProducts = (sort,search,page,title,type,rate,brand,range,from,end,titleLv1,titleLv2) => {
    return(dispatch) => {
        dispatch(fetchProductResquest())
        
        let url = `http://localhost:3001/products?_page=${page}&_limit=8`
        if(sort) {
            url += `&_sort=price&_order=${sort}`
          }
          if (search) {
            url += `&name_like=${search}`;
          }
          if (from) {
            url += `&price_gte=${from}`;
          }
      
          if (end) {
            url += `&price_lte=${end}`;
          }
          if (title) {
            url += `&categories.lvl0=${title}`
          }
          if(titleLv1) {
            url += `&categories.lvl1=${titleLv1}`
          }
          if(titleLv2) {
            url += `&categories.lvl2=${titleLv2}`
          }
          if(rate) {
            url += `&rating=${rate}`
          }
          if(range) {
            url += `&price_range=${range}`
          }
          if(type) {
            for(let i = 0 ; i < type.length ; i++) 
              url += `&type=${type[i]}`
            
          }
          if(brand) {
            for(let i = 0 ; i < brand.length ; i++) 
              url += `&brand=${brand[i]}`
            
          }
          let urlToCount = url.replace(`_page=${page}&_limit=8`,'')
          Promise.all([
            axios.get(url).then(res => res.data),
            axios.get(urlToCount).then(res => res.data)
          ])
          .then(results => {
              
              
              dispatch(fetchProductSuccess(results[0]))
              dispatch(setTotalPage(results[1].length))
              
          })
          .catch(error => {
              dispatch(fetchProductFailure(error))

          })
          

    }
};
export default fetchProducts
