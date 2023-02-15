import React from 'react';
import { useState, useEffect } from 'react';

import { setView } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function Page1() {
    const dispatch = useDispatch();

    const handlerOnClick= (e) =>{
        dispatch(setView(2));
    }

  return (

    

    <div className='Page1'>
       <h1>The Best TV service around</h1>
        <h3>Are you ready to enjoy ultra-best service?</h3>
        <button onClick={handlerOnClick}>Yes!</button>
    </div>
    
        
        
        
)}