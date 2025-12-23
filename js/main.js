/* ===================================
   MAIN JAVASCRIPT
   Common functionality across all pages
   =================================== */

// ===================================
// NAVIGATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
});

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Set active nav link based on current page
    setActiveNavLink();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ===================================
// LOCAL STORAGE UTILITIES
// ===================================
const Storage = {
    // Get progress data
    getProgress() {
        const data = localStorage.getItem('cpRoadmapProgress');
        return data ? JSON.parse(data) : {};
    },

    // Save progress data
    saveProgress(data) {
        localStorage.setItem('cpRoadmapProgress', JSON.stringify(data));
    },

    // Mark topic as completed
    markTopicCompleted(topicId) {
        const progress = this.getProgress();
        progress[topicId] = {
            completed: true,
            completedAt: new Date().toISOString()
        };
        this.saveProgress(progress);
        return progress;
    },

    // Mark topic as incomplete
    markTopicIncomplete(topicId) {
        const progress = this.getProgress();
        delete progress[topicId];
        this.saveProgress(progress);
        return progress;
    },

    // Check if topic is completed
    isTopicCompleted(topicId) {
        const progress = this.getProgress();
        return progress[topicId]?.completed || false;
    },

    // Get completion percentage
    getCompletionPercentage(totalTopics) {
        const progress = this.getProgress();
        const completedCount = Object.values(progress).filter(p => p.completed).length;
        return Math.round((completedCount / totalTopics) * 100);
    },

    // Get completed topics count
    getCompletedCount() {
        const progress = this.getProgress();
        return Object.values(progress).filter(p => p.completed).length;
    }
};

// ===================================
// UTILITY FUNCTIONS
// ===================================
function formatDuration(duration) {
    return duration;
}

function getTopicById(topicId) {
    return topicsData.find(topic => topic.id === topicId);
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// SMOOTH SCROLL
// ===================================
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

// ===================================
// TOAST NOTIFICATIONS
// ===================================
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${getToastIcon(type)}</span>
        <span class="toast-message">${message}</span>
    `;

    // Add styles
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-md);
        padding: 16px 24px;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        backdrop-filter: blur(10px);
        box-shadow: var(--shadow-lg);
    `;

    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function getToastIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    return icons[type] || icons.info;
}

// Add fadeOut keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100px); }
    }
`;
document.head.appendChild(style);

// ===================================
// PAGE VISIBILITY
// ===================================
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Refresh data when page becomes visible
        if (typeof updateProgressBar === 'function') {
            updateProgressBar();
        }
    }
});
