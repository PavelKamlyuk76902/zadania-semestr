// Student ID: 76902 - Pavel Kamlyuk

// ==========================================
// ZADANIE 4 - Przełączanie motywu i ukrywanie sekcji
// ==========================================

const themeButton = document.getElementById('theme-toggle');
const currentLink = document.getElementById('theme-css');

themeButton.addEventListener('click', function() {
    if (currentLink.getAttribute('href') === 'redcss.css') {
        currentLink.setAttribute('href', 'greencss.css');
        themeButton.textContent = '🔴 Włącz motyw czerwony [76902]';
    } else {
        currentLink.setAttribute('href', 'redcss.css');
        themeButton.textContent = '🟢 Włącz motyw zielony [76902]';
    }
});

const toggleButton = document.getElementById('toggle-section');
const sectionToHide = document.getElementById('projekty');

toggleButton.addEventListener('click', function() {
    if (sectionToHide.style.display === 'none') {
        sectionToHide.style.display = 'block';
        toggleButton.textContent = '🙈 Ukryj Projekty [76902]';
    } else {
        sectionToHide.style.display = 'none';
        toggleButton.textContent = '👁️ Pokaż Projekty [76902]';
    }
});

// ==========================================
// ZADANIE 5 - Walidacja formularza
// ==========================================

const form = document.getElementById('kontaktForm');
const imieInput = document.getElementById('imie');
const nazwiskoInput = document.getElementById('nazwisko');
const emailInput = document.getElementById('email');
const wiadomoscInput = document.getElementById('wiadomosc');

const imieError = document.getElementById('imieError');
const nazwiskoError = document.getElementById('nazwiskoError');
const emailError = document.getElementById('emailError');
const wiadomoscError = document.getElementById('wiadomoscError');
const successMessage = document.getElementById('successMessage');

// Funkcja walidująca imię
function validateImie(imie) {
    if (imie.trim() === '') {
        return 'Pole "Imię" jest wymagane';
    }
    if (/\d/.test(imie)) {
        return 'Imię nie może zawierać cyfr';
    }
    return '';
}

// Funkcja walidująca nazwisko
function validateNazwisko(nazwisko) {
    if (nazwisko.trim() === '') {
        return 'Pole "Nazwisko" jest wymagane';
    }
    if (/\d/.test(nazwisko)) {
        return 'Nazwisko nie może zawierać cyfr';
    }
    return '';
}

// Funkcja walidująca e-mail
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.trim() === '') {
        return 'Pole "E-mail" jest wymagane';
    }
    if (!emailRegex.test(email)) {
        return 'Niepoprawny format adresu e-mail';
    }
    return '';
}

// Funkcja walidująca wiadomość
function validateWiadomosc(wiadomosc) {
    if (wiadomosc.trim() === '') {
        return 'Pole "Wiadomość" jest wymagane';
    }
    return '';
}

// Walidacja w czasie rzeczywistym (blur)
imieInput.addEventListener('blur', function() {
    const error = validateImie(imieInput.value);
    imieError.textContent = error;
    imieError.style.display = error ? 'block' : 'none';
});

nazwiskoInput.addEventListener('blur', function() {
    const error = validateNazwisko(nazwiskoInput.value);
    nazwiskoError.textContent = error;
    nazwiskoError.style.display = error ? 'block' : 'none';
});

emailInput.addEventListener('blur', function() {
    const error = validateEmail(emailInput.value);
    emailError.textContent = error;
    emailError.style.display = error ? 'block' : 'none';
});

wiadomoscInput.addEventListener('blur', function() {
    const error = validateWiadomosc(wiadomoscInput.value);
    wiadomoscError.textContent = error;
    wiadomoscError.style.display = error ? 'block' : 'none';
});

// Walidacja przy wysyłaniu formularza
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    const imieErrorMsg = validateImie(imieInput.value);
    const nazwiskoErrorMsg = validateNazwisko(nazwiskoInput.value);
    const emailErrorMsg = validateEmail(emailInput.value);
    const wiadomoscErrorMsg = validateWiadomosc(wiadomoscInput.value);
    
    imieError.textContent = imieErrorMsg;
    imieError.style.display = imieErrorMsg ? 'block' : 'none';
    
    nazwiskoError.textContent = nazwiskoErrorMsg;
    nazwiskoError.style.display = nazwiskoErrorMsg ? 'block' : 'none';
    
    emailError.textContent = emailErrorMsg;
    emailError.style.display = emailErrorMsg ? 'block' : 'none';
    
    wiadomoscError.textContent = wiadomoscErrorMsg;
    wiadomoscError.style.display = wiadomoscErrorMsg ? 'block' : 'none';
    
    if (imieErrorMsg || nazwiskoErrorMsg || emailErrorMsg || wiadomoscErrorMsg) {
        isValid = false;
    }
    
    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
        
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
        
        console.log('Formularz poprawny - student 76902');
    } else {
        console.log('Błędy w formularzu - student 76902');
    }
});

console.log('Skrypt JS załadowany - student 76902 (Zadanie 4 + 5)');