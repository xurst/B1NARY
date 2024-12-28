class NotificationManager {
    constructor() {
        this.notifications = [];
        this.notificationCount = 0;
    }

    createNotificationElement(type = 'default') {
        const notification = document.createElement('div');
        notification.className = 'notification-container hidden';

        const indicator = this.createTypeIndicator(type);
        const message = document.createElement('p');
        message.className = 'notification-message';

        const progressBar = document.createElement('div');
        progressBar.className = 'notification-progress-bar';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-notification';
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';

        notification.appendChild(indicator);
        notification.appendChild(message);
        notification.appendChild(progressBar);
        notification.appendChild(closeBtn);

        document.body.appendChild(notification);

        return notification;
    }

    calculatePosition(index) {
        const spacing = 10;
        const notificationHeight = 60;
        const bottomOffset = 30;
        return bottomOffset + (notificationHeight + spacing) * index;
    }

    createTypeIndicator(type) {
        const indicator = document.createElement('div');
        indicator.className = 'notification-type-indicator';

        let icon = '●';
        switch(type) {
            case 'success': icon = '✓'; break;
            case 'error': icon = '!'; break;
            case 'warning': icon = '⚠'; break;
            case 'info': icon = 'i'; break;
        }

        indicator.textContent = icon;
        return indicator;
    }

    showNotification(message, type = 'default', duration = 6000, errorCallback = null) {
        try {
            const notificationId = ++this.notificationCount;
            const notificationElement = this.createNotificationElement(type);

            const messageElement = notificationElement.querySelector('.notification-message');
            const progressBar = notificationElement.querySelector('.notification-progress-bar');
            const closeBtn = notificationElement.querySelector('.close-notification');

            const notificationTypes = {
                success: 'notification-success',
                error: 'notification-error',
                warning: 'notification-warning',
                default: 'notification-default',
                info: 'notification-info'
            };

            if (type in notificationTypes) {
                notificationElement.classList.add(notificationTypes[type]);
            }

            progressBar.style.width = '0%';

            messageElement.textContent = message;

            this.notifications.push({
                id: notificationId,
                element: notificationElement
            });

            this.updateNotificationPositions();

            requestAnimationFrame(() => {
                notificationElement.classList.remove("hidden");
                requestAnimationFrame(() => {
                    notificationElement.classList.add("show-notification");
                    requestAnimationFrame(() => {
                        progressBar.style.transition = `width ${duration}ms linear`;
                        progressBar.style.width = '100%';
                    });
                });
            });

            const hideNotification = () => {
                progressBar.style.transition = 'none';
                progressBar.style.width = '0%';
                notificationElement.classList.remove("show-notification");
                notificationElement.classList.add("hide-notification");

                this.notifications = this.notifications.filter(n => n.id !== notificationId);

                this.updateNotificationPositions();

                setTimeout(() => {
                    notificationElement.remove();
                }, 800);
            };

            const timeout = setTimeout(() => {
                hideNotification();
            }, duration);

            closeBtn.addEventListener('click', () => {
                clearTimeout(timeout);
                hideNotification();
            });
        } catch (err) {
            if (typeof errorCallback === 'function') {
                errorCallback(err);
            } else {
                console.error("An error occurred in showNotification:", err);
            }
        }
    }

    updateNotificationPositions() {
        this.notifications.forEach((notification, index ) => {
            const bottomPosition = this.calculatePosition(index);
            notification.element.style.bottom = `${bottomPosition}px`;
        });
    }
}

// Create an instance of NotificationManager
const notificationManager = new NotificationManager();

function showNotification(message, type = 'default', duration = 6000, errorCallback = null) {
    notificationManager.showNotification(message, type, duration, errorCallback);
}

// Example
showNotification(
    "page reload!",
    "info",
    2000,
    (err) => console.error("could not copy text: ", err)
);