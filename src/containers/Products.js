import React , { useEffect } from 'react';
import Item from '../components/Item'
import Pageination from '../components/Pageination'
import { useDispatch, useSelector } from 'react-redux';
import { setSort} from '../action/product'
import callProducts from '../callAPi/callProducts';

import Menu from '../components/Menu'





function Products(props) {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.products.sort)
  const titleLv1 = useSelector(state => state.menu.title.title_lv1)
  const titleLv2 = useSelector(state => state.menu.title.title_lv2)
  const search = useSelector(state => state.navbar.search)
  const totalPage =useSelector(state => state.products.totalPage)
  const page = useSelector(state => state.products.page)
  const title = useSelector(state => state.menu.title.title_lv0)
  const type = useSelector(state => state.menu.type)
  const rate =  useSelector(state => state.menu.rate)
  const brand = useSelector(state => state.menu.brand)
  const range = useSelector(state => state.menu.range)
  const from = useSelector(state =>state.menu.from)
  const end = useSelector(state =>state.menu.end)
  const loading = useSelector(state => state.products.loading)
  
    useEffect(() => {
      dispatch(callProducts(sort,search,page,title,type,rate,brand,range,from,end,titleLv1,titleLv2))
        
    }, [sort,search,page,title,type,rate,brand,range,from,end,titleLv1,titleLv2,dispatch]);
    
          

   
    
   
    return (

      <div className="product-container">
        <div className="menu">
            <Menu />
          </div>
        <div className="products">
        {
          loading ? <h3 className= "loading">Wait a second, page loading</h3> : ( <div className= "product__header">
          <p className="product__count">{totalPage} results found</p>
            <div className="product__filter">
              <select 
                value = {sort}
                onChange = {(e) => dispatch(setSort(e.target.value))}>  
                <option value="">Featured</option>
                <option value="asc">Price asc.</option>
                <option value="desc">Price desc.</option>
             </select>

            </div>

        </div>)
        }
        <Item />
        <Pageination />

        </div>
        
        
        
        
  
      </div>
      );
 
  }
    
  


export default Products;