// this script is stupid
const debugButton = document.querySelector('.debug-button');
const backButton = document.getElementById('back-button');

if (debugButton) {
    debugButton.addEventListener('click', () => {
        window.location.href = 'debug.html'
    });
}

if (backButton) {
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'
    });
}