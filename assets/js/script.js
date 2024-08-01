



let tabButtons = document.querySelectorAll('.tabs a');


tabButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        tabButtons.forEach((button)=>{
            button.classList.remove('active');
        })
        btn.classList.add('active')
    })
})




let navLinks = document.querySelectorAll('.nav-links a');


navLinks.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        navLinks.forEach((button)=>{
            button.classList.remove('active-link');
        })
        btn.classList.add('active-link')
    })
})













let insta = document.querySelector('.ri-instagram-line');
insta.addEventListener('click',()=>{
    window.open('https://www.instagram.com/raeesmghl/')
})




let website = document.querySelector('.ri-dribbble-line');
website.addEventListener('click',()=>{
    window.open('https://raeesmughal.netlify.app/')
})



let github = document.querySelector('.ri-github-line');
github.addEventListener('click',()=>{
    window.open('https://github.com/raeesmghl')
})


let linkedin = document.querySelector('.ri-linkedin-line');
linkedin.addEventListener('click',()=>{
    window.open('https://www.linkedin.com/in/raeesmughal/')
})











let upBtn = document.getElementById('#up-btn');

window.addEventListener('scroll', () => {

    let scrollBtn = document.getElementById('up-btn');

    this.scrollY >= 350 ? scrollBtn.classList.add('show-up-btn') : scrollBtn.classList.remove('show-up-btn');

})
