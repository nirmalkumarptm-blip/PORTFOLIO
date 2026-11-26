
// =================================
// NIRMAL PORTFOLIO - JAVASCRIPT
// =================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Scroll reveal animation
const sections = document.querySelectorAll(
    '.about, .skills, .projects, .contact'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


// Console welcome message
console.log(
    'Welcome to Nirmal Portfolio!'
);

