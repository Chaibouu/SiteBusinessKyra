import React from 'react';

const page = () => {
    return (
        <>
            <div>
                <h2>Ajouter un produit</h2>
                <form action=""> 
                    <div>
                        <label htmlFor="">Nom</label>
                        <input 
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Type</label>
                        <input 
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Prix</label>
                        <input 
                            type="text" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default page;