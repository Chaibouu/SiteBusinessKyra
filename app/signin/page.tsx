'use client'
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { db } from "@/firebase/firebase"
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from 'next/navigation';

interface user {
  id: string;
  user: string;
  pass: string;
  // Ajoutez d'autres propriétés nécessaires
}

async function fetchDatabase(): Promise<user[]> {
  const utilisateur = await getDocs(collection(db, 'utilisateurs'));
  const data: user[] = [];

  utilisateur.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id } as user);
  });

  return data;
}


const Page = () => {
    const [utilisa, setUtilisa] = useState([] as user[]);
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [disabledButton, setDisabledButton] = useState(false);

    const router = useRouter();

    const handleUserChange = (e:any)=>{
        setUser(e.target.value)
    }
    const handlePassChange = (e:any)=>{
        setPass(e.target.value)
    }



    useEffect(() => {
        const fetchData = async () => {
          try {
            await getUser();
            const data = await fetchDatabase();
            setUtilisa(data);
          } catch (error) {
           /*  console.error("Error fetching data:", error); */
          }
        };
    
        fetchData();
      }, []);
    
      const getUser = async () => {
        const querySnapshot = await getDocs(collection(db, "utilisateurs"));
        querySnapshot.forEach((doc) => {
          /* console.log(doc.id, " => ", doc.data()); */
        });
      };



    const onsubmit = async (e:any) =>{
        e.preventDefault();
        setDisabledButton(true);
        if (!user && !pass) {
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
              return;
        }
        if (!user) {
            toast.error("Veuillez saisir un nom d'utilisateur", {
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
              return;
        }
        if (!pass) {
            toast.error('Veuillez saisir un mot de passe', {
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
              return;
        }
        else{
             // Obtenez la liste des utilisateurs depuis Firestore
            const usersData = await fetchDatabase();

            // Recherchez l'utilisateur correspondant
            const matchedUser = usersData.find((userData) => userData.user === user);

            if (matchedUser) {
            // Vérifiez si le mot de passe correspond
            if (matchedUser.pass === pass) {
                /* console.log('Connexion réussie!'); */
                // Effectuez ici les actions nécessaires pour une connexion réussie
                router.push('/ad');
            } else {
                toast.error('Mot de passe incorrect', { /* ... */ });
            }
            } else {
            toast.error('Utilisateur non trouvé', { /* ... */ });
            }

            setDisabledButton(false);
        }
    }

    

    return (
        <>
            <Navbar />
           <div className='flex items-center justify-center'>
             <div className='lg:w-1/2 m-10 border rounded'>
                <div className='flex items-center justify-center'><Image src="/logo.png" alt="Business-Kyra" className='w-[150px]' height={1000} width={1000} /></div>
                <h1 className='text-center text-4xl mt-4'>Connexion</h1>
                <form action="" onSubmit={(e)=>onsubmit(e)} className='flex flex-col md:p-10 p-4'>
                    <div>
                        <div className='my-1 flex flex-col'>
                            <label htmlFor="">Utilisateur</label>
                            <input className="user rounded" name="user" type="text" placeholder="Entrez un utilisateur" value={user} onChange={handleUserChange}/>
                        </div>
                        <div className='my-1 flex flex-col mt-4'>
                            <label htmlFor="">Mot de passe</label>
                            <input className="pass rounded" name="pass" type="password" placeholder="Entrez votre mot de passe" value={pass} onChange={handlePassChange}/>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center mt-8'>
                        <button type="submit" disabled={disabledButton} className={`border p-2 w-1/2 text-white px-8 bg-[#05115A] rounded ${disabledButton ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>Connexion</button>
                    </div>   
                </form>
            </div>
           </div>
        </>
    );
};

export default Page;