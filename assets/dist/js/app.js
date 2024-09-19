let menuOut =document.querySelector('.fa-times')
let menuIn =document.querySelector('.fa-bars')
let red=document.querySelector('.red')
let white=document.querySelector('.white')
let black=document.querySelector('.black')
const elements = document.querySelectorAll('.red, .black, .white');

// Loop through the NodeList and remove the active class


menuOut.addEventListener('click',e=>{
    red.style.transitionDuration = '2s';
    white.style.transitionDuration = '1s';
    black.style.transitionDuration = '500ms';
    for (const element of elements) {
  element.classList.remove('active');
}  
})
menuIn.addEventListener('click',e=>{
    red.style.transitionDuration = '500ms';
    white.style.transitionDuration = '1s';
    black.style.transitionDuration = '2s';
    for (const element of elements) {
  element.classList.add('active');
}  
})