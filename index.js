const burger = document.querySelector(".contBurger");
const navLink = document.querySelector(".navLink");
const ferme = document.querySelector(".ferme");
const listNav = document.querySelector("#listNav");
const mov = document.querySelector(".mov");

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


data.forEach((element)=>{
    mov.innerHTML +=`<div class="card">
                     <img src="${element.src}" alt="" />
                     <div class="titre">
                       <span class="nom">${element.nom}</span>
                       <span class="annee">${element.saison}</span>
                     </div>
                </div>`
})