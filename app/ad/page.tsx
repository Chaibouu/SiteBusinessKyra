'use client'
import Navbar from '@/components/Navbar/Navbar';
import React, { useState } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addFile} from '@/firebase/fileFunctions';
import {db} from "@/firebase/firebase"
import { collection,addDoc, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';



/* async function addFile(name:any, type:any, saison:any, image:any) {
    try{
        const docRef = await addDoc(collection(db, 'film'),{
            image: await addFile(image, `/${type}`, name);
            nom : name,
            type: type,
            saison: saison,
        })
        console.log("Document written with ID : ",docRef.id);
        return true;
    }catch(error){
        console.error("error adding document",error);
        return false;
    }    
} */

const Page = () => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [saison, setSaison] = useState('')
    const [image, setImage] = useState('')
    const [disabledButton, setDisabledButton] = useState(false);


    const handleNameChange = (e:any) =>{
        setName(e.target.value)
    }
    const handleTypeChange = (e:any) =>{
        setType(e.target.value)
        setSaison('');
    }
    const handleSaisonChange = (e:any) =>{
        setSaison(e.target.value)
    }
    const handleImageChange = (e:any) =>{
        const file = e.target.files[0];
        setImage(file);
    }

    const addFilee = async (name:any, type:any, saison:any, image:any)=> {
        try{
            const docRef = await addDoc(collection(db, 'film'),{
                image: await addFile(image, `/${type}`, name),
                nom : name,
                type: type,
                saison: saison,
            })
            console.log("Document written with ID : ",docRef.id);
            return true;
        }catch(error){
            console.error("error adding document",error);
            return false;
        }    
    }


    const handleSubmit = async (e:any)=>{
        e.preventDefault();
        const added = await addFilee(name, type, saison, image);
        if(added){
            setName('')
            setType('')
            setSaison('')
            e.target.reset();
            alert('ajouter donner')
        }
    }

    const onsubmit = (e:any) =>{
        e.preventDefault();
        setDisabledButton(true);
        if (!name && !type && !image) {
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
                console.log(name);
              return;
        }
        if (!name) {
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
                console.log(name);
                
              return;
        }
        if (!type) {
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
                console.log(name);
                
              return;
        }
        if (!image) {
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
                console.log(name);
                
              return;
        }
        else{
            console.log("helloooo");
            console.log(name);
            console.log(type);
            console.log(saison);
        }
    }


    return (
        <>
            <Navbar />
           <div className='flex items-center justify-center '>
             <div className='lg:w-1/2 m-10 border'>
                <h1 className='text-center md:text-3xl text-2xl bg-slate-700 py-4 text-white'>Ajouter des ficher</h1>
                <form action="" onSubmit={(e)=>handleSubmit(e)} className='flex flex-col md:p-10 p-4'>
                   <div className='m-2 flex flex-col'>
                        <label htmlFor="">Nom du film</label>
                        <input className="nomFilm" name="nomFilm" type="text" placeholder="Nom du Film" value={name} onChange={handleNameChange}/>
                   </div>
                   <div className='m-2 flex flex-col'>
                        <label htmlFor="">type</label>
                        <select className="typeFilm" name="typeFilm" value={type} onChange={handleTypeChange}>
                            <option value="Tout les Catégorie">Tout les Catégorie</option>
                            <option value="Film">Film</option>
                            <option value="Série">Série</option>
                        </select>
                   </div>
                   <div className='m-2 flex flex-col'>
                        <label htmlFor="">Saison</label>
                        <input className={`${type === "Film" ? "border-red-600" : ""}`} disabled={type === "Film"} name="saisonFilm" type="text" placeholder="Entrer les Saison" value={saison} onChange={handleSaisonChange}/>
                   </div>
                    <div className='m-2 flex flex-col'>
                        <label htmlFor="">Image</label>
                        <input className="border "  name="imageFilm" type="file" placeholder="Image du film" onChange={handleImageChange}/>
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