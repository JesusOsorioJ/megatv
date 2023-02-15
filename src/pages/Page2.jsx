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
    <div class='Page2'>
        <h3>Awesome! Let's get started with the basics</h3>
        <form onSubmit={handlerOnClick}>
            <input name='firstname' onChange={handlerOnChange}  placeholder='First Name'/>
            <input name='secondname' onChange={handlerOnChange} placeholder='Second Name'/>
            <button type="submit">Next</button>
        </form>        
    </div>


)}