document.addEventListener('DOMContentLoaded', function() {

    const hamburgerButton = document.querySelector('.hamburger-menu');
    const sidebarMenu = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar a');
    
    hamburgerButton.addEventListener('click', function() {
        sidebarMenu.classList.toggle('active');
        
        hamburgerButton.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                sidebarMenu.classList.remove('active');
                hamburgerButton.classList.remove('active');
            }
        });
    });
    
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').toLowerCase(); 
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    behavior: 'smooth'
                });
            }
        });
    });
    
    function handleResponsive() {
        if (window.innerWidth >= 768) {
            sidebarMenu.classList.remove('active');
            hamburgerButton.classList.remove('active');
        }
    }
    
    window.addEventListener('resize', handleResponsive);
    
    handleResponsive();
});