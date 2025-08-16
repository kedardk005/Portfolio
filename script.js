// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Resume download function
function downloadResume() {
    // Create a sample resume content (in a real scenario, this would be a pre-made PDF)
    const resumeContent = `
        KEDAR KOTHARI
        Computer Engineering Student & Frontend Developer
        
        CONTACT INFORMATION
        Location: Bharuch, India
        Phone: +91 9898411504
        Email: kedardk005@gmail.com
        LinkedIn: linkedin.com/in/kedar-kothari
        GitHub: github.com/kedar-kothari
        
        EDUCATION
        B.Tech in Computer Engineering
        CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY, Anand, India
        July 2023 – Present | CGPA: 6.2
        
        Higher Secondary Education
        PARTH INSTITUTE, Vadodara, India
        March 2023 | Percentage: 58%
        
        Secondary Education
        AMITY SCHOOL, Bharuch, India
        May 2021 | Percentage: 71.83%
        
        TECHNICAL SKILLS
        Programming Languages: C, C++, Java
        Web Technologies: HTML, CSS, JavaScript, React, Tailwind CSS, Google Sites
        Mobile Development: Flutter, Android Studio
        Core Skills: Data Structures & Algorithms
        Tools: Canva, Figma, Microsoft Office, AI Tools
        
        EXPERIENCE
        Frontend Development Intern
        Param Consultancy Services, India | May – June 2025
        • Built responsive web applications using React and Tailwind CSS
        • Implemented reusable UI components to improve development efficiency
        • Utilized Git/GitHub for version control and followed industry coding standards
        
        PROJECTS
        1. Tripkrafter Website (HTML, CSS, MySQL)
           Responsive trip planner with drag-and-drop destinations, form validation, and modern UI design.
        
        2. Food Ordering App (Flutter, SQL, Firebase)
           Real-time order tracking system with intuitive UI and optimized performance.
        
        3. Rental Management System (React, Node.js, PostgreSQL, Vite)
           Full-stack application with booking system, payment integration, and admin dashboard.
        
        CERTIFICATIONS
        • NPTEL - Data Structures & Algorithms using Java
        • IBM Machine Learning Professional Certificate
        • RESTful Microservices (Node.js & Express) - NIIT
    `;
    
    // Create and download a text file (in a real scenario, you'd have a proper PDF)
    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Kedar_Kothari_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    // Show download confirmation
    showNotification('Resume downloaded successfully!', 'success');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced hover effects for skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.05)';
        this.querySelector('.skill-icon').style.transform = 'rotate(10deg) scale(1.1)';
    });
    
    category.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.querySelector('.skill-icon').style.transform = 'rotate(0deg) scale(1)';
    });
});

// Typing animation for the main heading
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.highlight');
    if (nameElement) {
        const originalText = nameElement.textContent;
        typeWriter(nameElement, originalText, 150);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Enhanced scroll animations
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Throttled scroll event
let ticking = false;

function updateScrollAnimations() {
    handleScrollAnimations();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollAnimations);
        ticking = true;
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
});
