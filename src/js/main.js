// Vars
const modeButton = document.querySelector('.mode-button');
const modeDropdown = document.querySelector('.mode-dropdown');
const modeOptions = document.querySelectorAll('.mode-option');
const inputField = document.querySelector('.input-field');
const outputField = document.querySelector('.output-field');
const convertButton = document.querySelector('.convert-button');
const resetButton = document.querySelector('.reset-button');
const copyButton = document.querySelector('.copy-button');

import { showNotification } from "./components/notificationSystem.js";

let currentMode = 'binary';
modeButton.textContent = currentMode;

// Events

modeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    modeDropdown.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!modeButton.contains(event.target) && !modeDropdown.contains(event.target)) {
        modeDropdown.classList.add('hidden');
    }
});

modeOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentMode = option.dataset.mode;
        modeButton.textContent = currentMode;
        modeDropdown.classList.add('hidden');
    });
});

convertButton.addEventListener('click', () => {
    const input = inputField.value.trim();
    if (input === '') {
        showNotification("enter text to convert.", "warning", 2000);
        return;
    }

    const reverse = detectReverse(input, currentMode);
    const result = window.convertInput(input, currentMode, reverse);
    outputField.value = result;
});

resetButton.addEventListener('click', () => {
    if (inputField.value === '' && outputField.value === '') {
        showNotification("nothing to reset.", "warning", 2000);
    } else {
        inputField.value = '';
        outputField.value = '';
        showNotification("fields reset.", "info", 2000);
    }
});

copyButton.addEventListener('click', () => {
    const outputText = outputField.value;
    if (outputText.trim() === '') {
        showNotification("nothing to copy.", "warning", 2000);
        return;
    }
    navigator.clipboard.writeText(outputText)
        .then(() => {
            showNotification("copied to clipboard!", "success", 2000);
        })
        .catch(err => {
            showNotification("failed to copy", "error", 2000, (error) => {
                console.error("could not copy text:", error);
            });
        });
});

function detectReverse(input, mode) {
    switch (mode) {
        case "binary":
            return /^[01\s]+$/.test(input);
        case "hex":
            return /^[0-9A-Fa-f\s]+$/.test(input);
        case "morse":
            return /^[\.\-\s]+$/.test(input);
        default:
            return false;
    }
}