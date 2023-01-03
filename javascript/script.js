// Typing speed js
var typed = new Typed(".typing",{
    strings: ["Web & MERN Stack Developer", "Web Designer", "Web Developer"],
    typeSpeed: 80,
    backSpeed: 80,
});
var typed = new Typed(".typing-2",{
    strings: ["Web & MERN Stack Developer", "Web Designer", "Web Developer"],
    typeSpeed: 80,
    backSpeed: 80,
});

// FAQ
const faqs =document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelectorAll('faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else {
            icon.className = 'fa-solid fa-plus';
        }
    })
})