import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage} from '../action/product';

function Pageination(props) {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.products.page)
    const totalPage = Math.ceil(useSelector(state => state.products.totalPage)/8)

    const pageNumber = []
    for(let i = 1 ; i <= totalPage; i++)
     pageNumber.push(i)
    
    const setPageNumber = (number) => {
        dispatch(setCurrentPage(number))
    }
    
    return (
        <div className="page">
            <button 
                disabled = {currentPage <=1}
                onClick = {() => dispatch(setCurrentPage(currentPage-1))}>
                    Pre
            </button>
            {
                pageNumber.map(number => <button className="page_number" id ={currentPage === number ? "active" : "none" } onClick = {() => setPageNumber(number)}> {number}</button>)
            }
            
            <button 
                disabled = {currentPage >= totalPage }
                onClick={() => dispatch(setCurrentPage(currentPage+1))}>
                Next
            </button>
        </div>
       
    );
}

export default Pageination;