const bars=document.querySelector(".fa-bars");
const sidebar=document.querySelector(".sidebar");
const times=document.querySelector(".fa-times");
bars.addEventListener('click',()=>
{
    sidebar.classList.toggle('show-sidebar');
});
times.addEventListener('click',()=>
{
    sidebar.classList.remove('show-sidebar');
});