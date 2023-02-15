import React from 'react';
import { setView } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function Page4() {
    const dispatch = useDispatch();

    const handlerOnClick= (e) =>{
        e.preventDefault();
        dispatch(setView(5));
    }
  
  return (
    <div>
        <h4>Please select the TV plan you want to enjoy:</h4>
            <form onSubmit={handlerOnClick}>
              <h2>Basic Service</h2>
              <h4>$30/mo</h4>
            <button type="submit">Next</button>

        </form>
        
    </div>
        
)}