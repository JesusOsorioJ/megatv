import React from 'react';
import { setView } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function Page4({handlerOnChange}) {
    const dispatch = useDispatch();

    const handlerOnClick= (e) =>{
        e.preventDefault();
        dispatch(setView(5));
    }
  
  return (
    <div className='page4'>
        <h4 className='title'>Please select the TV plan you want to enjoy:</h4>
            <form onSubmit={handlerOnClick} >
              <div className='flexcont'>
              <div className='target'>
                <div className='target1'>
                <h2 className='targettitle'>Basic</h2>
              <h2 className='targettitle1'>service</h2>
                </div>
                <div className='target2'>
                <h2 className='targetprice2'>$</h2>
              <h2 className='targetprice1'>30</h2>
              <h2 className='targetprice2'>/mo</h2>
                </div>
                <input required onChange={handlerOnChange} type="radio" name="plan" value="basic"/>
             </div>
              
              <div className='target'>
                <div className='target1'>
                <h2 className='targettitle'>Premium</h2>
              <h2 className='targettitle1'>service</h2>
                </div>
                <div className='target2'>
                <h2 className='targetprice2'>$</h2>
              <h2 className='targetprice1'>50</h2>
              <h2 className='targetprice2'>/mo</h2>
                </div>
                <input required onChange={handlerOnChange} type="radio" name="plan" value="premium"/>
             </div>

              </div>
              
             <button type="submit">NEXT</button>
        </form>
       

    </div>
        
)}