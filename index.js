"use strict"

// burger
;(function(){
    let burgerIcon = document.querySelector('.burger');
    let burgerList = document.querySelector('.burger-list');
    
    burgerIcon.addEventListener('click', function foo(){
        burgerList.classList.remove('slide-right');
        burgerList.classList.add('active-burger-list');
    })

    let burgerIcon2 = document.querySelector('.burger2');

    burgerIcon2.addEventListener('click', function () {
        burgerList.classList.remove('active-burger-list');
        burgerList.classList.add('slide-right');
    })

})();

// gallery
;(function(){
    let gallery = document.querySelector('.gallery');

    gallery.addEventListener('click', function (event) {
        if(event.target.matches('img')) {
            this.style.backgroundColor = 'red';

        }
    })
})();

// modal window
;(function(){
    let modalContainer = document.querySelector('.modal-container');
    let btn = document.querySelector('.first-btn');

    btn.addEventListener('click', function () {
        modalContainer.classList.add('modal-display');
    })

    let closeIcon = document.querySelector('.close-icon');

    closeIcon.addEventListener('click', function () {
        modalContainer.classList.remove('modal-display');
    })
})();