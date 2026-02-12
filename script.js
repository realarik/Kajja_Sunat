// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            
            // Add stagger effect for grid items
            const children = entry.target.querySelectorAll('.keunggulan-card, .pricing-card, .testimoni-card, .manfaat-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animate-visible');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===== Add Animation Classes =====
const style = document.createElement('style');
style.textContent = `
    .keunggulan-card,
    .pricing-card,
    .testimoni-card,
    .manfaat-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .keunggulan-card.animate-visible,
    .pricing-card.animate-visible,
    .testimoni-card.animate-visible,
    .manfaat-item.animate-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// ===== Counter Animation for Stats =====
const animateCounter = (element, target) => {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const update = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    };
    
    update();
};

// ===== Parallax Effect for Hero =====
const hero = document.getElementById('hero');
const shapes = document.querySelectorAll('.shape');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    if (scrolled < window.innerHeight) {
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// ===== Typing Effect for Hero Tagline =====
const tagline = document.querySelector('.hero-tagline');
if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    };
    
    // Start typing after a delay
    setTimeout(typeWriter, 500);
}

// ===== Form Validation (if form exists) =====
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form handling logic here
        console.log('Form submitted');
    });
}

// ===== WhatsApp Float Button Animation =====
const waButton = document.querySelector('.whatsapp-float');
if (waButton) {
    // Add pulse animation on hover
    waButton.addEventListener('mouseenter', () => {
        waButton.style.animation = 'none';
    });
    
    waButton.addEventListener('mouseleave', () => {
        waButton.style.animation = 'bounce 2s ease-in-out infinite';
    });
}

// ===== Lazy Loading Images =====
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===== Console Welcome Message =====
console.log('%c🏥 KajjaSunat', 'font-size: 24px; font-weight: bold; color: #14b8a6;');
console.log('%cLayanan Sunat Panggilan Profesional di Bekasi Utara', 'font-size: 14px; color: #6b7280;');
console.log('%cHubungi: 0812-3456-7890', 'font-size: 12px; color: #0d9488;');
