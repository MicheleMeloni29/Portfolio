const currentFlag = document.getElementById('current-flag');
const languageOptions = document.getElementById('language-options');
const flagOptions = document.querySelectorAll('.flag-option');

// Funzione che aggiorna testi
function updateTexts(lang) {
    if (lang === 'en') {
        document.getElementById('profession').textContent = 'Software Developer';
        document.getElementById('about-title').textContent = 'About Me';
        document.getElementById('passion-title').textContent = 'How My Passion Started';
        document.getElementById('passion-text').textContent = 'My passion for programming was born during my university studies. My first experiences made me realize how fascinating it is to concretely see the result of every line of code I wrote and improved. This feeling of being able to turn ideas into reality pushed me to delve deeper and deeper. Over time, I developed a strong interest in front-end development, both for mobile applications and the web. The possibility of creating dynamic and functional interfaces is what excites me the most.';
        document.getElementById('skills-title').textContent = 'Skills I\'m Developing';
        document.getElementById('skills-text').textContent = 'Alongside my academic studies, I dedicated myself to self-learning languages and tools outside the academic program. I deepened my knowledge of frameworks such as Flutter, React, and React Native, refining my front-end skills and broadening my perspective on various development ecosystems. Not limiting myself to front-end alone, I also began exploring the back-end world. In particular, I worked with Python and the Django framework to better understand the integration between front-end and back-end and to improve my ability to develop complete projects.';
        document.getElementById('goals-title').textContent = 'My Goals';
        document.getElementById('goals-text').textContent = 'My long-term goal is to become a full-stack developer, capable of working on complex and innovative projects. I want to contribute to dynamic teams, constantly learn, and perhaps one day create a product of my own.';
        document.getElementById('works-title').textContent = 'My Works';
        document.getElementById('contact-title').textContent = 'Contact';
    } else if (lang === 'es') {
        document.getElementById('profession').textContent = 'Software Developer';
        document.getElementById('about-title').textContent = 'Sobre Mí';
        document.getElementById('passion-title').textContent = 'Cómo comenzó mi pasión';
        document.getElementById('passion-text').textContent = 'Mi pasión por la programación nació durante mi trayectoria universitaria. Mis primeras experiencias me hicieron descubrir lo fascinante que es ver concretamente el resultado de cada línea de código que escribía y mejoraba. Esta sensación de poder transformar ideas en realidad me impulsó a querer profundizar cada vez más. Con el tiempo, desarrollé un gran interés por el desarrollo front-end, tanto para aplicaciones móviles como para la web. La posibilidad de crear interfaces dinámicas y funcionales es lo que más me apasiona.';
        document.getElementById('skills-title').textContent = 'Habilidades que estoy desarrollando';
        document.getElementById('skills-text').textContent = 'Paralelamente a mis estudios universitarios, me dediqué al aprendizaje autodidacta de lenguajes y herramientas fuera del programa académico. Profundicé en frameworks como Flutter, React y React Native, perfeccionando mis habilidades en front-end y ampliando mi visión sobre diferentes ecosistemas de desarrollo. Sin limitarme solo al front-end, también comencé a explorar el mundo del back-end. En particular, trabajé con Python y el framework Django, para comprender mejor la integración entre front-end y back-end y mejorar mis capacidades para desarrollar proyectos completos.';
        document.getElementById('goals-title').textContent = 'Mis Objetivos';
        document.getElementById('goals-text').textContent = 'Mi objetivo a largo plazo es convertirme en un desarrollador completo, capaz de trabajar en proyectos complejos e innovadores. Quiero contribuir a equipos dinámicos, aprender constantemente y quizás algún día crear un producto propio.';
        document.getElementById('works-title').textContent = 'Mis Trabajos';
        document.getElementById('contact-title').textContent = 'Contacto';
    } else {
        // Italiano default
        document.getElementById('profession').textContent = 'Software Developer';
        document.getElementById('about-title').textContent = 'Chi sono';
        document.getElementById('passion-title').textContent = 'Come è nata la mia passione';
        document.getElementById('passion-text').textContent = 'La mia passione per la programmazione è nata durante il mio percorso universitario, le prime esperienze mi hanno fatto scoprire quanto fosse affascinante vedere concretamente il risultato di ogni riga di codice che scrivevo e miglioravo. Questa sensazione di poter trasformare idee in realtà mi ha spinto a voler approfondire sempre di più. Col tempo, ho sviluppato un forte interesse per lo sviluppo front-end, sia per applicazioni mobile che per il web. La possibilità di creare interfacce dinamiche e funzionali è ciò che mi appassiona maggiormente.';
        document.getElementById('skills-title').textContent = 'Le competenze che sto sviluppando';
        document.getElementById('skills-text').textContent = "Parallelamente agli studi universitari, mi sono dedicato all'apprendimento da autodidatta di linguaggi e strumenti al di fuori del programma accademico.Ho approfondito framework come Flutter, React e React Native, affinando le mie competenze nel front - end e ampliando la mia visione su diversi ecosistemi di sviluppo.Non limitandomi al solo front - end, ho anche iniziato a esplorare il mondo del back - end.In particolare, ho lavorato con Python e il framework Django, per comprendere meglio l'integrazione tra front-end e back-end e migliorare le mie capacità nella realizzazione di progetti completi.";
        document.getElementById('goals-title').textContent = 'I miei obiettivi';
        document.getElementById('goals-text').textContent = 'Il mio obiettivo a lungo termine è diventare uno sviluppatore completo, capace di lavorare su progetti complessi e innovativi. Voglio contribuire a team dinamici, imparare costantemente e magari un giorno realizzare un prodotto tutto mio.';
        document.getElementById('works-title').textContent = 'I Miei Lavori';
        document.getElementById('contact-title').textContent = 'Contatti';
    }
}

// Apri/chiudi tendina cliccando sulla bandiera attuale
currentFlag.addEventListener('click', (e) => {
    e.stopPropagation();
    languageOptions.classList.toggle('open');
});

// Quando clicchi su una bandiera della tendina
flagOptions.forEach(flag => {
    flag.addEventListener('click', (e) => {
        e.stopPropagation();

        // Memorizza la bandiera attuale
        const tempSrc = currentFlag.src;
        const tempLang = currentFlag.getAttribute('data-lang');

        // Aggiorna bandiera principale
        currentFlag.src = flag.src;
        currentFlag.setAttribute('data-lang', flag.getAttribute('data-lang'));

        // Aggiorna testi in base alla nuova lingua
        const selectedLang = flag.getAttribute('data-lang');
        updateTexts(selectedLang);

        // Scambia bandiere (quella cliccata diventa nascosta)
        flag.src = tempSrc;
        flag.setAttribute('data-lang', tempLang);

        // Chiudi tendina
        languageOptions.classList.remove('open');
    });
});

// Chiudi tendina se clicchi fuori
document.addEventListener('click', () => {
    languageOptions.classList.remove('open');
});
