import React , {useEffect,} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFrom,setEnd, setRange } from '../action/menu';
import fetchPrice from '../callAPi/callPrice'








Price.propTypes = {
    
};

function Price(props) {
    const dispatch = useDispatch()

    const priceRange = useSelector(state => state.menu.price)
    const from = useSelector(state => state.menu.from)
    const end = useSelector(state => state.menu.end)
    const loading = useSelector(state => state.menu.loadingPrice)
    
    const handlePrice = (price) => {
        dispatch(setRange(price))
       
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
       }
    const setFromValue = (value) => {
        dispatch(setFrom(value))
    }
    const setEndValue = (value) => {
        dispatch(setEnd(value))
    }
    
    

    useEffect(() => {
        dispatch(fetchPrice())
       
    },[dispatch]);
    

    const render = (from,end) => {
    if(from!==''&&end!=='') return <li> $ {from} - {end}</li>
    if(from!=='' &&end  ==='') return <li> ≥ {from}</li>
    if(from ===''&&end!=='') return <li>≤ {end}</li>
    return (priceRange.map(item => {
        if(item.id ===1) 
            return <li key={item.id} 
                        onClick = {() => handlePrice(item.price_range)} >
                        ≤ {item.price_range} 
                    </li>
        if(item.id ===priceRange.length) 
            return <li key={item.id} onClick = {() => handlePrice(item.price_range)} > ≥ {item.price_range} </li>
        else 
            return <li key={item.id} onClick = {() => handlePrice(item.price_range)} > {item.price_range} </li>
    }))
    }
  
    
    return (
        
        <div className= "price">
            <h3>Price</h3>
            <ul>
            {
                render(from,end)
            }

            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                <span>$</span>
                <input
                    type="number"
                    value={from}
                    onChange={(value) => setFromValue(value.target.value)}
                />
                </label>
                <span></span>
                <label>
                <span>$</span>
                <input
                    type="number"
                    value={end}
                    onChange={(value) => setEndValue(value.target.value)}
                />
                </label>
                <button type="submit">Go</button>
            </form>
            
        </div>
       
    );
}

export default Price;