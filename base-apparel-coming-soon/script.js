const heroImg  = document.getElementById('hero-image');
const emailInput = document.getElementById('email-input');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn')
const form  = document.querySelector('form');
let email = ''

const HandleHeroImg = () =>{
    if (window.innerWidth >= 768) {
        heroImg.src = './images/hero-desktop.jpg'
    }
}
window.addEventListener('load',HandleHeroImg)
window.addEventListener('resize',HandleHeroImg)


// check if email is valid
const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
const handleChange = (e) => {
    if(emailInput.value.trim() == '' || !isValidEmail(emailInput.value)){
        emailInput.classList.add('error');
        message.textContent = 'Please provide a valid email';
        message.style.color = 'var(--soft-red)';
        message.classList.remove('hidden');
        submitBtn.disabled = true;
    } else {
        emailInput.classList.remove('error');
        email= emailInput.value;
        submitBtn.disabled = false;
        message.classList.add('hidden');
    }
}
const handleFormSubmission = (e) => {
  e.preventDefault();
  if(email.trim !==''){
    message.textContent = 'Email Successfully Added!';
    message.style.color = 'green';
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('hidden');
    }, 10000);
     emailInput.value = '';
  }
}

emailInput.addEventListener('input', (e) => handleChange(e));
form.addEventListener('submit',(e)=>handleFormSubmission(e));