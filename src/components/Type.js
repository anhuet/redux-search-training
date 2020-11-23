import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../action/menu';


function Type(props) {
    const dispatch = useDispatch()

    
    const category = useSelector(state => state.menu.category)
    const type = useSelector(state => state.menu.type)
    
   


    const handleChecked = (item) => {
        const filterType = [...type]
        const index = filterType.indexOf(item)
        if(index === -1)
            filterType.push(item)
        else 
            filterType.splice(index,1)
        dispatch(setType(filterType))
        
    }
    
    
    return (
        <div className = "type">
            <h3>Type</h3>
            {
                category
                .map(item => (item.allType.map(item => (
                <li key = {item.id}>
                    <form>
                        <input type ="checkbox" id = {item.type} checked = {type.includes(item.type) ? true : false} onChange = {() => handleChecked(item.type)}/>
                        <label htmlFor={item}> {item.type} </label>

                    </form>
                    

                </li>
                ))))
            }
            
        </div>
    );
}

export default Type;