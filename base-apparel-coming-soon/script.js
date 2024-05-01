const heroImg  = document.getElementById('hero-image');

window.addEventListener('load',()=>{
    console.log('inner'+ window.innerWidth)
    console.log(window.innerWidth)
    if (window.innerWidth <= 375) {
        heroImg.src = './images/hero-mobile.jpg'
    }
})


