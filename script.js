// Placeholder JavaScript for the menu toggle
const logosContainer1 = [
    { src: "logos/python-logo.svg", alt: "Python Logo" },
    { src: "logos/javascript-logo.svg", alt: "JavaScript Logo" },
    { src: "logos/react-logo.svg", alt: "React Logo" },
    { src: "logos/vuejs-logo.svg", alt: "Vue.js Logo" },
    { src: "logos/mysql-logo.svg", alt: "SQL Logo" },
    { src: "logos/django-logo.svg", alt: "Django Logo" },
];

const logosContainer2 = [
    { src: "logos/html5-logo.svg", alt: "HTML5 Logo" },
    { src: "logos/css3-original.svg", alt: "CSS3 Logo" },
    { src: "logos/fastapi-logo.svg", alt: "FastAPI Logo" },
    { src: "logos/bootstrap-logo.svg", alt: "Bootstrap Logo" },
    { src: "logos/selenium-logo.svg", alt: "Selenium Logo" },
];

const logosContainer3 = [
    { src: "logos/pandas-logo.svg", alt: "Pandas Logo" },
    { src: "logos/numpy-logo.svg", alt: "NumPy Logo" },
    { src: "logos/mysql-logo.svg", alt: "SQL Logo" },
    { src: "logos/excel-logo.svg", alt: "Excel Logo" },
    { src: "logos/powerpoint-logo.svg", alt: "PowerPoint Logo" },
    { src: "logos/word-logo.svg", alt: "Word Logo" },
]

const logosContainer4 = [
    { src: "logos/tensorflow-logo.svg", alt: "TensorFlow Logo" },
    { src: "logos/pytorch-logo.svg", alt: "PyTorch Logo" },
    { src: "logos/scikitlearn-logo.svg", alt: "Scikit-learn Logo" }
]

const logosContainer5 = [
    { src: "logos/docker-logo.svg", alt: "Docker Logo" },
    { src: "logos/kubernetes-logo.svg", alt: "Kubernetes Logo" },
    { src: "logos/jenkins-logo.svg", alt: "Jenkins Logo" },
    { src: "logos/ansible-logo.svg", alt: "Ansible Logo" },
    { src: "logos/aws-logo.svg", alt: "AWS Logo" },
    { src: "logos/maven-logo.svg", alt: "Maven Logo" },
    { src: "logos/linux-logo.svg", alt: "Linux Logo" }
]

const logosContainer6 = [
    { src: "logos/git-logo.svg", alt: "Git Logo" },
    { src: "logos/github-logo.svg", alt: "GitHub Logo" },
    { src: "logos/gitlab-logo.svg", alt: "GitLab Logo" },
]

const logosContainer7 = [
    { src: "logos/problem-solving-logo.svg", alt: "Problem Solving Logo" },
    { src: "logos/communication-logo.svg", alt: "Communication Logo" },
    { src: "logos/leadership-logo.svg", alt: "Leadership Logo" },
    { src: "logos/teamwork-logo.svg", alt: "Teamwork Logo" },
    { src: "logos/time-management-logo.svg", alt: "Time Management Logo" },
    { src: "logos/creative-logo.svg", alt: "Creative Logo" },
]

    // Function to create logo containers
function createLogoContainer(containerId, logos) {
    const container = document.getElementById(containerId);
        
    logos.forEach(logo => {
        const logoContainer = document.createElement("div");
        logoContainer.className = "logo-container";

        const img = document.createElement("img");
        img.src = logo.src;
        img.alt = logo.alt;
        img.className = "logo";

        const hoverText = document.createElement("span");
        hoverText.className = "hover-text";
        hoverText.textContent = logo.alt;

        logoContainer.appendChild(img);
        logoContainer.appendChild(hoverText);
        container.appendChild(logoContainer);
    });
}

    // Create logo containers
createLogoContainer("logos-container1", logosContainer1);
createLogoContainer("logos-container2", logosContainer2);
createLogoContainer("logos-container3", logosContainer3);
createLogoContainer("logos-container4", logosContainer4);
createLogoContainer("logos-container5", logosContainer5);
createLogoContainer("logos-container6", logosContainer6);
createLogoContainer("logos-container7", logosContainer7);




// JavaScript to scroll to the landing page on each refresh
window.addEventListener("load", function() {
    // Scroll to the top or specified section after refresh
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});


// Function to prevent scrolling until the button is clicked
function preventScroll(event) {
    event.preventDefault();
}

function scrollToSummary() {
    // Re-enable scrolling
    document.body.style.overflow = "auto";
    document.body.removeEventListener('wheel', preventScroll, { passive: false });
    document.body.removeEventListener('keydown', preventKeyScroll);

    // Smooth scroll to the summary section
    document.getElementById('summary').scrollIntoView({ behavior: 'smooth' });
}

function preventKeyScroll(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
    }
}

// Disable scrolling initially
document.body.style.overflow = "hidden";
document.body.addEventListener('wheel', preventScroll, { passive: false });
document.body.addEventListener('keydown', preventKeyScroll);



//Nav bar smooth scrolling
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
})
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
