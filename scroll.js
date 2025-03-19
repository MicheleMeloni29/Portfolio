const paragraphs = document.querySelectorAll('.about-paragraph');
const title = document.querySelector('.title');

window.addEventListener('scroll', () => {

    // Paragrafi
    paragraphs.forEach(paragraph => {
        const rect = paragraph.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            paragraph.classList.add('visible');
        } else {
            paragraph.classList.remove('visible');
        }
    });

    // Titolo "Chi sono"
    const titleRect = title.getBoundingClientRect();
    const titleVisible = titleRect.top < window.innerHeight && titleRect.bottom > 0;

    if (titleVisible) {
        title.classList.add('visible');
    } else {
        title.classList.remove('visible');
    }
});
