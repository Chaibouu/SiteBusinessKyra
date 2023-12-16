
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
