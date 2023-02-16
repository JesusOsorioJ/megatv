import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import { activateMiddle, deactivateMiddle } from '../store/actions';
import { createClients } from '../services/clients.js';
import { getAddressBy } from '../services/address';
import './Home.scss';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';


export default function Home() {
    const page = useSelector((state) => state.view);
    const [form, setForm] = useState({});
    const [allAddress, setallAddress] = useState([]);
    

    const handlerOnChange = async (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        if  (name == "address"){
            const response = await getAddressBy(value);
            console.log("response",response)
            setallAddress(response);
        }
    };

    const handleOnClickSubmit = async () => {
        // console.log(form)
        const response = await createClients(form);
    }

return (
    <div className='home'>
        {(page === 1) && (<Page1 />)}
        {(page === 2) && (
        <Page2 handlerOnChange={handlerOnChange}/>
        )}
        {(page === 3) && (
        <Page3 handlerOnChange={handlerOnChange}
        allAddress={allAddress}
        />
        )}
        {(page === 4) && (
        <Page4 handlerOnChange={handlerOnChange}/>
        )}
        {(page === 5) && (
        <Page5 handlerOnChange={handlerOnChange}/>
        )}
        {(page === 5 ) && (
        <button onClick={handleOnClickSubmit}>
              Subscribe now!
        </button>
        )}
    </div>

)}