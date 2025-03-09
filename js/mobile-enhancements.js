/**
 * Mobile enhancements for better touch interaction
 */

// Function to initialize all mobile enhancements
function initializeMobileEnhancements() {
    console.log("Initializing mobile enhancements");
    // Mobile menu toggle functionality - enhanced implementation
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const body = document.body;
    
    if (mobileMenuToggle && mobileNav) {
        console.log("Found mobile menu elements, attaching event listeners");
        
        // Remove any existing event listeners by cloning and replacing the element
        const newMobileMenuToggle = mobileMenuToggle.cloneNode(true);
        mobileMenuToggle.parentNode.replaceChild(newMobileMenuToggle, mobileMenuToggle);
        
        // Handle toggle click with the new element
        newMobileMenuToggle.addEventListener('click', function() {
            console.log("Mobile menu clicked");
            this.classList.toggle('mobile-menu-active');
            mobileNav.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (mobileNav.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
        
        // Close menu when ESC key is pressed
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                newMobileMenuToggle.classList.remove('mobile-menu-active');
                mobileNav.classList.remove('active');
                body.style.overflow = '';
            }
        });
    } else {
        console.log("Mobile menu elements not found yet, will retry");
        // Elements not found, retry after a delay
        setTimeout(initializeMobileEnhancements, 500);
        return; // Don't proceed with other initializations
    }
}

// Initialize dropdown and other mobile features
function initializeOtherMobileFeatures() {
    console.log("Initializing other mobile features");
    
    // Mobile dropdown functionality (moved from header.html)
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    if (mobileDropdownToggles.length > 0) {
        console.log("Found mobile dropdown toggles");
        
        // Mobile dropdowns
        mobileDropdownToggles.forEach(function(toggle) {
            // Clone and replace to ensure clean event listeners
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            
            newToggle.addEventListener('click', function(e) {
                e.preventDefault();
                console.log("Mobile dropdown clicked");
                const parent = this.closest('.mobile-dropdown');
                const dropdownContent = parent.querySelector('.mobile-dropdown-content');
                
                // Close other dropdowns
                document.querySelectorAll('.mobile-dropdown-content.active').forEach(function(dropdown) {
                    if (dropdown !== dropdownContent) {
                        dropdown.classList.remove('active');
                        dropdown.closest('.mobile-dropdown').classList.remove('active');
                    }
                });
                
                dropdownContent.classList.toggle('active');
                parent.classList.toggle('active');
            });
        });
    } else {
        console.log("Mobile dropdown toggles not found yet, will retry");
        setTimeout(initializeOtherMobileFeatures, 500);
        return;
    }

    // Fix touch interactions for dropdown menus in desktop view
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    
    // Add touch support for dropdown menu items in desktop view
    dropdownLinks.forEach(function(link) {
        // First touch should show the dropdown, second touch should follow the link
        let touchCount = 0;
        
        link.addEventListener('touchstart', function(e) {
            touchCount++;
            
            // First touch on dropdown toggles menu
            if (touchCount === 1) {
                e.preventDefault();
                
                // Close other dropdowns
                dropdownLinks.forEach(function(otherLink) {
                    if (otherLink !== link) {
                        otherLink.parentNode.classList.remove('touch-open');
                        touchCount = 0;
                    }
                });
                
                // Toggle this dropdown
                link.parentNode.classList.toggle('touch-open');
                
                // Reset touch count after a delay
                setTimeout(function() {
                    touchCount = 0;
                }, 500);
            }
        });
    });
    
    // Adjust mobile navigation links for subpages
    if (window.location.pathname.includes('/pages/')) {
        document.querySelectorAll('#mobile-nav a').forEach(function(link) {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('../')) {
                if (href.startsWith('pages/')) {
                    link.setAttribute('href', href.replace('pages/', ''));
                } else if (!href.startsWith('.')) {
                    link.setAttribute('href', '../' + href);
                }
            }
        });
    }
    
    // Add detection for screen orientation changes to update layout
    window.addEventListener('orientationchange', function() {
        // Allow time for the orientation change to complete
        setTimeout(function() {
            // Force recalculation of layouts that might be affected
            const mobileNav = document.getElementById('mobile-nav');
            if (mobileNav && mobileNav.classList.contains('active')) {
                // Adjust mobile menu height based on new orientation
                mobileNav.style.height = (window.innerHeight - 67) + 'px';
            }
        }, 300);
    });
    
    // Ensure larger tap targets for touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
        
        // Increase tap target sizes for touch devices
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .touch-device .nav-links a,
            .touch-device .mobile-nav-links a {
                padding: 0.75rem !important;
            }
            
            .touch-device .dropdown-content a {
                padding: 1rem !important;
            }
            
            .touch-device .cta-button {
                padding: 0.85rem 1.75rem !important;
            }
            
            .touch-device .dropdown.touch-open .dropdown-content {
                display: block;
            }
        `;
        document.head.appendChild(styleElement);
    }
}

// Initial call on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Delay initialization to let components load first
    setTimeout(initializeMobileEnhancements, 500);
    setTimeout(initializeOtherMobileFeatures, 600);
    
    // Re-initialize after a longer delay as a fallback
    setTimeout(function() {
        console.log("Attempting final initialization");
        initializeMobileEnhancements();
        initializeOtherMobileFeatures();
    }, 2000);
});
