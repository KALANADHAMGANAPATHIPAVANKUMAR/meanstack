const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('is-toggled')); // Turn off all buttons
        button.classList.add('is-toggled'); // Turn on the clicked button
    });
});
