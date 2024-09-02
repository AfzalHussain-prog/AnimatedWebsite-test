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
        
      });
}
swiperAnimation();
page4Animation();

document.querySelector('.swiper').addEventListener('mouseenter', function() {
    this.style.cursor = 'url("./arrows-left-right-solid.svg"), auto';
});

document.querySelector('.swiper').addEventListener('mouseleave', function() {
    this.style.cursor = 'pointer';
});