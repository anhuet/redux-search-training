import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setBrand} from '../action/menu';

Brand.propTypes = {
    
};

function Brand(props) {
    const dispatch = useDispatch()
    const category = useSelector(state => state.menu.category)
    const brand = useSelector(state => state.menu.brand)
   
    const handleChecked = (item) => {
        const filterByBrand = [...brand]
        
        const index = filterByBrand.indexOf(item)

        if(index === -1)
            filterByBrand.push(item)
        else 
            filterByBrand.splice(index,1)
        dispatch(setBrand(filterByBrand))
            

    }

   
    return (
        <div className = "brand">
            <h3>Brand</h3>
            {
                category
                .map(item => (item.brand.map(item => (
                <li key = {item.id}>
                    <form>
                        <input type ="checkbox" id = {item.type} checked = {brand.includes(item.type) ? true : false} onChange = {() => handleChecked(item.type)}/>
                        <label htmlFor={item.id}> {item.type} </label>

                    </form>
                    

                </li>
                ))))
            }
            
        </div>
    );
}

export default Brand;