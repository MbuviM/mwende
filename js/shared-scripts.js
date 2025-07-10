
// Theme management
class ThemeManager {
    constructor() {
        this.darkModeIcon = document.getElementById('darkModeIcon');
        this.init();
    }

    init() {
        // Initialize theme on page load
        document.addEventListener("DOMContentLoaded", () => {
            this.loadSavedTheme();
        });

        // Add click listener for theme toggle
        if (this.darkModeIcon) {
            this.darkModeIcon.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem("theme") || 'dark';
        document.documentElement.setAttribute("data-bs-theme", savedTheme);
        this.updateIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateIcon(newTheme);
    }

    updateIcon(theme) {
        if (!this.darkModeIcon) return;
        
        const icon = this.darkModeIcon.querySelector('i');
        if (theme === "dark") {
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        } else {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
        }
    }
}

// Scroll to top functionality
class ScrollToTop {
    constructor() {
        this.button = document.querySelector('.scroll-to-top');
        if (this.button) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => {
            this.toggleVisibility();
        });

        this.button.addEventListener('click', () => {
            this.scrollToTop();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Rough notation handler
class RoughNotationHandler {
    constructor() {
        if (typeof RoughNotation !== 'undefined') {
            this.init();
        }
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const element = document.getElementById('company-name');
            if (element) {
                const annotation = RoughNotation.annotate(element, { 
                    type: 'underline', 
                    color: 'pink',
                    strokeWidth: 2,
                    padding: 2,
                    multiline: true
                });
                annotation.show();
            }
        });
    }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new ScrollToTop();
    new RoughNotationHandler();
});
