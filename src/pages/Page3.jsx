import React from 'react';
import { setView } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';


export default function Page3({handlerOnChange, allAddress}) {
    const {middle}  = useSelector((state) => state);
    console.log("cargando",middle);

    const dispatch = useDispatch();
    const [svalue, setValue] = useState();
    const [message, setmessage] = useState();


    const handlerOnClickSelect= (e) =>{
        e.preventDefault();
        const { value } = e.target;
        if (svalue){
        setValue()}else{setValue(value)}
    }

    const handlerOnClick= (e) =>{
        e.preventDefault();
        console.log(typeof handlerOnChange)
        if (svalue){
            handlerOnChange({target:{name:"address",value:svalue}})
            dispatch(setView(4));
        }else{
            setmessage("Please choice a address")
            setTimeout(()=>{
                setmessage()
            },3000)
        }
        
    }
  
  return (
    <div className='page3'>
        <h3 className='title'>Pleasure to meet you, Cristian! 
            What is your install address?</h3>
        <form className='boxinput' onSubmit={handlerOnClick} >
            <input className='input' name='address'  onChange={handlerOnChange} placeholder='135 York Stret, Brooklyn, Ny,11201'/>
            {middle&&<div className='isloading'></div>}
            {message&&<h4 className='message'>{message}</h4>}
            {svalue&& (
            <div className='emerge1'>
              <h4 className='emergetext'>{svalue}</h4>
              <button className='emergebutton1' onClick={handlerOnClickSelect} >X</button>
            </div> 
            )}
            {allAddress?.map((result,i) => (
            <div className='emerge' key={result._id}>
              <div className='emergediv'>
              <h3 className='emergetittle'>{result.street}</h3>
              <h4 className='emergetext'>{result.city},{result.state}</h4>
            </div>
              <button className='emergebutton' onClick={handlerOnClickSelect} value={result.street+","+result.city+","+result.state}>SEL.</button>
            </div> 
            ))}
            <button type="submit">NEXT</button>
            
        </form>  
        <h6>I can't find my address</h6>      
    </div>
        
)}