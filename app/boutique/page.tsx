'use client'
import React, { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
    return (
        <>
            <Navbar/>
            <div className='mt-4'>
                <h1 className='py-4 text-3xl bg-slate-700 text-center text-white '>Boutique</h1>
                <div className='text-center text-2xl m-8'>
                    <h3>Bienvenue dans Notre Boutique</h3>
                </div>
            </div>
            
        </>
    );
};

export default page;