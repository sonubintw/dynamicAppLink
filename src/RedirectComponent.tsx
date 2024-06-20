import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RedirectComponent = () => {
    // useEffect(() => {


    //     openApp();
    // }, []);
    const openApp = () => {
        const now = new Date().getTime();
        setTimeout(() => {
            if (new Date().getTime() - now < 2000) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.singularitycredit.app';
            }
        }, 100);
        window.location.href = 'eprocesses://';
    };

    return (
        <div>
            <button onClick={openApp}>
                ...redirecting
            </button>
        </div>
    );
};

export default RedirectComponent;
