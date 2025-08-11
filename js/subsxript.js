// ------------------------------------Mobile headermenu 
const mobil_menu=document.querySelector(".mobil_menu")
const mobilBg=document.querySelector(".mobil_menu_bg")
const side_bar=document.querySelector(".side_bar")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click" ,function(){
    mobil_menu.style.visibility="visible";
    side_bar.style.left="0";
    mobilBg.style.opacity="1";
});
    
mobilBg.addEventListener("click",function(){
    mobil_menu.style.visibility="hidden";
    side_bar.style.left="-320px";
    mobilBg.style.opacity="0";
});

// -----------------------------------------headerType

let navList = document.querySelectorAll(" nav .menu>li");
const Mobile_heder = document.querySelector('.Mobile_heder');


navList.forEach(function (navItem) {
    navItem.addEventListener("mouseover", function () {
        this.querySelector(".sub_menu").style.height = "40px";
        this.querySelector(".sub_menu").style.paddingTop = "7px";
        document.querySelector(".header_wrap").classList.add("on");
    });
});

navList.forEach(function (navItem) {
    navItem.addEventListener("mouseleave", function () {
        this.querySelector(".sub_menu").style.height = "0px";
        this.querySelector(".sub_menu").style.paddingTop = "0px";
        document.querySelector(".header_wrap").classList.remove("on");
    });
});


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    // 원하는 스크롤 위치 (예: 200px 이상)
    if (scrollPosition > 200) {
        Mobile_heder.style.height="70px";
    } else {
        Mobile_heder.style.height="0px";
    }
});

 // =======================================baenerTextType

 const baenertap = document.querySelectorAll(".baenerText_title ul li a");
 const baenerCont = document.querySelectorAll(".baenerText_cont")

 baenertap.forEach(tab => {
     tab.addEventListener('click', (event) => {
         event.preventDefault();
         const contentId = tab.getAttribute('data-content');
         baenerCont.forEach(item => {
             item.style.display = 'none';
         });
         document.getElementById(contentId).style.display = 'block';
         baenertap.forEach(t => {
             t.classList.remove('on');
         });
         tab.classList.add('on');
     });
 });

// --------------------------ScrollSmoother
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


