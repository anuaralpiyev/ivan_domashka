let btn_content = document.querySelectorAll('.btn__opener');
let text = document.querySelector('.text-content');

btn_content.forEach(function (e) {
    e.addEventListener('click', () => {
        text.classList.toggle('opened');
    });
});
