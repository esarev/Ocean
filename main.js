const dayNight = document.querySelector('.dayNight'),
    menuToggle = document.querySelector('.menuToggle'),
    body = document.querySelector('body');

    dayNight.addEventListener('click', function() {
        body.classList.toggle('dark');
        dayNight.classList.toggle('active');
    });
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
    });