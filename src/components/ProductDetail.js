import React from 'react';
import { useSelector } from 'react-redux';

function ProductDetail(props) {
    const items = useSelector(state => state.product)
    console.log(items)

    
    return (
        <div>
            
        </div>
    );
}

export default ProductDetail;
