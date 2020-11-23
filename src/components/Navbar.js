import React  from 'react';

import '../sass/navbar.sass'
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../action/navbar';


function Navbar(props) {
    const dispatch = useDispatch()
    const search = useSelector(state => state.navbar.search)
    


    return (
        <div className="navbar">
            <a className="navbar__logo">
                <img  src= "https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"/>
            </a>
            <a className="navbar__brand">
                amazing
            </a>
            <form className="navbar__form" >
                <input type = "text"
                 placeholder="Search a product"
                 value = {search}
                onChange = {(e) =>dispatch(setSearch(e.target.value))}
                   
                />
                <button type="button">
                    Search
                    
                    
                </button>

            </form>
            

            
        </div>
    );
}

export default Navbar;