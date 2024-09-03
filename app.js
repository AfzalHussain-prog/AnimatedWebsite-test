const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// let a = document.querySelector('#elem1');
// let image = a.getAttribute('data-image');
// console.log(image);

function page4Animation(){
    let elemCont=document.querySelector('.elem-cont');
let fixed = document.querySelector('.fixed-image');
elemCont.addEventListener('mouseenter',()=>{
    fixed.style.display='block'
})
elemCont.addEventListener('mouseleave',()=>{
    fixed.style.display='none';
})


let elems=document.querySelectorAll('.elem');
elems.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        let image=e.getAttribute('data-image');
        fixed.style.backgroundImage=`url(${image})`
    })
})
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        freeMode: true,
      });
}
swiperAnimation();
page4Animation();

document.querySelector('.swiper').addEventListener('mouseenter', function() {
    this.style.cursor = 'url("./assests/arrows-left-right-solid.svg"), auto';
});

document.querySelector('.swiper').addEventListener('mouseleave', function() {
    this.style.cursor = 'pointer';
});

function menuAnimation(){
    let menu=document.querySelector('nav h3');
let full_scr=document.querySelector('.full-scr');
let navImg=document.querySelector('nav img');
var flag=0;
menu.addEventListener('click',()=>{
   if(flag==0){
    full_scr.style.top=0;
    navImg.style.opacity=0;
    flag=1;
   }
   else{
    full_scr.style.top="-100%";
    navImg.style.opacity=1;
    flag=0;
   }
})

}
function loaderAnimation(){
    
let loader=document.querySelector('.loader');
setTimeout(()=>{
    loader.style.top="-100%";
},4000);
}
loaderAnimation();
menuAnimation();
