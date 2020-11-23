import React, { useEffect } from 'react';
import Categories from  './Categories'
import Type from './Type'
import Rating from './Rating'
import Price from './Price'
import Brand from './Brand'



import '../sass/menu.sass'
import { useDispatch, useSelector } from 'react-redux';
import  fetchTypes  from '../callAPi/callType';







function Menu(props) {
    const dispatch= useDispatch()
    const title_lv0 = useSelector(state => state.menu.title.title_lv0)
    const loadingType = useSelector(state => state.menu.loadingType)
    const currentTitle = useSelector(state => state.menu.currentTitle)

  

    useEffect(() => {
        dispatch(fetchTypes(title_lv0,currentTitle)) 
        },[title_lv0,currentTitle,dispatch]);
        
    
    
    return (
        <div id= "menu">
            {
                loadingType ? <h3>Wait a second, loadding ....</h3> : ( <div>
                                        <Categories />
                    <Type />
                    <Brand />
                    <Rating />
                    <Price />
                    </div>
                )       
            }
           
            
            
                
            
        </div>
    );
}

export default Menu;