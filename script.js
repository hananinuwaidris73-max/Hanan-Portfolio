document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

        function changeActiveNav() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        sections.forEach(section => {
            if (scrollPosition >= (section.offsetTop - 150) && 
                scrollPosition < (section.offsetTop + section.offsetHeight - 150)) {
                
                const currentId = section.getAttribute('id');
                
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

     window.addEventListener('scroll', changeActiveNav);
});