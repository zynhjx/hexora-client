import './Layout.css'
import Sidebar from "./sidebar/Sidebar"
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SIDEBAR_OPEN_STORAGE_KEY = 'hexora.sidebar.open';

const getInitialSidebarState = () => {
    if (typeof window === 'undefined') {
        return false;
    }

    const savedState = window.localStorage.getItem(SIDEBAR_OPEN_STORAGE_KEY);

    if (savedState === null) {
        // First usage: sidebar toggled off
        return false;
    }

    return savedState === 'true';
};

function Layout() {
    const [isOpen, setIsOpen] = useState(getInitialSidebarState);
    const [isOverlay, setIsOverlay] = useState(false);

    useEffect(() => {
        const checkOverlay = () => {
            setIsOverlay(window.innerWidth <= 1312);
        };
        checkOverlay();
        window.addEventListener('resize', checkOverlay);
        return () => window.removeEventListener('resize', checkOverlay);
    }, []);

    useEffect(() => {
        window.localStorage.setItem(SIDEBAR_OPEN_STORAGE_KEY, String(isOpen));
    }, [isOpen]);


    return (
        <div className={`layout-container ${isOpen ? 'layout-container--expanded' : 'layout-container--collapsed'}`} style={{ position: 'relative' }}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && isOverlay && (
                <div
                    className="main-overlay"
                    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10 }}
                    onClick={() => setIsOpen(false)}
                />
            )}
            <main
                className='main'
            >
                <Outlet context={{ sidebarOpen: isOpen }} />
            </main>
        </div>
    )
}

export default Layout;