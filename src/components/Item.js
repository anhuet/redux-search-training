import React from 'react';
import PropTypes from 'prop-types';

import '../sass/product.sass'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from 'react-redux';


Item.propTypes = {
    
    items : PropTypes.array
};

function Item(props) {
    const items = useSelector(state => state.products.product)
    
    function displayStar(numberStar) {
        let stars = []
        for (let i = 0; i < numberStar; i++) {
			stars.push(
				<span key= {i}className="star">
					<FontAwesomeIcon icon={fasStar} />
                    
				</span>
			);
		}
		for (let i = 0; i < 5 - numberStar; i++) {
			stars.push(
				<span className="star" key={5 - i}>
					<FontAwesomeIcon icon={farStar} />
				</span>
			);
		}
		return stars;
    }
    
   console.log(items)
    return (
        <div className= "product">
            
            
                {items.map(item => 
                ( <div key = {item.id} className= "product__item">
                    <div className="container">
                        <div className="product__img"> 
                            <a href={`/product/${item.objectID}`}>
                                <img src= {item.image}></img>

                            </a>
                            
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.type}</p>
                        <div className="product__bottom">
                            <div className="product__bottom--rate">{displayStar(item.rating)}</div>
                            <h5>${item.price}</h5>

                        </div>

                    </div>
                    
                </div>)
                 )}
            </div>
       

            
    );
}

export default Item;