import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    // Vos informations de configuration Firebase ici
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID,
    // measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/* const storage = getStorage(firebaseApp); */


const addFile = async (file, folderName, filename) => {
    const storageRef = ref(storage, `${folderName}/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Gérer la progression du téléchargement si nécessaire
            },
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });
  };

const updateFile = async (oldFileURL, newFile, folderName, filename) => {
    // Supprimer l'ancien fichier
    const oldFileRef = ref(storage, oldFileURL);
    await deleteObject(oldFileRef);

    // Ajouter le nouveau fichier
    return addFile(newFile, folderName, filename);
};

const deleteFile = async (fileURL) => {
    const fileRef = ref(storage, fileURL);
    await deleteObject(fileRef);
};



/* let films = [];
getDocs(film).then((snapshot) =>{
  
  snapshot.docs.forEach((doc) => (
    films.push({...doc.data(), id: doc.id})
  ))
   console.log(films);

})
 */






export {db };
