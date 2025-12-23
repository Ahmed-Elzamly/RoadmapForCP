/* ===================================
   HOME PAGE JAVASCRIPT
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    initPreviewTopics();
    initTypingAnimation();
    initParallaxEffects();
});

// ===================================
// PREVIEW TOPICS
// ===================================
function initPreviewTopics() {
    const container = document.getElementById('previewTopics');
    if (!container || typeof topicsData === 'undefined') return;

    const html = topicsData.map(topic => `
        <a href="topic.html?id=${topic.id}" class="preview-topic">
            <span class="preview-topic-icon">${topic.icon}</span>
            <span>${topic.title}</span>
        </a>
    `).join('');

    container.innerHTML = html;
}

// ===================================
// TYPING ANIMATION
// ===================================
function initTypingAnimation() {
    const codeLines = document.querySelectorAll('.code-line');
    
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.animation = 'fadeIn 0.5s ease forwards';
        }, 500 + (index * 200));
    });
}

// ===================================
// PARALLAX EFFECTS
// ===================================
function initParallaxEffects() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        floatingIcons.forEach((icon, index) => {
            const speed = 0.1 + (index * 0.05);
            icon.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===================================
// STATS COUNTER ANIMATION
// ===================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const value = parseInt(stat.textContent.replace(/\D/g, ''));
                if (value > 0) {
                    animateCounter(stat, value);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// FEATURE CARDS ANIMATION
// ===================================
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
});

const featuresObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.transition = 'all 0.5s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            featuresObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

featureCards.forEach(card => {
    featuresObserver.observe(card);
});

// ===================================
// ACHIEVEMENT CARDS ANIMATION
// ===================================
const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8)';
});

const achievementsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.achievement-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, index * 150);
            });
            achievementsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const achievementContainer = document.querySelector('.achievement-cards');
if (achievementContainer) {
    achievementsObserver.observe(achievementContainer);
}

// ===================================
// SKILLS LIST ANIMATION
// ===================================
const skillItems = document.querySelectorAll('.skills-list li');
skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
});

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('li');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transition = 'all 0.4s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsList = document.querySelector('.skills-list');
if (skillsList) {
    skillsObserver.observe(skillsList);
}
