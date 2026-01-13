// script.js
// Projects data (view-only array)
const projects = [
    {
        title: 'E-Commerce Dashboard',
        description: "MSB Cart is a modern full-stack e-commerce web application that enables users to browse products, view details, manage a shopping cart, and securely authenticate, with a focus on performance, scalability, and a clean user interface.",
        tech: ['React', 'Node.js', 'MongoDB', ],
        links: {
            demo: 'https://msb-cart.vercel.app/',
            repo: 'https://github.com/SivabalanManogar/msb-cart-your-simple-carts'
        }
    },
    
    {
        title: 'Carrer Assitant  Interface',
        description: 'Modern UI for an AI-powered chatbot integrated with OpenAI API, featuring conversation history and themes.',
        tech: ['Next.js', 'Tailwind CSS', 'OpenAI API'],
        links: {
            demo: 'https://graceful-pasca-a77a2e.netlify.app/',
            repo: 'https://github.com/SivabalanManogar/assitant'
        }
    },
    {
        title: 'Smart Street Light ',
        description: 'A smart street lighting system that adjusts brightness based on ambient light and motion detection to save energy and enhance safety.',
        tech: ['HTML5', 'CSS3', 'JavaScript',"React js",'Node js'],
        links: {
            demo: 'https://reliable-kashata-e8c482.netlify.app/',
            repo: 'https://github.com/SivabalanManogar/Gen1'
        }
    },
     {
        title: 'Hackthon Demo Site',
        description: 'A responsive hackathon landing page that highlights event details and provides guidance and recommendations for the internship process.',
        tech: ['HTML5', 'CSS3', 'JavaScript',"React js",'Node js'],
        links: {
            demo: 'https://willowy-dieffenbachia-4cf97e.netlify.app/',
            
        }
    },

      {
        title: 'My Todo List ',
        description: 'A simple and intuitive to-do list application that allows users to add, edit, and delete tasks, helping them stay organized and manage their daily activities effectively.',
        tech: ['HTML5', 'CSS3', 'JavaScript',],
        links: {
            demo: 'https://mytodolist-inky.vercel.app/',
            repo: 'https://github.com/SivabalanManogar/mytodolist'
        }
    },
      {
        title: 'Shooting Game ',
        description: 'An engaging shooting game where players can test their reflexes and accuracy by aiming and shooting at moving targets, with score tracking and increasing difficulty levels.',
        tech: ['HTML5', 'CSS3', 'JavaScript',"React js",'Node js'],
        links: {
            demo: 'https://shootingplay.vercel.app/',
            repo: 'https://github.com/SivabalanManogar/shootingplay'
        }
    },
];
  

// Certificates data
const certificates = [
    {
        title: "Full Stack Web Development",
        provider: "Coursera",
        image: "certificates/fullstack.jpg",
        link: "https://coursera.org/verify/example"
    },
    {
        title: "JavaScript Algorithms & Data Structures",
        provider: "freeCodeCamp",
        image: "certificates/javascript.jpg",
        link: "https://freecodecamp.org/certification/example"
    },
    {
        title: "Backend Development with Node.js",
        provider: "Udemy",
        image: "certificates/nodejs.jpg",
        link: "https://udemy.com/certificate/example"
    }
];

function renderCertificates() {
    const grid = document.getElementById('certificates-grid');

    certificates.forEach((cert, index) => {
        const card = document.createElement('div');
        card.className = 'certificate-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certificate-img">
            <div class="certificate-content">
                <h3>${cert.title}</h3>
                <p>Issued by ${cert.provider}</p>
                <a href="${cert.link}" target="_blank" class="certificate-link">
                    View Certificate
                </a>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Render projects dynamically
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            
            <div class="project-links">
                <a href="${project.links.demo}" target="_blank">Live Demo</a>
                <a href="${project.links.repo}" target="_blank">View Code</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Navbar mobile toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu if open
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Intersection Observer for fade-in animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .contact, .section-title').forEach(el => {
        observer.observe(el);
    });
}

// Contact form handler (demo - logs to console)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Event listeners
document.querySelector('.hamburger').addEventListener('click', toggleMobileMenu);

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initScrollAnimations();
});
