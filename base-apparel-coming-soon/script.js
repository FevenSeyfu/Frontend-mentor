const heroImg  = document.getElementById('hero-image');

const HandleHeroImg = () =>{
    if (window.innerWidth >= 768) {
        heroImg.src = './images/hero-desktop.jpg'
    }
}
window.addEventListener('load',HandleHeroImg)
window.addEventListener('resize',HandleHeroImg)


