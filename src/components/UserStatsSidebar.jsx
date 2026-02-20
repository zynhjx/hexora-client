import './UserStatsSidebar.css';

function UserStatsSidebar({ user, nextLevelExp, ringRadius, ringCircumference, ringOffset, getRankColor, stats, isOpen = true }) {
    return (
        <div className={`user-stats-sidebar ${!isOpen ? 'user-stats-sidebar--hidden' : ''}`}>
            {/* User Card */}
            <div className="user-card">
                <div className="user-card-top">
                    <span
                        className="user-stat-value rank-badge"
                        style={{ borderColor: getRankColor(user.rank), color: getRankColor(user.rank) }}
                    >
                        {user.rank}
                    </span>
                    <span className="user-stat-label">Rank</span>
                </div>
                <div className="user-card-bottom">
                    <div className="user-level-ring">
                        <svg viewBox="0 0 100 100" aria-hidden="true">
                            <defs>
                                <linearGradient id="userLevelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00d4ff" />
                                    <stop offset="100%" stopColor="#4b7bff" />
                                </linearGradient>
                            </defs>
                            <circle cx="50" cy="50" r={ringRadius} className="user-ring-bg" />
                            <circle
                                cx="50"
                                cy="50"
                                r={ringRadius}
                                className="user-ring-fill"
                                style={{
                                    strokeDasharray: ringCircumference,
                                    strokeDashoffset: ringOffset
                                }}
                            />
                        </svg>
                        <div className="user-ring-center">
                            <span className="user-level-number">{user.level}</span>
                            <span className="user-level-label">Level</span>
                        </div>
                    </div>
                    <div className="user-level-stats">
                        <div className="user-level-stat">
                            <span className="user-level-value">{user.exp.toLocaleString()}</span>
                            <span className="user-level-caption">Current EXP</span>
                        </div>
                        <div className="user-level-stat">
                            <span className="user-level-value">{nextLevelExp.toLocaleString()}</span>
                            <span className="user-level-caption">Next Level</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Card */}
            <div className="stats-card">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-box">
                        <div className="stat">
                            <span className="stat-value">
                                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                            </span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserStatsSidebar;

