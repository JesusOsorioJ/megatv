import React from 'react';
import { setView } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function Page3({handlerOnChange}) {
    const dispatch = useDispatch();

    const handlerOnClick= (e) =>{
        e.preventDefault();
        dispatch(setView(4));
    }
  
  return (
    <div class='Page2'>
        <h3>Pleasure to meet you, Cristian!</h3>
        <h3>What is your install address?</h3>
        <form onSubmit={handlerOnClick}>
            <input name='address'  onChange={handlerOnChange} placeholder='135 York Stret, Brooklyn, Ny,11201'/>
            <button type="submit">Next</button>
        </form>  
        <h6>I can't find my address</h6>      
    </div>
        
)}