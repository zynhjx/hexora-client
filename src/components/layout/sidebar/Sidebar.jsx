import './Sidebar.css'
import { Link, useLocation } from 'react-router-dom'

function Sidebar({ isOpen, setIsOpen }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const handleNavClick = () => {
        if (window.innerWidth < 1312) {
            setIsOpen(false);
        }
    };

    return (
        <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
            <div className="sidebar-section sidebar-nav-section">
                <nav className="sidebar-main-nav" aria-label="Main">
                    <Link 
                        to="/dashboard" 
                        className={`sidebar-main-link ${isActive('/dashboard') ? 'sidebar-main-link--active' : ''}`}
                        onClick={handleNavClick}
                    >
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
                        </svg>
                        <span className="link-label">Dashboard</span>
                    </Link>
                    <Link 
                        to="/training" 
                        className={`sidebar-main-link ${isActive('/training') ? 'sidebar-main-link--active' : ''}`}
                        onClick={handleNavClick}
                    >
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                        </svg>
                        <span className="link-label">Training</span>
                    </Link>
                    <Link 
                        to="/challenge" 
                        className={`sidebar-main-link ${isActive('/challenge') ? 'sidebar-main-link--active' : ''}`}
                        onClick={handleNavClick}
                    >
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-29.02 -29.02 348.27 348.27" fill="currentColor" aria-hidden="true">
                            <path d="M63.951,243.575c-1.945-3.578-4.401-6.907-7.363-9.869c-3.106-3.102-6.626-5.633-10.4-7.63c-4.51-2.387-0.945-7.5-0.945-7.5c4.616-7.023,8.825-14.079,12.305-20.226l-23.363-23.344H11.504c-4.362,0-7.898-3.539-7.898-7.902c0-4.361,3.536-7.9,7.898-7.9h25.947c2.1,0,4.107,0.832,5.588,2.312l85.379,85.291c1.483,1.483,2.315,3.495,2.315,5.589v26.073c0,4.365-3.537,7.897-7.9,7.897c-4.367,0-7.904-3.531-7.904-7.897v-22.798l-23.27-23.24c-6.281,3.707-13.582,8.252-20.816,13.25C70.842,245.679,66.698,248.629,63.951,243.575z"/>
                            <path d="M26.61,237.102c-7.106,0-13.784,2.764-18.812,7.784c-5.019,5.015-7.782,11.686-7.782,18.778c0,7.097,2.764,13.762,7.782,18.776c5.027,5.016,11.706,7.783,18.812,7.785c7.102,0,13.781-2.77,18.804-7.785c5.023-5.015,7.79-11.682,7.79-18.776c0-7.093-2.768-13.764-7.79-18.778C40.392,239.866,33.712,237.102,26.61,237.102z"/>
                            <path d="M100.985,182.318c-3.502,3.499-9.232,3.499-12.734,0.001l-8.81-8.801c-3.502-3.498-3.502-9.223,0-12.721L229.832,10.564c3.502-3.498,10.401-6.727,15.33-7.175l36.862-3.352c4.93-0.448,8.596,3.218,8.148,8.148l-3.346,36.791c-0.448,4.93-3.68,11.825-7.182,15.324l-150.4,150.251c-3.502,3.498-9.232,3.498-12.734,0l-8.822-8.813c-3.502-3.498-3.502-9.223,0-12.722L233.608,63.213c1.854-1.848,1.856-4.852,0.003-6.702c-1.848-1.853-4.853-1.853-6.709-0.002L100.985,182.318z"/>
                        </svg>
                        <span className="link-label">Challenge</span>
                    </Link>
                    <Link 
                        to="/leaderboard" 
                        className={`sidebar-main-link ${isActive('/leaderboard') ? 'sidebar-main-link--active' : ''}`}
                        onClick={handleNavClick}
                    >
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <polygon points="21 16 21 21 3 21 3 14 9 14 9 10 15 10 15 16 21 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <polygon points="12.46 3.94 13.5 4.09 12.75 4.82 12.93 5.85 12 5.37 11.07 5.85 11.25 4.82 10.5 4.09 11.54 3.94 12 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                        <span className="link-label">Leaderboard</span>
                    </Link>
                </nav>
                <nav className="sidebar-secondary-nav" aria-label="Secondary">
                    <Link
                        to="/my-progress"
                        className={`sidebar-main-link sidebar-secondary-link ${isActive('/my-progress') ? 'sidebar-main-link--active' : ''}`}
                        onClick={handleNavClick}
                    >
                        <span className="link-icon link-icon--line-graph" aria-hidden="true" />
                        <span className="link-label">My Progress</span>
                    </Link>
                    <Link
                        to="/achievements"
                        className={`sidebar-main-link sidebar-secondary-link ${isActive('/achievements') ? 'sidebar-main-link--active' : ''}`}
                        onClick={handleNavClick}
                    >
                        <span className="link-icon link-icon--trophy" aria-hidden="true" />
                        <span className="link-label">Achievements</span>
                    </Link>
                    <Link
                        to="/certificates"
                        className={`sidebar-main-link sidebar-secondary-link ${isActive('/certificates') ? 'sidebar-main-link--active' : ''}`}
                        onClick={handleNavClick}
                    >
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14 4.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5zM3.5 4a.5.5 0 0 0-.5.5V5h10v-.5a.5.5 0 0 0-.5-.5h-9zM8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <span className="link-label">Certificates</span>
                    </Link>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar