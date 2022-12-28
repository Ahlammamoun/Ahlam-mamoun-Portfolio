const titreSpan = document.querySelectorAll('h1 span');
const titreSpanScd = document.querySelectorAll('h1 span.scd');



window.addEventListener('load', () => {

    const TL = gsap.timeline({
        paused: true
    });
    TL
        .staggerFrom(titreSpan, 2, {
            top: -50,
            opacity: 0,
            ease: "power2.out"
        }, 0.3, )
        .staggerFrom(titreSpanScd, 1, {
            opacity: 0,
            ease: "power3.out"
        }, 0.3, '-=2')
        .staggerFrom(pSpan, 3, {
            opacity: 0,
            ease: "power3.out"
        }, 0.3, )



    TL.play();







})


const pSpan = document.querySelector('p span');




console.log('Typewriter')
new Typewriter(pSpan, 3, {


        deleteSpeed: 10



    })
    .changeDelay(20)
    .typeString('Back end, speciality PHP ')


    .pauseFor(1500)
    .typeString('<strong style="color: #e68787"> &#x2794; Symfony  </strong> !')
    .pause(1000)
    .deleteChars(14)
    .typeString('<span style="color: midnightblue"> &#x2794; Wordpress </span> !')
    .pauseFor(1000)
    .deleteChars(42)
    .typeString('<span style="color: #ea39ff"> &#x2794; Javascript</span> !')
    .pauseFor(1000)
    .deleteChars(14)
    .typeString('<span style="color: #ff6910"> &#x2794; Vue.js</span> !')
    .pauseFor(1000)
    .deleteChars(14)
    .typeString('Back end, speciality PHP ')
    .start()