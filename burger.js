const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar");
burger.addEventListener("click", function () {
    nav.classList.toggle("appear");
    burger.classList.toggle("close");
});
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
        nav.classList.toggle("appear");
        burger.classList.toggle("close");

    });
});

function checkTask(){ 
return new Promise(resolve,reject) => {
setTimeout(()=> {
resolve("there");    
}, 1000);
};
    }
checkTask.then(function(resolved) =>{
console.log(resolved);
               }).catch(function(error){
console.log(error);
               });

let animDur = 3000;
let frameDur = 1000/60;
let totalDur = animDur / frameDur;

