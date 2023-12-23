import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'
  
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js'
import { getStorage,ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js'

const firebaseConfig = {
    apiKey: "AIzaSyBjtm-e31v9bwtFPiTkwhV_09ZJhPaLiFY",
    authDomain: "businesskyra.firebaseapp.com",
    projectId: "businesskyra",
    storageBucket: "businesskyra.appspot.com",
    messagingSenderId: "116680662181",
    appId: "1:116680662181:web:e50593cb3c3b0699c6814c"
  };

  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const storage = getStorage(app);
  
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


  

     


  const dababase = getFirestore(app)
  const utilisateurs = collection(dababase,'utilisateurs')
  const film = collection(dababase,'film')
  let nomFilm = document.querySelector('.nomFilm')
  let typeFilm = document.querySelector('.typeFilm')
  let saisonFilm = document.querySelector('.saisonFilm')
  let imageFilm = document.querySelector('.imageFilm')
  let btnFilm = document.querySelector('.btnFilm')
  const formSignIn = document.querySelector('.signIn')
 
  /* Ajouter un utilisateur à la base*/
  const formSignUp = document.querySelector('.signUp')
    // await addFile(data.photo[0],`users/${user?.id}`,'photo');
    const formSignUpFunction = async ()=>{
      addDoc(film,{
      imageUrl: await addFile(imageFilm.files[0],`${typeFilm.value}`,`${nomFilm.value}` ),
      nom : nomFilm.value,
      type: typeFilm.value,
      saison: saisonFilm.value,
    })
    console.log('====================================');
    console.log('Envoyé');
    console.log('====================================');
    }

    btnFilm.addEventListener('click',(e)=>{
    e.preventDefault()
    formSignUpFunction()
    
  })






  data.forEach((element)=>{
    mov.innerHTML +=`<div class="card">
                     <img src="${element.src}" alt="" />
                     <div class="titre">
                       <span class="nom">${element.nom}</span>
                       <span class="annee">${element.saison}</span>
                     </div>
                </div>`
})
/* comment */
/* comment */
/* comment */
/* comment */
/* comment */
/* comment */
/* comment */
/* comment */
/* comment */
/* comment */