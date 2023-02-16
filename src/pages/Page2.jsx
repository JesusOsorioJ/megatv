import React from 'react';
import { setView } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function Page2({handlerOnChange}) {
    const dispatch = useDispatch();

    const handlerOnClick= (e) =>{
        e.preventDefault();
        dispatch(setView(3));
    }
  return (
    <div className='page2'>
        <h3 className='text'>Awesome! Let's get started with the basics</h3>
        <form className='boxinput' onSubmit={handlerOnClick}>
            <input className='input' name='firstname' onChange={handlerOnChange}  placeholder='First Name'/>
            <input className='input' name='secondname' onChange={handlerOnChange} placeholder='Second Name'/>
            <button type="submit">Next</button>
        </form>        
    </div>


)}