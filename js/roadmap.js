/* ===================================
   ROADMAP PAGE JAVASCRIPT
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    renderTopics();
    updateProgressBar();
    initFilters();
    initCardAnimations();
});

// ===================================
// RENDER TOPICS
// ===================================
function renderTopics(filter = 'all') {
    const grid = document.getElementById('topicsGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (!grid || typeof topicsData === 'undefined') return;

    let filteredTopics = topicsData;
    
    // Apply filter
    if (filter === 'completed') {
        filteredTopics = topicsData.filter(topic => Storage.isTopicCompleted(topic.id));
    } else if (filter === 'pending') {
        filteredTopics = topicsData.filter(topic => !Storage.isTopicCompleted(topic.id));
    }

    // Show/hide empty state
    if (filteredTopics.length === 0) {
        grid.style.display = 'none';
        emptyState.classList.remove('hidden');
        return;
    } else {
        grid.style.display = 'grid';
        emptyState.classList.add('hidden');
    }

    // Render cards
    const html = filteredTopics.map((topic, index) => {
        const isCompleted = Storage.isTopicCompleted(topic.id);
        const originalIndex = topicsData.findIndex(t => t.id === topic.id);
        
        return `
            <article class="topic-card ${isCompleted ? 'completed' : ''}" 
                     data-topic-id="${topic.id}"
                     style="--card-accent: ${topic.banner}; --card-banner: ${topic.banner}; animation-delay: ${index * 100}ms">
                <div class="topic-card-header">
                    <span class="topic-number">${originalIndex + 1}</span>
                    <span class="topic-card-icon">${topic.icon}</span>
                    <span class="topic-card-status"></span>
                </div>
                <div class="topic-card-body">
                    <h3 class="topic-card-title">${topic.title}</h3>
                    <p class="topic-card-description">${topic.shortDescription}</p>
                    <div class="topic-card-meta">
                        <span class="topic-card-duration">
                            <span>⏱️</span> ${topic.duration}
                        </span>
                        <a href="topic.html?id=${topic.id}" class="topic-card-link">
                            Learn More <span>→</span>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    grid.innerHTML = html;
    
    // Re-attach animations
    initCardAnimations();
}

// ===================================
// UPDATE PROGRESS BAR
// ===================================
function updateProgressBar() {
    const totalTopics = topicsData.length;
    const completedCount = Storage.getCompletedCount();
    const percentage = Storage.getCompletionPercentage(totalTopics);

    // Update DOM elements
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');
    const completedCountEl = document.getElementById('completedCount');
    const totalCountEl = document.getElementById('totalCount');

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
    
    if (progressPercent) {
        animateNumber(progressPercent, parseInt(progressPercent.textContent) || 0, percentage);
    }
    
    if (completedCountEl) {
        completedCountEl.textContent = completedCount;
    }
    
    if (totalCountEl) {
        totalCountEl.textContent = totalTopics;
    }
}

// ===================================
// ANIMATE NUMBER
// ===================================
function animateNumber(element, start, end, duration = 500) {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + range * easeOut);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ===================================
// FILTERS
// ===================================
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Apply filter
            const filter = btn.dataset.filter;
            renderTopics(filter);
        });
    });
}

// ===================================
// CARD ANIMATIONS
// ===================================
function initCardAnimations() {
    const cards = document.querySelectorAll('.topic-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    // Add click handler for whole card
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking the link directly
            if (e.target.closest('.topic-card-link')) return;
            
            const topicId = card.dataset.topicId;
            window.location.href = `topic.html?id=${topicId}`;
        });
        
        // Add pointer cursor
        card.style.cursor = 'pointer';
    });
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================
document.addEventListener('keydown', (e) => {
    const cards = document.querySelectorAll('.topic-card');
    const focusedCard = document.activeElement.closest('.topic-card');
    
    if (!focusedCard) return;
    
    const currentIndex = Array.from(cards).indexOf(focusedCard);
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextCard = cards[currentIndex + 1];
        if (nextCard) nextCard.focus();
    }
    
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevCard = cards[currentIndex - 1];
        if (prevCard) prevCard.focus();
    }
    
    if (e.key === 'Enter') {
        const topicId = focusedCard.dataset.topicId;
        window.location.href = `topic.html?id=${topicId}`;
    }
});

// Make cards focusable
document.querySelectorAll('.topic-card').forEach(card => {
    card.setAttribute('tabindex', '0');
});
