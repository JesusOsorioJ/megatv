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

    

    <div className='page1'>
       <h1 className='title'>The Best TV service around</h1>
        <h3 className='text'>Are you ready to enjoy ultra-best service?</h3>
        <button className='button' onClick={handlerOnClick}>LET'S DO IT!</button>
    </div>
    
        
        
        
)}