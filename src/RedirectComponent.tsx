import { useEffect } from 'react';

const RedirectComponent = () => {
    useEffect(() => {
        const openApp = () => {
            const start = Date.now();
            const timeout = setTimeout(() => {
                if (Date.now() - start < 1500) {
                    window.location.href = 'https://play.google.com/store/apps/details?id=com.singularitycredit.app';
                }
            }, 1000);

            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = 'eprocesses://';
            document.body.appendChild(iframe);

            window.onblur = () => clearTimeout(timeout);
        };

        openApp();
    }, []);

    return (
        <div>
            <p>Redirecting......</p>
        </div>
    );
};

export default RedirectComponent;
