import React from 'react';
import { setView } from '../store/actions';
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';


export default function Page5({handlerOnChange,
    handleOnClickSubmit}) {
    const [alert, setalert] = useState(false);

    const dispatch = useDispatch();

    
    const handlerOnClick= async (e) =>{
        e.preventDefault();
        await handleOnClickSubmit(e)
        setalert(true)
    }
  
  return (
    <div>
    {(alert)?
        (
        <div className='page5'>
        <h3 className='title'>Great new! you created your account</h3>
        <h3 className='title1'>Now you can enjoy all our great tv shows
        </h3>
        </div>

        ):
        (<div className='page5'>
        <h3 className='title'>Great new! Your first month's free!</h3>
        <h3 className='title1'>to get set up, just provide your email and phone number
            and we can remind you when the free trial ends.
        </h3>
        <form className='boxinput' onSubmit={handlerOnClick}>
            <input required className='input' name='email' placeholder='Email'  onChange={handlerOnChange}/>
            <input required className='input' name='phone' placeholder='Phone number'  onChange={handlerOnChange}/>
            <button type='submit'>
              SUBSCRIBE NOW!
            </button>
        </form> 
        </div>
        )}
             
        </div>
        
)}