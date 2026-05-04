// Zadania 4 + 5 + 6 + 7

// ==========================================
// ZADANIE 6 - Ładowanie danych z JSON
// ==========================================

async function loadCVData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // Umiejętności
        const listaUmiejetnosci = document.getElementById('lista-umiejetnosci');
        if (listaUmiejetnosci && data.umiejetnosci) {
            listaUmiejetnosci.innerHTML = '';
            data.umiejetnosci.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                listaUmiejetnosci.appendChild(li);
            });
        }
        
        // Projekty
        const listaProjekty = document.getElementById('lista-projekty');
        if (listaProjekty && data.projekty) {
            listaProjekty.innerHTML = '';
            data.projekty.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                listaProjekty.appendChild(li);
            });
        }
        
        // Doświadczenie
        const listaDoswiadczenie = document.getElementById('lista-doswiadczenie');
        if (listaDoswiadczenie && data.doswiadczenie) {
            listaDoswiadczenie.innerHTML = '';
            data.doswiadczenie.forEach(item => {
                const article = document.createElement('article');
                article.innerHTML = `<h3>${item.stanowisko}</h3><p>${item.okres}</p><p>${item.opis}</p>`;
                listaDoswiadczenie.appendChild(article);
            });
        }
        
        console.log('Dane JSON załadowane - student 76902');
    } catch (error) {
        console.error('Błąd ładowania JSON:', error);
    }
}

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

function validateImie(imie) {
    if (imie.trim() === '') return 'Pole "Imię" jest wymagane';
    if (/\d/.test(imie)) return 'Imię nie może zawierać cyfr';
    return '';
}

function validateNazwisko(nazwisko) {
    if (nazwisko.trim() === '') return 'Pole "Nazwisko" jest wymagane';
    if (/\d/.test(nazwisko)) return 'Nazwisko nie może zawierać cyfr';
    return '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') return 'Pole "E-mail" jest wymagane';
    if (!emailRegex.test(email)) return 'Niepoprawny format adresu e-mail';
    return '';
}

function validateWiadomosc(wiadomosc) {
    if (wiadomosc.trim() === '') return 'Pole "Wiadomość" jest wymagane';
    return '';
}

[imieInput, nazwiskoInput, emailInput, wiadomoscInput].forEach(input => {
    input.addEventListener('blur', function() {
        const validators = { imie: validateImie, nazwisko: validateNazwisko, email: validateEmail, wiadomosc: validateWiadomosc };
        const error = validators[input.id](input.value);
        const errorEl = document.getElementById(input.id + 'Error');
        if (errorEl) {
            errorEl.textContent = error;
            errorEl.style.display = error ? 'block' : 'none';
        }
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const errors = {
        imie: validateImie(imieInput.value),
        nazwisko: validateNazwisko(nazwiskoInput.value),
        email: validateEmail(emailInput.value),
        wiadomosc: validateWiadomosc(wiadomoscInput.value)
    };
    Object.keys(errors).forEach(key => {
        const el = document.getElementById(key + 'Error');
        if (el) {
            el.textContent = errors[key];
            el.style.display = errors[key] ? 'block' : 'none';
        }
        if (errors[key]) isValid = false;
    });
    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
        setTimeout(() => successMessage.style.display = 'none', 3000);
        console.log('Formularz poprawny - student 76902');
    }
});

// ==========================================
// ZADANIE 7 - Local Storage
// ==========================================

function getTasksFromStorage() {
    const tasksJSON = localStorage.getItem('tasks_76902');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

function displayTasks() {
    const tasksList = document.getElementById('tasksList');
    const tasksCount = document.getElementById('tasksCount');
    const tasks = getTasksFromStorage();
    if (!tasksList) return;
    tasksList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `<span class="task-text">${task.text}</span><span class="task-date">${task.date}</span><button class="delete-btn" onclick="deleteTask(${task.id})">Usuń</button>`;
        tasksList.appendChild(li);
    });
    if (tasksCount) tasksCount.textContent = `Liczba zadań: ${tasks.length}`;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput?.value.trim();
    if (!taskText) { alert('Wprowadź treść zadania! [76902]'); return; }
    const tasks = getTasksFromStorage();
    tasks.push({ id: Date.now(), text: taskText, date: new Date().toLocaleDateString('pl-PL') });
    localStorage.setItem('tasks_76902', JSON.stringify(tasks));
    if (taskInput) taskInput.value = '';
    displayTasks();
    console.log('Zadanie dodane - student 76902');
}

function deleteTask(taskId) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks_76902', JSON.stringify(tasks));
    displayTasks();
    console.log('Zadanie usunięte - student 76902');
}

// Enter w polu zadania
document.addEventListener('DOMContentLoaded', function() {
    loadCVData();
    displayTasks();
    const taskInput = document.getElementById('taskInput');
    if (taskInput) {
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addTask();
        });
    }
    console.log('Skrypt JS załadowany - student 76902 (Zadania 4+5+6+7)');
});