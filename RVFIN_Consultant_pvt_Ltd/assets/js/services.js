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