const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bi-brightness-high');
    toggleIcon.classList.toggle('bi-moon');
    document.body.classList.toggle('dark-mode');
});