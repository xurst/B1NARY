document.addEventListener('DOMContentLoaded', function() {
    const settingsToggle = document.querySelector('.settings-toggle');
    const settingsPanel = document.querySelector('.settings-panel');
    const SIDEBAR_STATE_KEY = 'sidebarState';

    function saveSidebarState(isOpen) {
        localStorage.setItem(SIDEBAR_STATE_KEY, JSON.stringify({
            isOpen: isOpen,
            timestamp: new Date().getTime()
        }));
    }

    function loadSidebarState() {
        const savedState = localStorage.getItem(SIDEBAR_STATE_KEY);
        if (savedState) {
            const state = JSON.parse(savedState);
            if (state.isOpen) {
                settingsToggle.classList.add('active');
                settingsPanel.classList.add('active');
            }
        }
    }

    function toggleSettings() {
        settingsToggle.classList.toggle('active');
        settingsPanel.classList.toggle('active');

        saveSidebarState(settingsPanel.classList.contains('active'));
    }

    settingsToggle.addEventListener('click', toggleSettings);

    loadSidebarState();
});

// Use this for as print statements
// Example: showNotification("test!", "info", 2000);