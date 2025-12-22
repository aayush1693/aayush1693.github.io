// Personal Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('text-purple-600', 'font-semibold');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('text-purple-600', 'font-semibold');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Fade in sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade-in effect
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Dynamic project data (placeholder for future projects)
    const projectsData = [
        {
            title: 'Project 1',
            description: 'Coming soon... This will showcase a Java backend project.',
            technologies: ['Java', 'Spring Boot', 'MySQL'],
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Coming soon... Another backend development project.',
            technologies: ['Java', 'REST API', 'PostgreSQL'],
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'Coming soon... More projects to be added.',
            technologies: ['Spring Framework', 'Microservices'],
            link: '#'
        }
    ];
    
    // Render projects dynamically
    function renderProjects() {
        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) return;
        
        projectsContainer.innerHTML = '';
        
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card bg-white rounded-lg shadow-md overflow-hidden';
            
            projectCard.innerHTML = `
                <div class="project-placeholder">
                    <i class="fas fa-code text-6xl text-gray-400"></i>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => 
                            `<span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">${tech}</span>`
                        ).join('')}
                    </div>
                    <a href="${project.link}" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
                        View Project <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }
    
    // Initialize projects
    renderProjects();
    
    // Add animation to skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Simple form validation for contact section
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Contact form submission is not yet configured. Please use the email link or social media links to get in touch.');
        });
    }
});
