const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// let a = document.querySelector('#elem1');
// let image = a.getAttribute('data-image');
// console.log(image);

let elemCont=document.querySelector('.elem-cont');
let fixed = document.querySelector('.fixed-image');
elemCont.addEventListener('mouseenter',()=>{
    fixed.style.display='block'
})
elemCont.addEventListener('mouseleave',()=>{
    fixed.style.display='none';
})
// let elem1=document.querySelector('#elem1');
// elem1.addEventListener('mouseenter',()=>{
//     let image = elem1.getAttribute('data-image');
//     fixed.style.backgroundImage = `url(${image})`;
// })

let elems=document.querySelectorAll('.elem');
elems.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        let image=e.getAttribute('data-image');
        fixed.style.backgroundImage=`url(${image})`
    })
})