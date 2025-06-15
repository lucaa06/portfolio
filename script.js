document.addEventListener('DOMContentLoaded', () => {

    // Effetto di digitazione con Typed.js
    const typed = new Typed('#typed-text', {
        strings: ["un Programmatore.", "un appassionato di Tecnologia.", "un Allenatore di Pallavolo.", "un eterno Curioso."],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
        showCursor: false,
    });

    // Logica per il cambio tema Dark/Light
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('i');

    // Funzione per applicare il tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        } else {
            body.classList.remove('dark-mode');
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        }
    };

    // Event listener per il click sul pulsante
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });

    // Controlla il tema salvato o le preferenze di sistema all'avvio
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

});