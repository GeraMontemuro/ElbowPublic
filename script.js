document.addEventListener('DOMContentLoaded', function() {
    var servicesLink = document.getElementById('services-link');
    var servicesDropdown = document.getElementById('services-dropdown');
    
    servicesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace se active
        
        if (servicesDropdown.style.display === 'none' || servicesDropdown.style.display === '') {
            servicesDropdown.style.display = 'block';
        } else {
            servicesDropdown.style.display = 'none';
        }
    });
});