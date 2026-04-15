// Student ID: 76902 - Pavel Kamlyuk

// === 1. PRZEŁĄCZANIE MOTYWU (zielony/czerwony) ===
const themeButton = document.getElementById('theme-toggle');
const currentLink = document.getElementById('theme-css');

themeButton.addEventListener('click', function() {
    if (currentLink.getAttribute('href') === 'red.css') {
        currentLink.setAttribute('href', 'green.css');
        themeButton.textContent = '🔴 Włącz motyw czerwony [76902]';
    } else {
        currentLink.setAttribute('href', 'red.css');
        themeButton.textContent = '🟢 Włącz motyw zielony [76902]';
    }
});

// === 2. UKRYWANIE/POKAZYWANIE SEKCJI ===
const toggleButton = document.getElementById('toggle-section');
const sectionToHide = document.getElementById('projekty');

toggleButton.addEventListener('click', function() {
    if (sectionToHide.style.display === 'none') {
        sectionToHide.style.display = 'block';
        toggleButton.textContent = ' Ukryj Projekty [76902]';
    } else {
        sectionToHide.style.display = 'none';
        toggleButton.textContent = ' Pokaż Projekty [76902]';
    }
});
