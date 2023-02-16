import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'

import { isloading } from '../store/actions';
import { createClients } from '../services/clients.js';
import { getAddressBy } from '../services/address';
import './Home.scss';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';


export default function Home() {
    const dispatch = useDispatch();
    const {view,middle}  = useSelector((state) => state);
    const [form, setForm] = useState({});
    const [allAddress, setallAddress] = useState([]);

    const handlerOnChange = async (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        if  (name == "address"&&value.length >0){
            dispatch(isloading(true))
            const response = await getAddressBy(value);
            setallAddress(response);
            setTimeout(() => {
                dispatch(isloading(false))
            },800);
        }
    };

    const handleOnClickSubmit = async (e) => {
        e.preventDefault();
        console.log("form",form);
        await createClients(form);
    }

return (
    <div className='home'>
        {(view === 1) && (<Page1 />)}
        {(view === 2) && (
        <Page2 handlerOnChange={handlerOnChange}/>
        )}
        {(view === 3) && (
        <Page3 handlerOnChange={handlerOnChange}
        allAddress={allAddress}
        middle={middle}/>
        )}
        {(view === 4) && (
        <Page4 handlerOnChange={handlerOnChange}/>
        )}
        {(view === 5) && (
        <Page5 
        handleOnClickSubmit={handleOnClickSubmit}
        handlerOnChange={handlerOnChange}/>
        )}
    </div>

)}