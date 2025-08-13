document.querySelectorAll('.faq__item').forEach(function(el) {
    el.addEventListener('click', function() {
        el.classList.toggle('opened');
    });
});
