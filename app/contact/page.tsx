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

    const handleFirstNameChange = (e:any)=>{
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e:any)=>{
        setLastname(e.target.value)
    }
    const handleMessageChange = (e:any)=>{
        setMessage(e.target.value)
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
           <div className='flex items-center justify-center bg-red-600'>
             <div className='lg:w-1/2 m-10 border'>
                <h3 className='text-center md:text-3xl text-2xl bg-slate-700 py-4 text-white '>Contacte</h3>
                <form action="https://formspree.io/f/xgegalzy" method="POST" className='flex flex-col md:p-10 p-4'>
                    <div>
                        <div className='md:flex w-full'>
                            <div className='my-1 md:mx-1 md:me-2 flex flex-col md:w-1/2'>
                                <label htmlFor="">Nom</label>
                                <input className="nom rounded" name="nom" type="text" placeholder="Entrez votre nom" value={lastname} onChange={handleLastNameChange}/>
                            </div>
                            <div className='my-1 flex flex-col md:w-1/2'>
                                <label htmlFor="">Prénom</label>
                                <input className="prenom rounded" name="prenom" type="text" placeholder="Entrez votre prénom" value={firstname} onChange={handleFirstNameChange}/>
                            </div>
                        </div>
                        <div className='my-1 flex flex-col w-full'>
                            <label htmlFor="">Prénom</label>
                            <textarea id="message" name="message" value={message} onChange={handleMessageChange} cols="30" rows="5" className='md:rows="10" rounded' ></textarea>
                        </div>

                    </div>
                    <div className='w-full flex items-center justify-center m-4 mt-8'>
                        <button type="submit" disabled={disabledButton} className={`border p-2 w-1/2 text-white px-8 bg-[#05115A] rounded ${disabledButton ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>Envoyer</button>
                    </div>
                    {/* comment */}
                    {/* comment */}
                    
                </form>
            </div>
           </div>
        </>
    );
};

export default Page;