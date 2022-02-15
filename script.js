var iconBar = document.querySelector('.fa-bars');
var iconTimes = document.querySelector('.fa-times');
var header = document.querySelector('.header-container');

console.log("hello");
iconBar.addEventListener('click', ()=>{
    iconTimes.style.display= 'block';
    iconBar.style.display='none';
    header.style.display = 'block';
});
iconTimes.addEventListener('click', ()=>{
    iconTimes.style.display= 'none';
    iconBar.style.display='block';
    header.style.display = 'none';
});