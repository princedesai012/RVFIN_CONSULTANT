// Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.service-accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close all other accordions
            accordions.forEach(item => {
                if (item !== accordion) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current accordion
            accordion.classList.toggle('active');
        });
    });
    
    // Open accordion if URL has hash (e.g., #compliance)
    if (window.location.hash) {
        const targetAccordion = document.querySelector(window.location.hash);
        if (targetAccordion) {
            targetAccordion.classList.add('active');
            setTimeout(() => {
                targetAccordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Tab system functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and tabs
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Existing accordion functionality
    const accordions = document.querySelectorAll('.service-accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close all other accordions
            accordions.forEach(item => {
                if (item !== accordion) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current accordion
            accordion.classList.toggle('active');
        });
    });
    
    // Open accordion if URL has hash
    if (window.location.hash) {
        const targetAccordion = document.querySelector(window.location.hash);
        if (targetAccordion) {
            targetAccordion.classList.add('active');
            setTimeout(() => {
                targetAccordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }
});