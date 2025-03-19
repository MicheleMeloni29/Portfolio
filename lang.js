const currentFlag = document.getElementById('current-flag');
const options = document.getElementById('language-options');
const flagOptions = document.querySelectorAll('.flag-option');

// Mostra/Nasconde il menu delle bandiere
currentFlag.addEventListener('click', () => {
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

// Cambia lingua al click
flagOptions.forEach(flag => {
    flag.addEventListener('click', () => {
        currentFlag.src = flag.src;
        options.style.display = 'none';
        const lang = flag.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Funzione per cambiare testi
function changeLanguage(lang) {
    if (lang === 'en') {
        document.getElementById('profession').textContent = 'Software Developer';
        document.getElementById('about-title').textContent = 'About Me';
        document.getElementById('passion-title').textContent = 'How My Passion Started';
        document.getElementById('passion-text').textContent = 'Since I was a child, I\'ve always been curious about how things work...';
        document.getElementById('skills-title').textContent = 'Skills I\'m Developing';
        document.getElementById('skills-text').textContent = 'I started with HTML and CSS to build web pages, and now I\'m focusing on JavaScript...';
        document.getElementById('goals-title').textContent = 'My Goals';
        document.getElementById('goals-text').textContent = 'My long-term goal is to become a complete developer...';
        document.getElementById('works-title').textContent = 'My Works';
        document.getElementById('contact-title').textContent = 'Contact';
    } else if (lang === 'es') {
        document.getElementById('profession').textContent = 'Desarrollador de Software';
        document.getElementById('about-title').textContent = 'Sobre Mí';
        document.getElementById('passion-title').textContent = 'Cómo comenzó mi pasión';
        document.getElementById('passion-text').textContent = 'Desde niño siempre me ha fascinado cómo funcionan las cosas...';
        document.getElementById('skills-title').textContent = 'Habilidades que estoy desarrollando';
        document.getElementById('skills-text').textContent = 'Comencé con HTML y CSS para crear páginas web, y ahora estoy enfocándome en JavaScript...';
        document.getElementById('goals-title').textContent = 'Mis Objetivos';
        document.getElementById('goals-text').textContent = 'Mi objetivo a largo plazo es convertirme en un desarrollador completo...';
        document.getElementById('works-title').textContent = 'Mis Trabajos';
        document.getElementById('contact-title').textContent = 'Contacto';
    } else {
        // Italiano default
        document.getElementById('profession').textContent = 'Software Developer';
        document.getElementById('about-title').textContent = 'Chi sono';
        document.getElementById('passion-title').textContent = 'Come è nata la mia passione';
        document.getElementById('passion-text').textContent = 'Fin da piccolo sono sempre stato incuriosito da come funzionassero le cose...';
        document.getElementById('skills-title').textContent = 'Le competenze che sto sviluppando';
        document.getElementById('skills-text').textContent = 'Ho iniziato con HTML e CSS per costruire pagine web...';
        document.getElementById('goals-title').textContent = 'I miei obiettivi';
        document.getElementById('goals-text').textContent = 'Il mio obiettivo a lungo termine è diventare uno sviluppatore completo...';
        document.getElementById('works-title').textContent = 'I Miei Lavori';
        document.getElementById('contact-title').textContent = 'Contatti';
    }
}
