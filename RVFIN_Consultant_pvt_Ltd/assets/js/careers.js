document.addEventListener('DOMContentLoaded', function() {
    // Job Filter Functionality
    const departmentFilter = document.getElementById('department');
    const locationFilter = document.getElementById('location');
    const jobCards = document.querySelectorAll('.job-card');
    const noJobsMessage = document.querySelector('.no-jobs');
    const resetFilters = document.getElementById('reset-filters');

    function filterJobs() {
        const departmentValue = departmentFilter.value;
        const locationValue = locationFilter.value;
        let visibleJobs = 0;

        jobCards.forEach(card => {
            const cardDept = card.dataset.department;
            const cardLocation = card.dataset.location;

            const deptMatch = departmentValue === 'all' || cardDept === departmentValue;
            const locationMatch = locationValue === 'all' || cardLocation === locationValue;

            if (deptMatch && locationMatch) {
                card.style.display = 'block';
                visibleJobs++;
            } else {
                card.style.display = 'none';
            }
        });

        noJobsMessage.style.display = visibleJobs === 0 ? 'block' : 'none';
    }

    departmentFilter.addEventListener('change', filterJobs);
    locationFilter.addEventListener('change', filterJobs);

    if (resetFilters) {
        resetFilters.addEventListener('click', function(e) {
            e.preventDefault();
            departmentFilter.value = 'all';
            locationFilter.value = 'all';
            filterJobs();
        });
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextTestimonial() {
        let newIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(newIndex);
    }

    function prevTestimonial() {
        let newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(newIndex);
    }

    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });

    // Auto-rotate testimonials (optional)
    // setInterval(nextTestimonial, 5000);
});