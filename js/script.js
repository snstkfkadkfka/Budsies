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

//   ---------------------------------------------slider_wrap
const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    slidesPerView: '1',
    slideToClickedSlide: true,
    effect: 'coverflow',
    spaceBetween: 0,
    loop: true,
    direction: 'horizontal',
    autoplay: {
        delay: 2500,
        desableOnInteraction: false,
    },
    speed: 1.2e3,
    freemode: true,
    coverflowEffect: {
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        900: {
            spaceBetween: 0,
            coverflowEffect: {
                rotate: 0,
                slideShadows: false,
                stretch: 300,
                depth: 350,
            },
            slidesPerView: '1',
        },
        1130: {
            spaceBetween: 300,
            coverflowEffect: {
                rotate: 0,
                slideShadows: false,
                stretch: 210,
                depth: 350,
            },
            slidesPerView: 'auto'
        }
    }
});

// ===============================imagetextType
const dinosaur = document.querySelector(".dinosaur");
const flash01 = document.querySelector(".flash01");
const flash02 = document.querySelector(".flash02");
const talk01 = document.querySelector(".talk01");
const talk02 = document.querySelector(".talk02");
const talk03 = document.querySelector(".talk03");
const talk04 = document.querySelector(".talk04");
const talk05 = document.querySelector(".talk05");
const hart01 = document.querySelector(".hart01");
const hart02 = document.querySelector(".hart02");
const hart03 = document.querySelector(".hart03");

gsap.to(dinosaur, {
    delay: 1,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
        trigger: '.img1',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,

    }
});

gsap.to(flash01, {
    delay: 0.2, duration: 0.3, scale: 1.5, ease: "power1.in",
    scrollTrigger: {
        trigger: '.img1',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,
    },
    onComplete: function () {
        gsap.to(flash01, {
            duration: 0.1, scale: 0, ease: "power1.out",
            scrollTrigger: {
                trigger: '.img1',
                start: "top 70%",
                end: "bottom 40%",
                toggleActions: "play pause reverse pause",
                markers: false,
            },
            onComplete: function () {
                gsap.to(flash01, {
                    duration: 0.3, scale: 1.5, ease: "power1.in",
                    scrollTrigger: {
                        trigger: '.img1',
                        start: "top 70%",
                        end: "bottom 40%",
                        toggleActions: "play pause reverse pause",
                        markers: false,
                    },
                    onComplete: function () {
                        gsap.to(flash01, {
                            duration: 0.1, scale: 1, ease: "power1.out",
                            scrollTrigger: {
                                trigger: '.img1',
                                start: "top 70%",
                                end: "bottom 40%",
                                toggleActions: "play pause reverse pause",
                                markers: false,
                            }
                        });
                    }
                });
            }
        });
    }
});


gsap.to(flash02, {
    duration: 0.3, scale: 1, ease: "power1.in",
    scrollTrigger: {
        trigger: '.img1',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,
    },
    onComplete: function () {
        gsap.to(flash02, {
            duration: 0.1, scale: 0, ease: "power1.out",
            scrollTrigger: {
                trigger: '.img1',
                start: "top 70%",
                end: "bottom 40%",
                toggleActions: "play pause reverse pause",
                markers: false,
            },
            onComplete: function () {
                gsap.to(flash02, {
                    duration: 0.3, scale: 1, ease: "power1.in",
                    scrollTrigger: {
                        trigger: '.img1',
                        start: "top 70%",
                        end: "bottom 40%",
                        toggleActions: "play pause reverse pause",
                        markers: false,
                    },
                    onComplete: function () {
                        gsap.to(flash02, {
                            duration: 0.1, scale: 0.9, ease: "power1.out",
                            scrollTrigger: {
                                trigger: '.img1',
                                start: "top 70%",
                                end: "bottom 40%",
                                toggleActions: "play pause reverse pause",
                                markers: false,
                            }
                        });
                    }
                });
            }
        });
    }
});

gsap.to(talk01, {
    scale: 1,
    duration: 0.5,
    ease: "back.inOut(1.7)",
    scrollTrigger: {
        trigger: '.img2',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,

    }
});
gsap.to(talk02, {
    delay: 0.3,
    scale: 1,
    duration: 0.5,
    ease: "back.inOut(1.7)",
    scrollTrigger: {
        trigger: '.img2',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,

    }
});
gsap.to(talk03, {
    delay: 0.6,
    scale: 1,
    duration: 0.5,
    ease: "back.inOut(1.7)",
    scrollTrigger: {
        trigger: '.img2',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,

    }
});
gsap.to(talk04, {
    delay: 0.9,
    scale: 1,
    duration: 0.5,
    ease: "back.inOut(1.7)",
    scrollTrigger: {
        trigger: '.img2',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,

    }
});
gsap.to(talk05, {
    delay: 1.2,
    scale: 1,
    duration: 0.5,
    ease: "back.inOut(1.7)",
    scrollTrigger: {
        trigger: '.img2',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,

    }
});

gsap.to(hart01, {
    opacity: 1,
    x: -30,
    y: -20,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
        trigger: '.img3',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,

    }
});
gsap.to(hart02, {
    delay: 0.4,
    opacity: 1,
    x: 30,
    y: -20,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
        trigger: '.img3',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false,

    }
});
gsap.to(hart03, {
    delay: 0.7,
    opacity: 1,
    x: -5,
    y: -10,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
        trigger: '.img3',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false

    }
});

// ================================imgDesaType
const pelletImg = document.querySelector(".imgDesa_inner .pellet_img");
const click01 = document.querySelector(".imgDesa_inner .click01");
const click02 = document.querySelector(".imgDesa_inner .click02");
const click03 = document.querySelector(".imgDesa_inner .click03");
const line1 = document.querySelector(".imgDesa_inner .line1");
const line2 = document.querySelector(".imgDesa_inner .line2");
const line3 = document.querySelector(".imgDesa_inner .line3");
const fur = document.querySelector(".imgDesa_inner .fur");
const heartBeat = document.querySelector(".imgDesa_inner .heartBeat");
const pellet = document.querySelector(".imgDesa_inner .pellet");
const imgDesa_box = document.querySelector(".imgDesa_box");

click01.addEventListener("click", function () {
    gsap.to(line1, { scaleX: 3, rotate:60,duration: 0.4 });
    gsap.to(line2, { scaleX: 0,rotate:140,duration: 0.4 });
    gsap.to(line3, { scaleX: 0, rotate:135,duration: 0.4 });
    gsap.to(fur, { opacity: 1, });
    gsap.to(heartBeat, { opacity: 0, });
    gsap.to(pellet, { opacity: 0, });
})
click02.addEventListener("click", function () {
    gsap.to(line2, { scaleX: 3, rotate:140, duration: 0.4 });
    gsap.to(line1, { scaleX: 0, rotate:60, duration: 0.4 });
    gsap.to(line3, { scaleX: 0, rotate:135, duration: 0.4 });
    gsap.to(heartBeat, { opacity: 1 });
    gsap.to(fur, { opacity: 0 });
    gsap.to(pellet, { opacity: 0 });
})
click03.addEventListener("click", function () {
    gsap.to(line3, { scaleX: 3, rotate:135, duration: 0.4 });
    gsap.to(line1, { scaleX: 0, rotate:60, duration: 0.4 });
    gsap.to(line2, { scaleX: 0, rotate:140,duration: 0.4 });
    gsap.to(pellet, { opacity: 1 });
    gsap.to(heartBeat, { opacity: 0 });
    gsap.to(fur, { opacity: 0 });
})

gsap.to(pelletImg, {
    y: -20,
    ease: "power1.inOut",
    duration: 1,
    repeat: -1,
    yoyo: true
});

// ==================cardBennerType
const tab = document.querySelectorAll(".tap_title");
const cardBenner = document.querySelectorAll(".box_container");
const tabCont = document.querySelectorAll(".cardBenner_con");
const clothes = document.querySelector("#clothes");
const doll = document.querySelector("#doll");
const etc = document.querySelector("#etc");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const tap1 = document.querySelector(".tap1");
const tap2 = document.querySelector(".tap2");
const tap3 = document.querySelector(".tap3");

tap1.addEventListener("click", function (e) {
    e.preventDefault()
    left.style.display = "none"
    right.style.display = "none"
    cardBenner.forEach(function (benner) {
        benner.style.backgroundColor = "var(--yellow)";
    });
});
tap2.addEventListener("click", function (e) {
    e.preventDefault()
    left.style.display = "block"
    right.style.display = "block"
    cardBenner.forEach(function (benner) {
        benner.style.backgroundColor = "var(--light_green)";
    });
});
tap3.addEventListener("click", function (e) {
    e.preventDefault()
    left.style.display = "block"
    right.style.display = "block"
    cardBenner.forEach(function (benner) {
        benner.style.backgroundColor = "var(--blue)";
    });
});

tab.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault()
        tabCont.forEach(cont => cont.style.visibility = 'hidden');
        tabCont.forEach(cont => cont.style.opacity = '0');
        tabCont[index].style.visibility = 'visible';
        tabCont[index].style.opacity = '1';
    });
});

function getResponsiveLeftValues() {
    const screenWidth = window.innerWidth;
    let clothesLeft, dollLeft, etcLeft;
    if (screenWidth < 700) {
        let clothesMoveCount = 0;
        let dollMoveCount = 0;
        let etcMoveCount = 0;
        const clothesmaxMoves = 2;
        const maxMoves = 4;
        const etcmaxMoves = 3;
        right.addEventListener("click", function () {
            if (clothesMoveCount < clothesmaxMoves) {
                clothesMoveCount++;
                clothes.style.left = `${-60 * clothesMoveCount}vw`;
            } else {
                clothes.style.left = "0vw";
                clothesMoveCount = 0;
            }
            if (dollMoveCount < maxMoves) {
                dollMoveCount++;
                doll.style.left = `${-60 * dollMoveCount}vw`;
            } else {
                doll.style.left = "0vw";
                dollMoveCount = 0;
            }
            if (etcMoveCount < etcmaxMoves) {
                etcMoveCount++;
                etc.style.left = `${-60 * etcMoveCount}vw`;
            } else {
                etc.style.left = "0vw";
                etcMoveCount = 0;
            }
        });
        left.addEventListener("click", function () {
            if (dollMoveCount > 0) {
                dollMoveCount--;
                doll.style.left = `${-61 * dollMoveCount}vw`;
            }
        });
        tap1.addEventListener("click", function (e) {
            e.preventDefault()
            left.style.display = "block"
            right.style.display = "block"
        });
        left.style.display = "block"
        right.style.display = "block"
    }
    else if (screenWidth < 1180) {
        clothesLeft = "-41.5vw";
        let dollLeftPosition = 0;
        right.addEventListener("click", function () {
            if (dollLeftPosition === -0) {
                dollLeftPosition = -82;
            } else if (dollLeftPosition === -82) {
                dollLeftPosition = -125;
            } else {
                dollLeftPosition = -0;
            }
            doll.style.left = `${dollLeftPosition}vw`;
        });
        etcLeft = "-82.4vw";
        left.style.display = "block"
        right.style.display = "block"
        tap1.addEventListener("click", function (e) {
            e.preventDefault()
            left.style.display = "block"
            right.style.display = "block"
        });
    }
    else if (screenWidth < 1400) {
        dollLeft = "-55vw";
        etcLeft = "-28vw";
        tap1.addEventListener("click", function (e) {
            e.preventDefault()
            left.style.display = "none"
            right.style.display = "none"
        });
    } else {
        dollLeft = "-785px";
        etcLeft = "-392px";
        left.style.display = "none"
        right.style.display = "none"
    }
    return { clothesLeft, dollLeft, etcLeft };
}
function updatePositions() {
    const { clothesLeft, dollLeft, etcLeft } = getResponsiveLeftValues();
    right.addEventListener("click", function () {
        clothes.style.left = clothesLeft;
        doll.style.left = dollLeft;
        etc.style.left = etcLeft;
        this.style.filter = "grayscale(100%)";
        left.style.filter = "grayscale(0%)";
    });
    left.addEventListener("click", function () {
        clothes.style.left = "0px";
        doll.style.left = "0px";
        etc.style.left = "0px";
        this.style.filter = "grayscale(100%)";
        right.style.filter = "grayscale(0%)";
    });
}
updatePositions();
window.addEventListener('resize', updatePositions);

// --------------------------ScrollSmoother
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// -----------------------------------asideBox
gsap.registerPlugin(ScrollTrigger);

const aside = document.querySelector('.aside_menu');

ScrollTrigger.create({
    trigger: aside,
    start: 'top top',
    end: '+=3000', // 스크롤을 3000px 만큼 더 내려가는 것을 허용
    onUpdate: (self) => {
        if (self.scroll() >= 2900) {
            gsap.to(aside, { opacity: 0, duration: 0.51 }); // 1초 동안 사라짐
        } else {
            gsap.to(aside, { opacity: 1, duration: 0.5 }); // 다시 보이게
        }
    }
});
