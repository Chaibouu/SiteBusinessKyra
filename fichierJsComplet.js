
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
  let btnFilm = document.getElementById('btnFilm')
  const formSignIn = document.querySelector('.signIn')
  const mov = document.querySelector(".mov");

/* Function pour bloquer l'input saison si c'est un film */
/*   typeFilm.addEventListener('click',(e)=>{
    if (typeFilm.value === "Film") {
      saisonFilm.disabled = true;
    } else {
      saisonFilm.disabled = false;
    }
    console.log(typeFilm.value);
  }) */

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

/*     btnFilm.addEventListener('click',(e)=>{
    e.preventDefault()
    if (!nomFilm && !typeFilm && imageFilm) {
      formSignUpFunction()
    }
    else{
      alert("Veuillez remplir les champs")
    }
    
  })
 */



let films = [];
getDocs(film).then((snapshot) =>{
  
  snapshot.docs.forEach((doc) => (
    films.push({...doc.data(), id: doc.id})
    
  ))
  
   films.forEach((element)=>{
    mov.innerHTML +=`<div class="card">
                         <img src="${element.imageUrl}" alt="" />
                         <div class="titre">
                           <span class="nom">${element.nom}</span>
                           connerie
                           <span class="annee">${element.type}</span>
                         </div>
                    </div>`           
    }) 

})
let user = [];
getDocs(utilisateurs).then((snapshot) =>{
  
  snapshot.docs.forEach((doc) => (
    user.push({...doc.data(), id: doc.id})
    
  ))

})



/* )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))) */




const burger = document.querySelector(".contBurger");
const navLink = document.querySelector(".navLink");
const ferme = document.querySelector(".ferme");
const listNav = document.querySelector("#listNav");


const msgContact = document.querySelector(".msgContact");
const nomContact = document.querySelector(".nomContact");
const prenomContact = document.querySelector(".prenomContact");
const btnContact = document.querySelector(".btnContact");
const btn = document.querySelector(".btn");
const btnSignIn = document.querySelector(".btnSignIn");
const userName = document.querySelector(".userName");
const userPass = document.querySelector(".userPass");
const header = document.querySelector('.header');



// Fonction pour vérifier l'existence d'un utilisateur dans Firebase
/* const checkUserCredentials = async (userName, userPass) => {
    try {
        // Utilisez Firebase Authentication pour vérifier les informations d'identification
        const userCredential = await signInWithEmailAndPassword(getAuth(), userName, userPass);

        // Si l'authentification réussit, l'utilisateur existe
        return console.log('oui');;
    } catch (error) {
        // Si l'authentification échoue, l'utilisateur n'existe pas ou les informations d'identification sont incorrectes
        return console.log('non');;
    }
};
console.log(btnSignIn); */

btnSignIn.addEventListener('click', (e) => {
    e.preventDefault(); // Utilisation correcte pour prévenir le comportement par défaut
    user.forEach((element)=>{
        console.log(element.nom);          
        console.log(element.password);   
        if (userName.value =='') {
            alert('Entrer un Utilisateur')
        }
        else if (userPass.value =='') {
            alert('Entrer un Mot de passe')
        }
        else{
            if (userName.value===element.nom && userPass.value===element.password) {
                window.location.href="administrateur.html"
            }
            else{
                alert("Utilisateur n'existe pas")
            }    
        }
  
    }) 
    
});


burger.addEventListener("click",()=>{
    navLink.style.display="block";
    ferme.style.display="block";
    burger.style.display="none";
    listNav.classList.add("navFermer") 
})

ferme.addEventListener("click",()=>{
    navLink.style.display="none";
    ferme.style.display="none";
    burger.style.display="block";
})
btn.addEventListener("click",()=>{
    window.location.href="signIn.html"
})

/* data.forEach((element)=>{
    mov.innerHTML +=`<div class="card">
                     <img src="${element.src}" alt="" />
                     <div class="titre">
                       <span class="nom">${element.nom}</span>
                       <span class="annee">${element.saison}</span>
                     </div>
                </div>`
}) */

/* btnContact.addEventListener("click",(e)=>{
    e.preventDefault();
    let message ={
        nom: nomContact.value,
        prenom: prenomContact.value,
        message: msgContact.value,
    }

     dataContacts.push(message);
})
 */






document.addEventListener('DOMContentLoaded', function () {
/*     const images = [
        'url("./images/Design sans titre (1).png")',
        'url("./images/Babilon23.webp")',
        'url("./images/gameofthrone.jpg")',
        'url("./images/matrix.jpg")',
        'url("./images/TheWitcher.jpeg")',
        'url("./images/bloodshot.jpeg")',
        // Ajoutez autant d'images que nécessaire
    ];

    let currentIndex = 0;

    const changeBackground = () => {
        header.style.backgroundImage = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    };

    // Appeler la fonction de changement d'image toutes les 30 secondes
    const intervalId = setInterval(changeBackground, 10000);

    // Observer pour détecter quand l'élément est visible à l'écran
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                changeBackground();
            }
        });
    }, { threshold: 0.5 }); // Le seuil de 0.5 signifie que lorsque 50% de l'image est visible, l'événement sera déclenché

    // Associer l'observateur à l'en-tête
    observer.observe(header); */
    header.style.backgroundImage ='url(./images/Design\ sans\ titre\ \(1\).png)';
});
