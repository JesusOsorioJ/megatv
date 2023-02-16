import React from 'react';
import { setView } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function Page5({handlerOnChange}) {
    const dispatch = useDispatch();

    const handlerOnClick= (e) =>{
        e.preventDefault();
        dispatch(setView(5));
    }
  
  return (
    <div className='page5'>
        <h3 className='title'>Great new! Your first month's free!</h3>
        <h3 className='title1'>to get set up, just provide your email and phone number
            and we can remind you when the free trial ends.
        </h3>
        <form className='boxinput' onSubmit={handlerOnClick}>
            <input className='input' name='email' placeholder='Email'  onChange={handlerOnChange}/>
            <input className='input' name='phoneNumber' placeholder='Phone number'  onChange={handlerOnChange}/>
        </form>  
        <h6>I can't find my address</h6>      
    </div>
        
)}