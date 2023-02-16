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
    <div className='page4'>
        <h4 className='title'>Please select the TV plan you want to enjoy:</h4>
            <form className='flexcont' onSubmit={handlerOnClick}>
              <div className='flextarget'>
              <div className='target'>
                <div className='target1'>
                <h2 className='targettitle'>Basic Service</h2>
              <h2 className='targettitle1'>service</h2>
                </div>
                <div className='target2'>
                <h2 className='targetprice2'>$</h2>
              <h2 className='targetprice1'>30</h2>
              <h2 className='targetprice2'>/mo</h2>
                </div>
                <input type="radio" name="empleoactual" value="mediodia"/>
             </div>
              </div>
              
              <div className='flextarget'>
              <div className='target'>
                <div className='target1'>
                <h2 className='targettitle'>Basic Service</h2>
              <h2 className='targettitle1'>service</h2>
                </div>
                <div className='target2'>
                <h2 className='targetprice2'>$</h2>
              <h2 className='targetprice1'>30</h2>
              <h2 className='targetprice2'>/mo</h2>
                </div>
                <input type="radio" name="empleoactual" value="mediodia"/>
             </div>
              </div>
           
        </form>
        <button type="submit">Next</button>

    </div>
        
)}