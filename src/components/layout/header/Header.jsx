import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header({ isOpen, setIsOpen }) {

	// TODO: Replace with actual user data from backend/context
	const user = {
		orbs: 100,
		initials: 'KY',
		level: 1,
		rank: 'Observer'
	};

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const [dropdownOpen, setDropdownOpen] = useState(false);

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
					<Link to="/dashboard" className="app-header__logo" aria-label="Hexora home">
					<img src="/hexora_name.png" alt="hexora logo name" />
				</Link>
				</div>

				<div className="app-header__right">
					<div className="app-header__orbs" aria-label="Orbs balance">
						<svg className="orbs-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 0L22.3923 6V18L12 24L1.6077 18V6L12 0Z" fill="#00FFFF"/>
							<path d="M21.0264 6.78809V17.2109L12 22.4229L2.97363 17.2109V6.78809L12 1.57617L21.0264 6.78809Z" fill="#00FFFF" stroke="black"/>
						</svg>
						<span className="orbs-value">{user.orbs.toLocaleString()}</span>
						<button className="app-header__topup-btn" type="button" aria-label="Top up orbs" title="Top up orbs">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
								<line x1="12" y1="5" x2="12" y2="19" />
								<line x1="5" y1="12" x2="19" y2="12" />
							</svg>
						</button>
					</div>

					<button className="app-header__avatar" type="button" aria-label="Open user profile" onClick={() => setDropdownOpen((v) => !v)}>
						<span>{user.initials}</span>
					</button>

					{dropdownOpen && (
						<div className="app-header__dropdown">
							<div className="dropdown-profile-row">
								<div className="dropdown-avatar">{user.initials}</div>
								<div className="dropdown-user-info">
									<div className="dropdown-user-name">Kyoru</div>
									<div className="app-header__level" aria-label="User level">
										{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
											<path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
											<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
										</svg> */}
										<span className="level-value">Lv {user.level.toLocaleString()}</span>
									</div>
									<div className="app-header__rank" aria-label="User rank">
										{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
											<path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
										</svg> */}
										<span className="rank-value">{user.rank}</span>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
