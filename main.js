const dayNight = document.querySelector('.dayNight'),
    menuToggle = document.querySelector('.menuToggle'),
    body = document.querySelector('body'),
    navigation = document.querySelector('.navigation');

    dayNight.addEventListener('click', function() {
        body.classList.toggle('dark');
        dayNight.classList.toggle('active');
    });
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    });