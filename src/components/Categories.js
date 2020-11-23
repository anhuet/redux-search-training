import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEraser } from '@fortawesome/free-solid-svg-icons';

import '../sass/menu.sass'
import { setClearAll, setTitle,setTitleLv1,setTitleLv2} from '../action/menu';
import { useDispatch, useSelector } from 'react-redux';




function Categories(props) {
    const dispatch = useDispatch()
    const innerCategory = useSelector(state => state.menu.innerCategory)
    const valueTitle = useSelector(state => state.menu.title.title_lv0)
    const titleLv1 = useSelector(state => state.menu.title.title_lv1)
    const titleLv2 = useSelector(state => state.menu.title.title_lv2)
    const type = useSelector(state => state.menu.type)
    const brand = useSelector(state => state.menu.brand)
    const from = useSelector(state => state.menu.from)
    const end = useSelector(state => state.menu.end)
    const rate= useSelector(state => state.menu.rate)


    const handleTitle = title => {
        dispatch(setTitle(title))
            
        
    }

    const handleTitleLv1 = title => {
       dispatch(setTitleLv1(title))
        
    }
    const handldeTitleLv2 = title => {
        dispatch(setTitleLv2(title))
        
    }
    
    return (
        <div className ="menu__result">
            <div className = "clear " style = {{display : from||valueTitle||titleLv1||titleLv2||rate||from||end||brand.length!==0||type.length!==0? "block" : "none"}} >
                <a   onClick = {() => dispatch(setClearAll())}>
                    <FontAwesomeIcon icon ={faEraser}/>
                    Clear all filter
                </a>
            </div>
            <h3> Show result </h3>
            
            <ul>
                {innerCategory.map(item => 
                ( <li key = {item.id}>
                    <span onClick = {() => handleTitle(item.title)} id ={valueTitle === item.title ? "active" : ""} >
                        <FontAwesomeIcon icon = {faAngleRight}/> {item.title}
                    </span>
                    <ul style = {{display : valueTitle === item.title ? "block" : "none" } }>
                        {item.categories.map(subitem => 
                        (<li key = {subitem.id}>
                            <span className = "sub__title"  onClick = {() => handleTitleLv1(subitem.type)} id ={titleLv1 === subitem.type ? "active" : ""} >
                                <FontAwesomeIcon icon = {faAngleRight}/> {subitem.type}
                            </span>
                            <ul style = {{display : titleLv1 === subitem.type ? "block" : "none" } }>
                                
                                {subitem.category.map(subitem => 
                                    (subitem.length !=0 ? <li key = {subitem.id}>
                                        <span className = "sub__title2" onClick = {() => handldeTitleLv2(subitem.type)}  id ={titleLv2=== subitem.type ? "active" : ""}>
                                            <FontAwesomeIcon icon = {faAngleRight}/> {subitem.type}
                                        </span>
                                
                                    </li> : ""
    )                               )}
                            </ul>
                            
                        </li>
)                       )}
                    </ul>
                    

                    
                    
                </li>)
                 )}
            </ul>

            
            
        </div>
    );
}

export default Categories;