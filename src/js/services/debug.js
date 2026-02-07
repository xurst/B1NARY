document.addEventListener("DOMContentLoaded", function() {
    let currentMode = 'binary';

    const modeStatus = document.getElementById('mode-status');
    const currentModeDisplay = document.getElementById('current-mode');

    const testInput = document.getElementById('test-input');
    const conversionOutput = document.getElementById('conversion-output');

    const copyStatus = document.getElementById('copy-status');

    const testModeBinary = document.getElementById('test-mode-binary');
    const testModeHex = document.getElementById('test-mode-hex');
    const testModeMorse = document.getElementById('test-mode-morse');

    if (testModeBinary) testModeBinary.addEventListener('click', () => setMode('binary'));
    if (testModeHex) testModeHex.addEventListener('click', () => setMode('hex'));
    if (testModeMorse) testModeMorse.addEventListener('click', () => setMode('morse'));

    function setMode(mode) {
        currentMode = mode;
        if (currentModeDisplay) currentModeDisplay.textContent = currentMode;
        if (modeStatus) modeStatus.textContent = `Current Mode: ${currentMode}`;
        console.log(`Mode set to: ${currentMode}`);
    }

    const testConvert = document.getElementById('test-convert');
    if (testConvert) {
        testConvert.addEventListener('click', () => {
            const input = testInput ? testInput.value.trim() : '';
            if (input === '') {
                showNotification("Please enter text for conversion.", "warning", 2000);
                return;
            }

            const reverse = detectReverse(input, currentMode);
            const result = window.convertInput ? window.convertInput(input, currentMode, reverse) : "Conversion function not defined.";
            if (conversionOutput) conversionOutput.textContent = result || "Conversion failed.";
            console.log(`Conversion Result: ${result}`);
        });
    }

    const resetButton = document.getElementById('reset-button');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            setMode('binary');

            if (testInput) testInput.value = '';
            if (conversionOutput) conversionOutput.textContent = '';

            if (copyStatus) copyStatus.textContent = '';

            console.log("All fields and modes have been reset to default.");
        });
    }

    const testCopy = document.getElementById('test-copy');
    if (testCopy) {
        testCopy.addEventListener('click', () => {
            const outputText = conversionOutput ? conversionOutput.textContent.trim() : '';
            if (outputText === '') {
                showNotification("No text to copy.", "warning", 2000);
                return;
            }

            navigator.clipboard.writeText(outputText)
                .then(() => {
                    showNotification("Text copied to clipboard!", "success", 2000);
                    if (copyStatus) copyStatus.textContent = "Copy successful!";
                })
                .catch(err => {
                    showNotification("Copy failed.", "error", 2000);
                    if (copyStatus) copyStatus.textContent = "Copy failed!";
                    console.error("Clipboard copy error:", err);
                });
        });
    }

    const testNotificationInfo = document.getElementById('test-notification-info');
    const testNotificationWarning = document.getElementById('test-notification-warning');
    const testNotificationSuccess = document.getElementById('test-notification-success');
    const testNotificationError = document.getElementById('test-notification-error');

    if (testNotificationInfo) testNotificationInfo.addEventListener('click', () => showNotification("This is an info notification.", "info", 2000));
    if (testNotificationWarning) testNotificationWarning.addEventListener('click', () => showNotification("This is a warning notification.", "warning", 2000));
    if (testNotificationSuccess) testNotificationSuccess.addEventListener('click', () => showNotification("This is a success notification.", "success", 2000));
    if (testNotificationError) testNotificationError.addEventListener('click', () => showNotification("This is an error notification.", "error", 2000));
});