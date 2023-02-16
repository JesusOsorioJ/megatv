import React from 'react';
import { setView } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function Page3({handlerOnChange,
    allAddress}) {
    const dispatch = useDispatch();
    console.log("allAddress",allAddress)

    const handlerOnClick= (e) =>{
        e.preventDefault();
        dispatch(setView(4));
    }
  
  return (
    <div className='page3'>
        <h3 className='title'>Pleasure to meet you, Cristian! 
            What is your install address?</h3>
        <form className='boxinput' onSubmit={handlerOnClick}>
            <input className='input' name='address'  onChange={handlerOnChange} placeholder='135 York Stret, Brooklyn, Ny,11201'/>
            <div className='emerge'>
                <div className='emergediv'>
                <h3 className='emergetittle'  >colonia</h3>
                <h4 className='emergetext'  >tededewd.,  cefecvtf</h4>
                </div>
                <button className='emergebutton' type="submit">Next</button>
            
            </div>
            <button type="submit">Next</button>
            {/* {allAddress?.map((result) => (
            <div className='emerge'>
                <h3 className='emergetittle' key={result._id} >{result.street}</h3>
                <h4 className='emergetext' key={result._id} >{result.city},{result.state}</h4>
            </div>))} */}
            
            
        </form>  
        <h6>don't find my address</h6>      
    </div>
        
)}