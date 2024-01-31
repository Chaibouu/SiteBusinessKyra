import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>Ajouter des ficher</h1>
                <form action="">
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
                    <input className="imageFilm"  name="imageFilm" type="file" placeholder="Image du film"/>
                    <div>
                        <button type="submit" id="btnFilm" className="btnFilm">Ajouter</button>
                    </div>
                    {/* comment */}
                    {/* comment */}
                    {/* comment */}
                </form>
            </div>
        </>
    );
};


export default page;