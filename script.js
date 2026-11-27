
// =================================
// NIRMAL PORTFOLIO - JAVASCRIPT
// =================================


// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


// =================================
// SCROLL REVEAL ANIMATION
// =================================

const sections = document.querySelectorAll(
    '.about, .skills, .projects, .education, .languages, .career, .contact'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

sections.forEach(section => {

    observer.observe(section);

});


// =================================
// TYPING TEXT ANIMATION
// =================================

const typingText = document.getElementById("typing-text");

const words = [
    "Developer",
    "Web Designer",
    "Programmer",
    "Software Enthusiast",
    "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingText.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1500;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

if (typingText) {

    typeEffect();

}


// =================================
// SKILL PROGRESS ANIMATION
// =================================

const skillSection = document.querySelector("#skills");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            document.querySelectorAll(".skill-progress").forEach(bar => {

                const width = bar.getAttribute("data-width");

                if (width) {

                    bar.style.setProperty(
                        "--skill-width",
                        width
                    );

                    bar.classList.add("animate");

                }

            });

            skillObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.3
});

if (skillSection) {

    skillObserver.observe(skillSection);

}


// =================================
// CONSOLE WELCOME MESSAGE
// =================================

console.log(
    "Welcome to Nirmal Portfolio!"
);

console.log(
    "Designed and Developed by Nirmal."
);


const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

