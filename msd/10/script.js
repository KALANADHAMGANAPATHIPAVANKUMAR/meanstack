const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('is-toggled');
    });
});
