const bar=document.getElementById('bar');
const menu=document.getElementById('menu');

bar.addEventListener('click',()=>{
    menu.classList.toggle('active')
})

let  link=document.querySelectorAll('.link')

for (i=0;i<link.length;i++){
    link[i].addEventListener('click',()=>{
        menu.classList.toggle('active')
    })
}
