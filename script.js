// Interactive features for Docker Course

document.addEventListener('DOMContentLoaded', function() {
    // Initialize features
    initializeQuizzes();
    initializeHints();
    initializeSolutions();
    initializeProgress();
    initializeSmoothScroll();
});

// Quiz functionality
function initializeQuizzes() {
    const quizContainers = document.querySelectorAll('.quiz');
    
    quizContainers.forEach(quiz => {
        const options = quiz.querySelectorAll('.quiz-option');
        const submitBtn = quiz.querySelector('.quiz-submit');
        const feedback = quiz.querySelector('.quiz-feedback');
        
        if (!submitBtn) return;
        
        // Handle option selection
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options in this quiz
                const quizOptions = this.closest('.quiz-options').querySelectorAll('.quiz-option');
                quizOptions.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                this.classList.add('selected');
            });
        });
        
        // Handle submit button
        submitBtn.addEventListener('click', function() {
            const selectedOption = quiz.querySelector('.quiz-option.selected');
            
            if (!selectedOption) {
                showFeedback(feedback, 'Please select an answer!', 'error');
                return;
            }
            
            const isCorrect = selectedOption.dataset.correct === 'true';
            
            // Mark options as correct/incorrect
            options.forEach(option => {
                if (option.dataset.correct === 'true') {
                    option.classList.add('correct');
                } else if (option.classList.contains('selected')) {
                    option.classList.add('incorrect');
                }
                // Disable further selection
                option.style.pointerEvents = 'none';
            });
            
            // Show feedback
            if (isCorrect) {
                showFeedback(feedback, '✓ Correct! ' + (selectedOption.dataset.explanation || 'Well done!'), 'success');
            } else {
                const correctOption = quiz.querySelector('.quiz-option[data-correct="true"]');
                const explanation = correctOption ? correctOption.dataset.explanation || 'Try again!' : 'Try again!';
                showFeedback(feedback, '✗ Incorrect. ' + explanation, 'error');
            }
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            submitBtn.style.cursor = 'not-allowed';
        });
    });
}

function showFeedback(feedbackElement, message, type) {
    if (!feedbackElement) return;
    
    feedbackElement.textContent = message;
    feedbackElement.className = 'quiz-feedback show ' + type;
}

// Hint toggle functionality
function initializeHints() {
    const hintToggles = document.querySelectorAll('.hint-toggle');
    
    hintToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const hintBox = this.closest('.hint-box');
            const hintContent = hintBox.querySelector('.hint-content');
            
            if (hintContent.classList.contains('show')) {
                hintContent.classList.remove('show');
                this.textContent = '💡 Show Hint';
            } else {
                hintContent.classList.add('show');
                this.textContent = '💡 Hide Hint';
            }
        });
    });
}

// Solution toggle functionality
function initializeSolutions() {
    const solutionToggles = document.querySelectorAll('.solution-toggle');
    
    solutionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const solutionBox = this.closest('.solution-box');
            const solutionContent = solutionBox.querySelector('.solution-content');
            
            if (solutionContent.classList.contains('show')) {
                solutionContent.classList.remove('show');
                this.textContent = '✓ Show Solution';
            } else {
                solutionContent.classList.add('show');
                this.textContent = '✓ Hide Solution';
            }
        });
    });
}

// Progress tracking
function initializeProgress() {
    // Track scroll progress
    window.addEventListener('scroll', function() {
        const progressFill = document.querySelector('.progress-fill');
        if (!progressFill) return;
        
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        progressFill.style.width = progress + '%';
    });
    
    // Load module completion status from localStorage
    updateModuleProgress();
}

function updateModuleProgress() {
    const currentModule = getCurrentModule();
    if (!currentModule) return;
    
    // Check if module is completed
    const completed = localStorage.getItem('module_' + currentModule + '_completed');
    
    if (completed === 'true') {
        markModuleComplete(currentModule);
    }
}

function getCurrentModule() {
    const path = window.location.pathname;
    const match = path.match(/module(\d+)\.html/);
    return match ? match[1] : null;
}

function markModuleComplete(moduleNum) {
    localStorage.setItem('module_' + moduleNum + '_completed', 'true');
    
    // Add visual indicator if completion button exists
    const completeBtn = document.querySelector('.mark-complete-btn');
    if (completeBtn) {
        completeBtn.textContent = '✓ Module Completed';
        completeBtn.classList.add('completed');
        completeBtn.disabled = true;
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Copy code to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        showNotification('Code copied to clipboard!', 'success');
    }, function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Code copied to clipboard!', 'success');
    });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = 'notification ' + type;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add copy buttons to code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.innerHTML = '📋 Copy';
        copyBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255,255,255,0.1);
            color: white;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 3px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.2s;
        `;
        
        copyBtn.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255,255,255,0.2)';
        });
        
        copyBtn.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255,255,255,0.1)';
        });
        
        copyBtn.addEventListener('click', function() {
            const code = block.querySelector('pre').textContent;
            copyToClipboard(code);
            this.innerHTML = '✓ Copied';
            setTimeout(() => {
                this.innerHTML = '📋 Copy';
            }, 2000);
        });
        
        block.style.position = 'relative';
        block.appendChild(copyBtn);
    });
});

// Add animations on scroll
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.module-card, .about-card, .content-section').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', addScrollAnimations);

// Module completion handler
function completeModule() {
    const moduleNum = getCurrentModule();
    if (moduleNum) {
        markModuleComplete(moduleNum);
        showNotification('Module ' + moduleNum + ' marked as complete!', 'success');
    }
}

// Export functions for use in module pages
window.DockerCourse = {
    completeModule,
    copyToClipboard,
    showNotification,
    getCurrentModule
};
