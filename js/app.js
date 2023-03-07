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


const myImage = new Image();
//image1.src = '../images/image1.png';
myImage.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAFsAWwDASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAAAQIAAwQFBgcI/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAH0MgvpMEGAJCIGSJCCAiKYANOb85k+ieE+d40991/ktkz9v4fyvrNfTdfzX1LV3035V9SsuhFokiSAkkgYIGSBgJJIG6m0yKYshBJISSBgg0EJJA/O9PyvOc6gMyizJZa1UL7cYN/S87cvqPdfL2zv9Hv8h+u6shgBJQIiEgkIgZISQDXU21jEkpggSsHiwYRRoANRZ84j5/jvxTmK66rLYjEW1CypwFQht2YuhKPpPzjXNfohOJ29aEBJAQwSmEiQgkkg1tVpiEiySBAg0WDRQMFkq/F/o3x/My4tiufOfsb68+/p7JvzT9+o5Q9Hul8BT9K5CeL0dLkax1NfJ7EvovsPxH7VdkSUGWDFSGA0SsRpIG2q0wiBTFikgBiwIUQ+V+Mvz/zE6mcZu51eznrg2aDO1C6DLmG2GHRpBlo6LJyeH7Kmz5IfovjNeez7V8T99p7sAUSsR4CGKRoCQiWPbTaYABNECKQAMAFIAJ8U9x88mNXr9tmOz2I2ejQFoWCDwOQOELrYR46VcvtLZ8s9f0MmuPvADvJggzIyGQkkgZINdTccuANERVMWBAgXp4qfKO/433uM95kbHqZq2WwqwXVljqyR0cNldg9lbXLrBS+X9VwWfdJk1dOLQQZlKMVI0kAZBrqbjkyRuARmAqpWK0fnH0f4058v3HhPoeNdBlfHojxmo8awGRWZbJAwYLBgmHWQSwM+tTj+s8F77fnaK2hKtIxUjFSGCD359ByAVWCBYIqwELb+dv0L+bXH0f0Pzfpufay0Gdi2CpevOXps1mixbXqaHdGHZCF1axzzonSNEPG/TfkX2DfnrIlEq6GAjFSEghvovOOCFAIaAgWCQn5r/S35nnH7B0M2vHpop00tOvLKasrYU6nR850l7L5L871W1adEl3PR+dzuene6PB1Zej0cHtV84+sfPvcb8+0ibFhJCykYqRoDTX59EcZSGoCqwQEUhbvzv90+UTn7zRBj0Ucff5tLebv83rj0+x5L2hk1VJnp6TZzennrq24t2q3iPZfPGM2mjhuXoul88+p2dG3yvoZ10dyinXPrQNvJKyHKshIIZJT357zigq3JBABUMVl8b4b12DnfWq0dOdn6CSeb5fss95+G9H0jWG3TZnV/RounTZt5+8bynrubqeK5vrqmPA+u6uywday2dL+R1stx1HRt8mINEgyEg0ZJDaM91cdYrZAAVgCySXxlmyjl02Sq21ZYM2mvRWZU0GynVcsoCBdvT5W+tQFus8zD3scuXXmsXW9OiZewNrncwbfMlTTMjSEghING+i84ggbikAkkRSF5vK63C571vSzVj0vm2yRQWUWhshfdVcadebXpdaaLllx3ZrJa9i6c+gZ6L7zvKnfNiIMyORgUJBo30XnCEVsiQEglixRfPej81jRNbzTvQ8uk0WzVlbV1lkrmddPE8hcfUujwezem+74t9MZa80530Ls2myw1yw68W287GU9OTESVmUjMpRoDTX59BwRA3BBEEAAAN5z0GTN44srzstSV0W0PnVqSLXm1oma5rCzbQWtVeo6lGfdTkNeTQlymvUfoYtmuTMp3hypkYqyllNjEQa+i44Igm4AoQARYpFiLzsnQ5/PSpbW01lMzdD57BxVCyypl2VxWuu9b6hQrELVxYgezVfS/Tz2lDqWMhHIkOVZCVamvz3HAWLNkAEURYoQmBvn+c9LreJ0TPuEuqnorkGQrbJVzce5OoMmSXr9Pzu5rsauNe12svGpufVHNplaxG1i81t05WPSxe2ey5ualx2QpZFkW35tNedUpNlYFUSslDeSTjUDm544eUqax9o0/Mfp3P0iqxM9EKMsquUbTz7Gt92K5rpvj123Z9VMymmi9HPmPSb46Ch3LCpHatkseo2XGtiwpEt05NBwFizcAChDWZ/C+48FnC+P9n4m8uddZRcZfuvzr3eO20UPj0RLUEYEYuVpc7FO+qxqwM5LpSfKfM/avh/Tx/UfefnH02s/aW4nddAUaadq2ssas2Wmol2jJecNYs3FiBqZDP5n1nMmPG+Ubn3gvV5Hbj6DLKeXrli1Vvt5+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'

myImage.addEventListener('load', function () {
   

    
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 1000;

    let = mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {

            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness =calculateRelativeBrightness(red, green, blue);
            const cell = [

                cellBrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);


    }


    function calculateRelativeBrightness(red, green, blue) {


        return Math.sqrt(

            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;

    }

    class Particle {

        constructor() {

            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);

        }

        update() {
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2.5 - this.speed) + this.velocity;


            this.y += movement;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }

        }
        draw() {

            ctx.beginPath();
            ctx.fillStyle = '#9ab9c2';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();

        }

    }

    function init() {

        for (let i = 0; i < numberOfParticles; i++) {

            particlesArray.push(new Particle);
        }

    }
    init();
   

    function animate() {
       // ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5;
            particlesArray[i].draw();


        }
        requestAnimationFrame(animate);
       
    }

    animate();
});





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
        .from(l1, 150, {
            width: 0,
            ease: "power2.out"
        }, 0.3, )

        .from(l2, 150, {
            width: 0,
            ease: "power2.out"
        }, 0.3, )


        .from(l3, 150, {
            width: 0,
            ease: "power2.out"
        }, 0.3, )

        .from(l4, 150, {
            width: 0,
            ease: "power2.out"
        }, 0.3, )

        .from(l5, 150, {
            width: 0,
            ease: "power2.out"
        }, 0.3, )
        .from(l6, 150, {
            width: 0,
            ease: "power2.out"
        }, 0.3, )

        .from(l7, 150, {
            width: 0,
            ease: "power2.out"
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