
const burger = document.querySelector(".contBurger");
const navLink = document.querySelector(".navLink");
const ferme = document.querySelector(".ferme");
const listNav = document.querySelector("#listNav");
const mov = document.querySelector(".mov");

const msgContact = document.querySelector(".msgContact");
const nomContact = document.querySelector(".nomContact");
const prenomContact = document.querySelector(".prenomContact");
const btnContact = document.querySelector(".btnContact");
const btn = document.querySelector(".btn");



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
    window.location.href="login.html"
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

/* ---------------------------Base de Données-------------------------------- */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection,getDocs,getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

const dababase = getFirestore(app)
const utilisateurs = collection(dababase,'utilisateurs')
const film = collection(dababase,'film')

/* -------------------------------------------------------------------------- */