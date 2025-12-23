/* ===================================
   TOPIC DETAILS PAGE JAVASCRIPT
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    const topicId = getUrlParameter('id');
    
    if (!topicId) {
        renderNotFound();
        return;
    }
    
    const topic = getTopicById(topicId);
    
    if (!topic) {
        renderNotFound();
        return;
    }
    
    renderTopic(topic);
    initCollapsibleSections();
    initResourceTabs();
    initCompletionButton();
    updatePageTitle(topic.title);
});

// ===================================
// RENDER TOPIC
// ===================================
function renderTopic(topic) {
    const container = document.getElementById('topicContent');
    if (!container) return;

    const topicIndex = topicsData.findIndex(t => t.id === topic.id);
    const prevTopic = topicsData[topicIndex - 1];
    const nextTopic = topicsData[topicIndex + 1];
    const isCompleted = Storage.isTopicCompleted(topic.id);

    // Set CSS variable for banner color
    document.documentElement.style.setProperty('--topic-banner', topic.banner);

    const html = `
        <!-- Topic Header -->
        <header class="topic-header" style="--topic-banner: ${topic.banner}">
            <div class="container topic-header-content">
                <nav class="topic-breadcrumb">
                    <a href="index.html">Home</a>
                    <span>›</span>
                    <a href="roadmap.html">Roadmap</a>
                    <span>›</span>
                    <span>${topic.title}</span>
                </nav>
                
                <h1>${topic.title}</h1>
                
                <div class="topic-meta">
                    <div class="topic-meta-item">
                        <span>⏱️</span>
                        <span>${topic.duration}</span>
                    </div>
                    <div class="topic-meta-item">
                        <span>📚</span>
                        <span>${topic.resources.videos.length + topic.resources.articles.length} Resources</span>
                    </div>
                    <div class="topic-meta-item">
                        <span>💪</span>
                        <span>${topic.resources.practice.length} Practice Sets</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Topic Content -->
        <section class="topic-content">
            <div class="container">
                <div class="topic-layout">
                    <!-- Main Content -->
                    <div class="topic-main">
                        <!-- Explanation Section -->
                        <div class="content-section" data-section="explanation">
                            <div class="content-section-header">
                                <h2 class="content-section-title">
                                    <span class="icon">📖</span>
                                    Overview
                                </h2>
                                <span class="collapse-icon">▼</span>
                            </div>
                            <div class="content-section-body">
                                <div class="explanation-content">
                                    ${topic.explanation}
                                </div>
                            </div>
                        </div>

                        <!-- Learning Objectives Section -->
                        <div class="content-section" data-section="objectives">
                            <div class="content-section-header">
                                <h2 class="content-section-title">
                                    <span class="icon">🎯</span>
                                    Learning Objectives
                                </h2>
                                <span class="collapse-icon">▼</span>
                            </div>
                            <div class="content-section-body">
                                <ul class="objectives-list">
                                    ${topic.objectives.map(obj => `
                                        <li>
                                            <span class="objective-icon">✓</span>
                                            <span>${obj}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>

                        <!-- Resources Section -->
                        <div class="content-section" data-section="resources">
                            <div class="content-section-header">
                                <h2 class="content-section-title">
                                    <span class="icon">📚</span>
                                    Learning Resources
                                </h2>
                                <span class="collapse-icon">▼</span>
                            </div>
                            <div class="content-section-body">
                                <!-- Resource Tabs -->
                                <div class="resources-tabs">
                                    <button class="resource-tab active" data-tab="videos">
                                        <span class="resource-tab-icon">🎬</span>
                                        <span>Videos</span>
                                        <span class="resource-count">${topic.resources.videos.length}</span>
                                    </button>
                                    <button class="resource-tab" data-tab="articles">
                                        <span class="resource-tab-icon">📄</span>
                                        <span>Articles</span>
                                        <span class="resource-count">${topic.resources.articles.length}</span>
                                    </button>
                                    <button class="resource-tab" data-tab="practice">
                                        <span class="resource-tab-icon">💻</span>
                                        <span>Practice</span>
                                        <span class="resource-count">${topic.resources.practice.length}</span>
                                    </button>
                                </div>

                                <!-- Videos Panel -->
                                <div class="resource-panel active" data-panel="videos">
                                    <div class="resource-list">
                                        ${topic.resources.videos.map(video => `
                                            <a href="${video.url}" target="_blank" class="resource-item">
                                                <div class="resource-icon video">🎬</div>
                                                <div class="resource-info">
                                                    <div class="resource-title">${video.title}</div>
                                                    <div class="resource-meta">
                                                        <span>📺 YouTube</span>
                                                        <span>•</span>
                                                        <span>⏱️ ${video.duration}</span>
                                                    </div>
                                                </div>
                                                <span class="resource-arrow">→</span>
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>

                                <!-- Articles Panel -->
                                <div class="resource-panel" data-panel="articles">
                                    <div class="resource-list">
                                        ${topic.resources.articles.map(article => `
                                            <a href="${article.url}" target="_blank" class="resource-item">
                                                <div class="resource-icon article">📄</div>
                                                <div class="resource-info">
                                                    <div class="resource-title">${article.title}</div>
                                                    <div class="resource-meta">
                                                        <span>🔗 ${article.source}</span>
                                                    </div>
                                                </div>
                                                <span class="resource-arrow">→</span>
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>

                                <!-- Practice Panel -->
                                <div class="resource-panel" data-panel="practice">
                                    <div class="resource-list">
                                        ${topic.resources.practice.map(practice => `
                                            <a href="${practice.url}" target="_blank" class="resource-item">
                                                <div class="resource-icon practice">💻</div>
                                                <div class="resource-info">
                                                    <div class="resource-title">${practice.title}</div>
                                                    <div class="resource-meta">
                                                        <span>🏆 ${practice.platform}</span>
                                                    </div>
                                                </div>
                                                <span class="resource-arrow">→</span>
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar -->
                    <aside class="topic-sidebar">
                        <!-- Completion Action Card -->
                        <div class="action-card">
                            <h3>Topic Status</h3>
                            <div class="completion-status">
                                <div class="completion-icon ${isCompleted ? 'completed' : ''}" id="completionIcon">
                                    ${isCompleted ? '✅' : '⭕'}
                                </div>
                                <span class="completion-text ${isCompleted ? 'completed' : ''}" id="completionText">
                                    ${isCompleted ? 'Completed!' : 'Not Started'}
                                </span>
                            </div>
                            <div class="action-buttons">
                                <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-success'} w-full" id="completeBtn">
                                    ${isCompleted ? '↩️ Mark Incomplete' : '✅ Mark Complete'}
                                </button>
                                <a href="roadmap.html" class="btn btn-outline w-full">
                                    ← Back to Roadmap
                                </a>
                            </div>
                        </div>

                        <!-- Quick Stats -->
                        <div class="stats-card">
                            <h4>Quick Stats</h4>
                            <div class="stats-list">
                                <div class="stat-row">
                                    <span class="stat-label">
                                        <span>📍</span> Topic #
                                    </span>
                                    <span class="stat-value">${topicIndex + 1} of ${topicsData.length}</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">
                                        <span>⏱️</span> Duration
                                    </span>
                                    <span class="stat-value">${topic.duration}</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">
                                        <span>🎬</span> Videos
                                    </span>
                                    <span class="stat-value">${topic.resources.videos.length}</span>
                                </div>
                                <div class="stat-row">
                                    <span class="stat-label">
                                        <span>📄</span> Articles
                                    </span>
                                    <span class="stat-value">${topic.resources.articles.length}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Navigation Card -->
                        ${prevTopic || nextTopic ? `
                        <div class="nav-card">
                            <h4>Navigation</h4>
                            ${prevTopic ? `
                            <a href="topic.html?id=${prevTopic.id}" class="nav-topic-link" style="margin-bottom: var(--spacing-sm);">
                                <span class="nav-topic-arrow">←</span>
                                <span class="nav-topic-icon">${prevTopic.icon}</span>
                                <div class="nav-topic-info">
                                    <span class="nav-topic-label">Previous</span>
                                    <span class="nav-topic-title">${prevTopic.title}</span>
                                </div>
                            </a>
                            ` : ''}
                            ${nextTopic ? `
                            <a href="topic.html?id=${nextTopic.id}" class="nav-topic-link">
                                <span class="nav-topic-icon">${nextTopic.icon}</span>
                                <div class="nav-topic-info">
                                    <span class="nav-topic-label">Next</span>
                                    <span class="nav-topic-title">${nextTopic.title}</span>
                                </div>
                                <span class="nav-topic-arrow">→</span>
                            </a>
                            ` : ''}
                        </div>
                        ` : ''}
                    </aside>
                </div>
            </div>
        </section>
    `;

    container.innerHTML = html;
}

// ===================================
// RENDER NOT FOUND
// ===================================
function renderNotFound() {
    const container = document.getElementById('topicContent');
    if (!container) return;

    container.innerHTML = `
        <div class="topic-not-found">
            <div class="not-found-content">
                <div class="not-found-icon">🔍</div>
                <h2>Topic Not Found</h2>
                <p>The topic you're looking for doesn't exist or may have been moved.</p>
                <a href="roadmap.html" class="btn btn-primary">
                    ← Back to Roadmap
                </a>
            </div>
        </div>
    `;
}

// ===================================
// COLLAPSIBLE SECTIONS
// ===================================
function initCollapsibleSections() {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        const header = section.querySelector('.content-section-header');
        
        header.addEventListener('click', () => {
            section.classList.toggle('collapsed');
        });
    });
}

// ===================================
// RESOURCE TABS
// ===================================
function initResourceTabs() {
    const tabs = document.querySelectorAll('.resource-tab');
    const panels = document.querySelectorAll('.resource-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPanel = tab.dataset.tab;
            
            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update panels
            panels.forEach(p => p.classList.remove('active'));
            document.querySelector(`[data-panel="${targetPanel}"]`).classList.add('active');
        });
    });
}

// ===================================
// COMPLETION BUTTON
// ===================================
function initCompletionButton() {
    const btn = document.getElementById('completeBtn');
    if (!btn) return;

    const topicId = getUrlParameter('id');

    btn.addEventListener('click', () => {
        const isCompleted = Storage.isTopicCompleted(topicId);
        
        if (isCompleted) {
            Storage.markTopicIncomplete(topicId);
            updateCompletionUI(false);
            showToast('Topic marked as incomplete', 'info');
        } else {
            Storage.markTopicCompleted(topicId);
            updateCompletionUI(true);
            showToast('🎉 Topic completed! Great job!', 'success');
            celebrateCompletion();
        }
    });
}

// ===================================
// UPDATE COMPLETION UI
// ===================================
function updateCompletionUI(completed) {
    const icon = document.getElementById('completionIcon');
    const text = document.getElementById('completionText');
    const btn = document.getElementById('completeBtn');

    if (completed) {
        icon.classList.add('completed');
        icon.textContent = '✅';
        text.classList.add('completed');
        text.textContent = 'Completed!';
        btn.classList.remove('btn-success');
        btn.classList.add('btn-secondary');
        btn.innerHTML = '↩️ Mark Incomplete';
    } else {
        icon.classList.remove('completed');
        icon.textContent = '⭕';
        text.classList.remove('completed');
        text.textContent = 'Not Started';
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-success');
        btn.innerHTML = '✅ Mark Complete';
    }
}

// ===================================
// CELEBRATION ANIMATION
// ===================================
function celebrateCompletion() {
    // Create confetti effect
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#22c55e', '#f59e0b'];
    
    for (let i = 0; i < 50; i++) {
        createConfetti(colors[Math.floor(Math.random() * colors.length)]);
    }
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${color};
        left: ${Math.random() * 100}vw;
        top: -10px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        pointer-events: none;
        z-index: 10000;
        animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 4000);
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// ===================================
// UPDATE PAGE TITLE
// ===================================
function updatePageTitle(topicTitle) {
    document.title = `${topicTitle} - CP Roadmap Phase 1`;
}

// ===================================
// KEYBOARD SHORTCUTS
// ===================================
document.addEventListener('keydown', (e) => {
    // 'c' to toggle completion
    if (e.key === 'c' && !e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT') {
        const btn = document.getElementById('completeBtn');
        if (btn) btn.click();
    }
    
    // Left/Right arrows for navigation
    if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.metaKey) {
        const prevLink = document.querySelector('.nav-topic-link[href*="?id="]');
        if (prevLink && prevLink.querySelector('.nav-topic-label')?.textContent === 'Previous') {
            window.location.href = prevLink.href;
        }
    }
    
    if (e.key === 'ArrowRight' && !e.ctrlKey && !e.metaKey) {
        const links = document.querySelectorAll('.nav-topic-link[href*="?id="]');
        links.forEach(link => {
            if (link.querySelector('.nav-topic-label')?.textContent === 'Next') {
                window.location.href = link.href;
            }
        });
    }
});

// ===================================
// CODE ANIMATION
// ===================================
function animateCode(codeText, elementId = 'animatedCode') {
    const codeElement = document.getElementById(elementId);
    if (!codeElement) return;
    
    codeElement.innerHTML = ''; // Clear any existing content
    let index = 0;
    
    // Syntax highlighting map
    const keywords = ['function', 'if', 'return', 'const', 'let', 'var', 'void', 'cout'];
    const builtins = ['understood', 'recursion', 'infiniteRecursion'];
    
    function typeNextCharacter() {
        if (index < codeText.length) {
            let char = codeText[index];
            let span = document.createElement('span');
            
            // Check for keywords and apply colors
            let found = false;
            
            // Check for multi-character tokens (keywords, identifiers)
            if (/[a-zA-Z_]/.test(char)) {
                let word = '';
                let tempIndex = index;
                while (tempIndex < codeText.length && /[a-zA-Z0-9_]/.test(codeText[tempIndex])) {
                    word += codeText[tempIndex];
                    tempIndex++;
                }
                
                if (keywords.includes(word)) {
                    span.className = 'code-keyword';
                    span.textContent = word;
                    codeElement.appendChild(span);
                    index += word.length;
                    found = true;
                } else if (builtins.includes(word)) {
                    span.className = 'code-variable';
                    span.textContent = word;
                    codeElement.appendChild(span);
                    index += word.length;
                    found = true;
                }
            }
            
            if (!found) {
                // Handle single characters with colors
                if (char === '(' || char === ')' || char === '{' || char === '}') {
                    span.className = 'code-bracket';
                    span.textContent = char;
                } else if (char === '"' || char === "'") {
                    span.className = 'code-string';
                    span.textContent = char;
                } else if (char === '=' || char === '!' || char === '&' || char === '|') {
                    span.className = 'code-operator';
                    span.textContent = char;
                } else if (char === '/' && codeText[index + 1] === '/') {
                    // Handle comments
                    let comment = '';
                    while (index < codeText.length && codeText[index] !== '\n') {
                        comment += codeText[index];
                        index++;
                    }
                    span.className = 'code-comment';
                    span.textContent = comment;
                    codeElement.appendChild(span);
                    found = true;
                } else if (char === '\n') {
                    span.textContent = '\n';
                } else {
                    span.textContent = char;
                }
                
                if (!found) {
                    codeElement.appendChild(span);
                    index++;
                }
            }
            
            // Variable speed based on character type
            let delay = 30;
            if (char === '\n') {
                delay = 50;
            } else if (char === ' ') {
                delay = 20;
            } else if (char === '{' || char === '}' || char === ';') {
                delay = 40;
            }
            
            setTimeout(typeNextCharacter, delay);
            
            // Auto-scroll to show the animation
            const codeBlock = codeElement.closest('.code-block');
            if (codeBlock) {
                codeBlock.scrollLeft = codeBlock.scrollWidth;
            }
        }
    }
    
    typeNextCharacter();
}

// ===================================
// LIGHTBOX / IMAGE ZOOM FUNCTIONALITY
// ===================================
let lightboxImages = [];
let currentImageIndex = 0;

function initLightbox() {
    // Collect all clickable images from the page
    lightboxImages = [];
    
    // Add hero image
    const heroImg = document.querySelector('.hero-image');
    if (heroImg) {
        lightboxImages.push(heroImg.src);
    }
    
    // Add topic images from sidebar
    const topicImgs = document.querySelectorAll('.topic-image');
    topicImgs.forEach(img => {
        if (img.src) {
            lightboxImages.push(img.src);
        }
    });
    
    if (lightboxImages.length === 0) {
        return; // No images to zoom
    }
    
    // Setup event listeners for all images
    const allImages = document.querySelectorAll('.hero-image, .topic-image');
    allImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            // Find the index of clicked image
            currentImageIndex = lightboxImages.indexOf(img.src);
            openLightbox();
        });
    });
    
    // Lightbox overlay and controls
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (!lightboxOverlay) return;
    
    // Close lightbox
    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
    
    // Navigation
    lightboxPrev?.addEventListener('click', showPrevImage);
    lightboxNext?.addEventListener('click', showNextImage);
    
    // Keyboard controls
    document.addEventListener('keydown', handleLightboxKeyboard);
}

function openLightbox() {
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightboxOverlay && lightboxImages[currentImageIndex]) {
        lightboxImage.src = lightboxImages[currentImageIndex];
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        updateLightboxCounter();
        
        // Hide navigation buttons if only one image
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');
        if (lightboxImages.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
        }
    }
}

function closeLightbox() {
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightboxOverlay) {
        // Add closing animation
        lightboxImage?.classList.add('closing');
        lightboxOverlay.classList.add('closing');
        
        // Remove after animation completes
        setTimeout(() => {
            lightboxOverlay.classList.remove('active');
            lightboxOverlay.classList.remove('closing');
            lightboxImage?.classList.remove('closing');
            document.body.style.overflow = ''; // Restore scrolling
        }, 400); // Match animation duration
    }
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
    updateLightboxImage();
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    if (lightboxImage && lightboxImages[currentImageIndex]) {
        lightboxImage.src = lightboxImages[currentImageIndex];
        updateLightboxCounter();
    }
}

function updateLightboxCounter() {
    const counter = document.getElementById('lightboxCounter');
    if (counter && lightboxImages.length > 1) {
        counter.textContent = `${currentImageIndex + 1} / ${lightboxImages.length}`;
    }
}

function handleLightboxKeyboard(e) {
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    if (!lightboxOverlay?.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    }
}
