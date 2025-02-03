window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let hasRun = false; // Ensures animation runs only once

    const startCounting = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = Math.ceil(target / 100); // Adjust speed

        const updateCounter = () => {
            count += speed;
            counter.innerText = count;
            if (count < target) {
                setTimeout(updateCounter, 30); // Speed control
            } else {
                counter.innerText = target; // Ensure it reaches exact target
            }
        };

        updateCounter();
    };

    // Observer to trigger counting when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasRun) {
                hasRun = true;
                counters.forEach((counter) => startCounting(counter));
            }
        });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
});






document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-top, .reveal-bottom");

    const revealOnScroll = () => {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load in case elements are already in view
});




document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".workflow-step");

    const revealSteps = () => {
        steps.forEach((step) => {
            const stepTop = step.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (stepTop < windowHeight - 100) {
                step.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSteps);
    revealSteps(); // Run once in case elements are already in view
});



function nextStep(currentStep) {
    // Hide the current step
    document.getElementById('step' + currentStep).style.display = 'none';

    // Show the next step
    document.getElementById('step' + (currentStep + 1)).style.display = 'block';
}

function prevStep(currentStep) {
    // Hide the current step
    document.getElementById('step' + currentStep).style.display = 'none';

    // Show the previous step
    document.getElementById('step' + (currentStep - 1)).style.display = 'block';
}








function filterBlogs(category) {
    let blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(blog => {
        if (category === "all" || blog.classList.contains(category)) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }
    });
}

function searchBlogs() {
    let searchQuery = document.getElementById("searchBar").value.toLowerCase();
    let blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(blog => {
        let title = blog.querySelector("h3").innerText.toLowerCase();
        if (title.includes(searchQuery)) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }
    });
}




let newsIndex = 0;
const slides = document.querySelectorAll(".news-slide");

function showNews(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextNews() {
    newsIndex = (newsIndex + 1) % slides.length;
    showNews(newsIndex);
}

function prevNews() {
    newsIndex = (newsIndex - 1 + slides.length) % slides.length;
    showNews(newsIndex);
}

// Auto-slide every 5 seconds
setInterval(nextNews, 5000);

// Initialize first slide
showNews(newsIndex);

