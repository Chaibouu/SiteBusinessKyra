'use client'
import React, { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastname] = useState('')
    const [message, setMessage] = useState('')
    const [disabledButton, setDisabledButton] = useState(false);

    const handlefirstnameChange = (e:any)=>{
        setFirstName(e.target.value)
    }

    const onsubmit = (e:any) =>{
        e.preventDefault();
        setDisabledButton(true);
        if (!firstname && !lastname && !message) {
            toast.error('Veuillez remplir les champs', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                alert("Veuillez remplir les champs")
                setDisabledButton(false)
                console.log("erreur");
              return;
        }
        if (!firstname) {
            toast.error('Veuillez saisir un nom', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                setDisabledButton(false)
                console.log("erreur");
              return;
        }
        if (!lastname) {
            toast.error('Veuillez saisir un type', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                setDisabledButton(false)
                console.log("erreur");
              return;
        }
        if (!message) {
            toast.error('Veuillez charger une image', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                setDisabledButton(false)
                console.log("erreur");
              return;
        }
        else{
            console.log("helloooo");
            console.log(message);

        }
    }

    return (
        <>
            <Navbar />
           <div className='flex items-center justify-center '>
             <div className='lg:w-1/2 m-10 border'>
                <h1 className='text-center md:text-3xl text-2xl bg-slate-700 py-4 text-white'>Contacte</h1>
                <form action="" onSubmit={(e)=>onsubmit(e)} className='flex flex-col md:p-10 p-4'>
                    <div>
                        <div className='m-2 flex flex-col'>
                            <label htmlFor="">Nom</label>
                            <input className="nom" name="nom" type="text" placeholder="Nom" value={firstname} onChange={handlefirstnameChange}/>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center m-4 mt-8'>
                        <button type="submit" disabled={disabledButton} className={`border p-2 w-1/2 text-white px-8 bg-[#05115A] rounded ${disabledButton ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>Ajouter</button>
                    </div>
                    {/* comment */}
                    
                </form>
            </div>
           </div>
        </>
    );
};

export default Page;