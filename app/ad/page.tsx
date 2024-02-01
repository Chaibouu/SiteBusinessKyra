import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar />
           <div className='flex items-center justify-center '>
             <div className='lg:w-1/2 m-10 border'>
                <h1 className='text-center md:text-3xl text-2xl bg-slate-700 py-4 text-white'>Ajouter des ficher</h1>
                <form action="" className='flex flex-col md:p-10 p-4'>
                    <label htmlFor="">Nom du film</label>
                    <input className="nomFilm" name="nomFilm" type="text" placeholder="Nom du Film"/>
                    <label htmlFor="">type</label>
                    <select className="typeFilm" name="typeFilm">
                        <option value="Tout les Catégorie">Tout les Catégorie</option>
                        <option value="Film">Film</option>
                        <option value="Série">Série</option>
                    </select>
                    <label htmlFor="">Saison</label>
                    <input className="saisonFilm" name="saisonFilm" type="text" placeholder="Entrer les Saison"/>
                    <label htmlFor="">Image</label>
                    <input className="border "  name="imageFilm" type="file" placeholder="Image du film"/>
                    <div className='w-full flex items-center justify-center m-4'>
                        <button type="submit" id="btnFilm" className="border p-2 px-8 bg-blue-700 rounded">Ajouter</button>
                    </div>
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                </form>
            </div>
           </div>
        </>
    );
};


export default page;