const titreSpan = document.querySelectorAll('h1 span');
const titreSpanScd = document.querySelectorAll('.h1 span.scd');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');
const l5 = document.querySelector('.l5');
const l6 = document.querySelector('.l6');
const l7 = document.querySelector('.l7');
const pSpan = document.querySelector('p span');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {

    hamburger.classList.remove("active")
    navMenu.classList.remove("active")

}))



window.addEventListener('load', () => {

    const TL = gsap.timeline({
        paused: true
    });
    TL
        .staggerFrom(titreSpan, 2, {
            top: 20,
            opacity: 0,
            ease: "power2.out"
        }, 0.3, )
        .staggerFrom(titreSpanScd, 1, {
            top: 10,
            opacity: 0,
            ease: "power3.out"
        }, 0.3, '-=2')
        .staggerFrom(pSpan, 3, {
            opacity: 0,
            ease: "power3.out"
        }, 0.3, )
        .from(l1, 30, {
            width: 0,
            ease: "power3.out",
           
        }, 0.3, )

        .from(l2, 30, {
            width: 0,
            ease: "power3.out"
        }, 0.3, )


        .from(l3, 30, {
            width: 0,
            ease: "power3.out"
        }, 0.3, )

        .from(l4, 30, {
            width: 0,
            ease: "power3.out"
        }, 0.3, )

        .from(l5, 30, {
            width: 0,
            ease: "power3.out"
        }, 0.3, )
        .from(l6, 30, {
            width: 0,
            ease: "power3.out"
        }, 0.3, )

        .from(l7, 30, {
            width: 0,
            ease: "power3.out"
        }, 0.3, )







    TL.play();


    //console.log('Typewriter')
    new Typewriter(pSpan, 3, {


            deleteSpeed: 15

        })
        .changeDelay(20)
        .typeString('Back end, PHP ')


        .pauseFor(1500)
        .typeString('<strong style="color: #000000"> &#x2794; Symfony  </strong> ')
        .pause(1500)
        .deleteChars(14)
        .typeString('<span style="color: #ff004f"> &#x2794; Wordpress </span> ')
        .pauseFor(1000)
        .deleteChars(42)
        .typeString('<span style="color: #000000"> &#x2794; Javascript</span> ')
        .pauseFor(1500)
        .deleteChars(14)
        .typeString('<span style="color: #ff004f"> &#x2794; Vue.js</span> ')
        .pauseFor(1500)
        .deleteChars(14)
        .typeString('<span style="color: #000000"> Back end, PHP  </span> ')
        .start()



})