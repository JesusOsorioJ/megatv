import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import { activateMiddle, deactivateMiddle } from '../store/actions';
// import { createClients } from '../services/clients.js';
import { allAddress } from '../services/address';
import './Home.scss';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';


export default function SignupProfessional() {
    const page = useSelector((state) => state.view);
    const [form, setForm] = useState(1);
    
    const [categories, setCategories] = useState();

    // useEffect(async () => {
    //     const response = await allCategories();
    //     allAddress(response);
    //   }, []);

    const handlerOnChange = (e) => {
        const { name, value } = e.target;
        console.log()
        setForm({ ...form, [name]: value });
        
    };

    const handleOnClickSubmit = async () => {
        console.log(form)
        // const response = await createClients(data);

    }

return (
    <div>
        {(page === 1) && (<Page1 />)}
        {(page === 2) && (
        <Page2 handlerOnChange={handlerOnChange}/>
        )}
        {(page === 3) && (
        <Page3 handlerOnChange={handlerOnChange}/>
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