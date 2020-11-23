import React from 'react';
import '../sass/rating.sass'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { setRate } from '../action/menu';


function Rating(props) {
    const dispatch = useDispatch()
    const rating = useSelector(state => state.menu.rate)
    
   
    const rate = [5,4,3,2,1]

    const handleRating = (number) => {
        dispatch(setRate(number))
    }
   

    function displayStar(numberStar) {
        let stars = []
        for (let i = 0; i < numberStar; i++) {
			stars.push(
				<span key= {i} className="star" >
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

    
   
   
    return (
        <div className= "rate">
            <h3>Rating</h3>
                <ul>
                    {rate.map(number => 
                    ( 
                    <li key = {number } onClick = {() => handleRating(number)} className = {number ===rating ? "active" : ''} >{displayStar(number)} </li>
                    )
                    )}

                </ul>
                
            </div>
       

            
    );
}

export default Rating;