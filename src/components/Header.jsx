import './Header.css';
import { Link } from 'react-router-dom';

function Header({ isOpen, setIsOpen }) {

	// TODO: Replace with actual user data from backend/context
	const user = {
		orbs: 15999,
		initials: 'KY',
		level: 999,
		rank: 'Observer'
	};

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	// const isActive = (path) => location.pathname === path;

	return (
		<header className="app-header">
			<div className="app-header__container">
				<div className="app-header__left">
					<button className="app-header__menu-btn" type="button" aria-label="Toggle sidebar" onClick={toggleSidebar}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
						</svg>
					</button>
					<Link to="/" className="app-header__logo" aria-label="Hexora home">
					<img src="/hexora_name.png" alt="hexora logo name" />
				</Link>
				</div>

				<div className="app-header__right">
					<div className="app-header__orbs" aria-label="Orbs balance">
						<svg className="orbs-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
							<circle cx="12" cy="12" r="10" />
						</svg>
						<span className="orbs-value">{user.orbs.toLocaleString()}</span>
						<button className="app-header__topup-btn" type="button" aria-label="Top up orbs" title="Top up orbs">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
								<line x1="12" y1="5" x2="12" y2="19" />
								<line x1="5" y1="12" x2="19" y2="12" />
							</svg>
						</button>
					</div>

					<div className="app-header__level" aria-label="User level">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
							<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
						</svg>
						<span className="level-value">Lv {user.level.toLocaleString()}</span>
					</div>

					<div className="app-header__rank" aria-label="User rank">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
						</svg>
						<span className="rank-value">{user.rank}</span>
					</div>

					<button className="app-header__avatar" type="button" aria-label="Open user profile">
						<span>{user.initials}</span>
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
