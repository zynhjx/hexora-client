import './Dashboard.css';
import FireIcon from '../../icons/FireIcon';
import FireIconFilled from '../../icons/FireIconFilled';
import CircleProgress from '../../shared/CircleProgress';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashboard() {
        // Sample completed modules
    const completedModules = [
        {
            title: 'Network Basics',
            description: 'Introduction to networking concepts and protocols.',
            completedAt: '2026-02-20',
        },
        {
            title: 'Hashing Fundamentals',
            description: 'Learn about hashing algorithms and their applications.',
            completedAt: '2026-02-21',
        },
        {
            title: 'Packet Sniffer',
            description: 'Explore packet sniffing tools and techniques.',
            completedAt: '2026-02-22',
        },
        
    ];

    const navigate = useNavigate();
    const user = {
        name: 'Kyoru',
        level: 1,
        rank: 'Observer',
        xp: 50,
        week_streak: 1,
        streak_pts: 10,
        streak_active: false
    };



    const latestModules = [
        // {
        //     title: 'Cryptography 101',
        //     description: 'Learn the fundamentals of encryption and cryptographic algorithms.',
        //     progress: 60,
        //     currentModule: 4,
        //     totalModules: 8
        // },
        // {
        //     title: 'Cryptography 101',
        //     description: 'Learn the fundamentals of encryption and cryptographic algorithms.',
        //     progress: 60,
        //     currentModule: 4,
        //     totalModules: 8
        // },
        
    ];


    const activity = [
        { title: 'Completed “Network Basics” quiz', time: 'Today • 10:24 AM' },
        { title: 'Unlocked “Packet Sniffer” badge', time: 'Yesterday • 6:10 PM' },
        // { title: 'Finished Module 3: Hashing', time: 'Yesterday • 2:45 PM' },
        // { title: 'Unlocked “Packet Sniffer” badge', time: 'Yesterday • 6:10 PM' },
        // { title: 'Finished Module 3: Hashing', time: 'Yesterday • 2:45 PM' },
        // { title: 'Unlocked “Packet Sniffer” badge', time: 'Yesterday • 6:10 PM' },
        // { title: 'Finished Module 3: Hashing', time: 'Yesterday • 2:45 PM' }
    ];
    
    const topFourEntries = [
        { rank: 1, name: 'Alex Chen', score: 4250 },
        { rank: 2, name: 'Jordan Smith', score: 3890 },
        { rank: 3, name: 'Morgan Lee', score: 3650 },
        { rank: 4, name: 'Casey Brown', score: 3420 }
    ];

    const currentUserEntry = {
        rank: 142,
        name: "Kyoru",
        score: 0,
    };

    const challenges = [
        // { 
        //     title: 'SQL Injection Defense', 
        //     description: 'Learn to identify and prevent SQL injection attacks through practical defense techniques.',
        //     difficulty: 'Easy', 
        //     orbs: 250,
        //     progress: 45,
        //     currentStep: 3,
        //     totalSteps: 7
        // },
        // { 
        //     title: 'Password Cracking', 
        //     description: 'Master password cracking techniques and defensive measures against brute force attacks.',
        //     difficulty: 'Medium', 
        //     orbs: 500,
        //     progress: 60,
        //     currentStep: 4,
        //     totalSteps: 6
        // },
        // { 
        //     title: 'Network Penetration', 
        //     description: 'Advanced techniques for penetration testing and network vulnerability assessment.',
        //     difficulty: 'Hard', 
        //     orbs: 750,
        //     progress: 20,
        //     currentStep: 1,
        //     totalSteps: 8
        // }
    ];

    const leaderboardDisplay = [
        ...topFourEntries,
        currentUserEntry
    ];

    const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
    const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
    const [eventCountdown, setEventCountdown] = useState('');

    useEffect(() => {
        if (challenges.length > 1) {
            const interval = setInterval(() => {
                setCurrentChallengeIndex((prevIndex) => (prevIndex + 1) % challenges.length);
            }, 5000);
            return () => clearInterval(interval);
        }
        return undefined;
    }, [challenges.length]);

    useEffect(() => {
        if (latestModules.length > 1) {
            const interval = setInterval(() => {
                setCurrentModuleIndex((prevIndex) => (prevIndex + 1) % latestModules.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [latestModules.length]);

    useEffect(() => {
        const eventStart = new Date('2026-05-20T00:00:00');
        const updateCountdown = () => {
            const now = new Date();
            const diffMs = eventStart.getTime() - now.getTime();
            if (diffMs <= 0) {
                setEventCountdown('Happening now');
                return;
            }

            const totalMinutes = Math.floor(diffMs / 60000);
            const days = Math.floor(totalMinutes / (24 * 60));
            const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
            const minutes = totalMinutes % 60;
            setEventCountdown(`Starts in ${days}d ${hours}h ${minutes}m`);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 60000);
        return () => clearInterval(interval);
    }, []);

    const getNextLevelXp = (level) => {
        return level * (level + 1) * 250 / 2;
    };

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const nextLevelXp = getNextLevelXp(user.level);
    const levelProgress = (user.xp / nextLevelXp) * 100;
    const dashOffset = circumference * (1 - levelProgress / 100);

    return (
        <div className="dashboard">
            {/* <div className="event-announcement">
                <div className="event-badge">LIMITED EVENT</div>
                <h3 className="event-title">STI College Puerto Princesa Business Exposition 2026</h3>
                <p className="event-description">Test your cybersecurity knowledge, complete interactive challenges, and compete for exciting prizes in the Business Expo 2026.</p>
                <span className="event-timer">May 20-22</span>
                <span className="event-countdown">{eventCountdown}</span>
            </div> */}

            <div className="dashboard-grid">
                <section className="card greeting-card">
                    <div className="greeting-text">
                        <h1>
                            <span style={{ color: "#a0b0ff" }}>Welcome back,</span> <span className="user-name">{user.name}</span>
                        </h1>
                        <p className="greeting-subtitle">Let’s keep your cybersecurity skills sharp today.</p>

                    </div>

                </section>

                <section className="card level-card">
                    <div className="card-header">
                        <h2>Level</h2>
                        <span className="rank-pill">{user.rank}</span>
                    </div>
                    <div className="level-body">
                        <div className="level-ring-wrapper">
                            <svg className="level-ring" viewBox="0 0 100 100" aria-hidden="true">
                                <defs>
                                    <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00d4ff" />
                                        <stop offset="100%" stopColor="#4b7bff" />
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="50" r={radius} className="ring-bg" />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r={radius}
                                    className="ring-fill"
                                    style={{
                                        strokeDasharray: circumference,
                                        strokeDashoffset: dashOffset
                                    }}
                                />
                            </svg>
                            <div className="ring-center">
                                <span className="level-number">{user.level}</span>
                                <span className="level-label">Level</span>
                            </div>
                        </div>
                        <div className="level-stats">
                            <div className="level-stat-item">
                                <span className="stat-value">{user.xp.toLocaleString()}</span>
                                <span className="stat-label">Current XP</span>
                            </div>
                            <div className="level-stat-item">
                                <span className="stat-value">{nextLevelXp.toLocaleString()}</span>
                                <span className="stat-label">Next Level</span>
                            </div>
                        </div>
                    </div>
                </section>


                <section className={`card user-streak-card${user.streak_active ? ' golded' : ''}`}>
                    <div className="card-header">
                        <h2 id='streak-title'>Weekly Streak</h2>
                        <span className="streak-pill">{user.streak_active ? "Active" : "Inactive"}</span>
                    </div>
                    <div className="streak-card-content">
                        <div className="streak-content-container">
                            <div className="fire-icon">
                                {/* Show only one fire icon at a time. Change 'showFilled' to true for colored fire. */}
                                {user.streak_active ? (
                                    <FireIconFilled style={{ width: 96, height: 96 }} />
                                ) : (
                                    <FireIcon style={{ width: 96, height: 96 }} />
                                )}
                            </div>
                            <div className='streak-info'>
                                <p className='streak-number streak-title'>
                                    <span className="streak-gradient-text">
                                        {user.week_streak} week{user.week_streak > 1 ? 's' : ''}
                                    </span>
                                </p>
                                <div>
                                    <span className={`streak-progress-info ${user.streak_active ? "golded" : '' }`}>{user.streak_pts}/30 Streak pts</span>
                                </div>
                                <div className="progress-wrapper">
                                    <div className='progress' style={{width: `${Math.min(100, Math.round((user.streak_pts / 30) * 100))}%`}}></div>
                                </div>
                                {/* <span style={{color:'#a0b0ff', fontSize:'0.85rem', marginTop:'0.2rem'}}>Keep your streak alive for bonus rewards!</span> */}
                            </div>
                        </div>
                    </div>
                </section>
                

                <section className="card latest-card">
                    <div className="card-header">
                        <h2>Continue Learning</h2>
                        <button className="ghost-btn small" onClick={() => navigate('/training')}>View All</button>
                    </div>
                    <div className="latest-modules-grid">
                        {latestModules.length > 0 ? (
                            <>
                                <div className="module-carousel-container">
                                    <div className="module-carousel">
                                        <div className="carousel-track" style={{ transform: `translateX(-${currentModuleIndex * 100}%)` }}>
                                            {latestModules.map((module, index) => (
                                                <div key={index} className="carousel-slide" onClick={() => navigate(`/training`, { state: { moduleId: index } })}>
                                                    <div className="carousel-module">
                                                        <h3>{module.title}</h3>
                                                        <p className="module-desc">{module.description}</p>
                                                        <div className="module-progress-info">
                                                            <div className="progress-header">
                                                                <span className="progress-label">Overall Progress</span>
                                                                <span className="progress-percentage">{module.progress}%</span>
                                                            </div>
                                                            <div className="progress-bar">
                                                                <div className="progress-fill" style={{ width: `${module.progress}%` }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {latestModules.length > 1 && (
                                        <div className="carousel-indicators">
                                            {latestModules.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={`indicator ${index === currentModuleIndex ? 'active' : ''}`}
                                                    onClick={() => setCurrentModuleIndex(index)}
                                                    aria-label={`Go to module ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="empty-state">
                                <div className="empty-state-icon">📚</div>
                                <h3 className="empty-state-title">No Modules Yet</h3>
                                <p className="empty-state-description">Start your cybersecurity journey by enrolling in your first training module.</p>
                            </div>
                        )}
                    </div>
                </section>

                <section className="card challenges-card">
                    <div className="card-header">
                        <h2>Active Challenges</h2>
                        <button className="ghost-btn small" onClick={() => navigate('/challenge')}>View All</button>
                    </div>
                    {challenges.length > 0 ? (
                        <>
                            <div className="challenge-carousel">
                                <div className="carousel-track" style={{ transform: `translateX(-${currentChallengeIndex * 100}%)` }}>
                                    {challenges.map((challenge, index) => (
                                        <div key={index} className="carousel-slide" onClick={() => navigate(`/challenges`, { state: { challengeId: index } })}>
                                            <div className="carousel-challenge">
                                                <h3>{challenge.title}</h3>
                                                <div className="carousel-meta">
                                                    <span className={`challenge-tag difficulty-${challenge.difficulty.toLowerCase()}`}>{challenge.difficulty}</span>
                                                    <span className="orbs-reward">+{challenge.orbs} Orbs</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {challenges.length > 1 && (
                                <div className="carousel-indicators">
                                    {challenges.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`indicator ${index === currentChallengeIndex ? 'active' : ''}`}
                                            onClick={() => setCurrentChallengeIndex(index)}
                                            aria-label={`Go to challenge ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-state-icon">🧩</div>
                            <h3 className="empty-state-title">No Active Challenges</h3>
                            <p className="empty-state-description">Take on a new challenge to sharpen your skills and earn Orbs.</p>
                        </div>
                    )}
                </section>

                <section className="card leaderboard-card">
                    <div className="card-header">
                        <h2>Leaderboard</h2>
                    </div>
                    <div className="leaderboard-list">
                        {leaderboardDisplay.slice(0, 4).map((entry) => (
                            <div key={`${entry.rank}-${entry.name}`} className="leaderboard-entry">
                                <span className="leaderboard-rank">{entry.rank}</span>
                                <span className="leaderboard-name">{entry.name}</span>
                                <span className="leaderboard-score">{entry.score.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    <div className="leaderboard-current-user">
                        {leaderboardDisplay.slice(4, 5).map((entry) => (
                            <div key={`${entry.rank}-${entry.name}`} className="leaderboard-entry">
                                <span className="leaderboard-rank">{entry.rank}</span>
                                <span className="leaderboard-name">{entry.name}</span>
                                <span className="leaderboard-score">{entry.score.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="card completed-modules-card">
                    <div className="card-header">
                        <h2>Completed Modules</h2>
                    </div>
                    <div className="completed-modules-list">
                        {completedModules.length > 0 ? (
                            <ul className="completed-modules-ul">
                                {completedModules.map((module, idx) => (
                                    <li key={idx} className="completed-module-item">
                                        <div className="completed-module-title">{module.title}</div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="empty-state">
                                <div className="empty-state-icon">📚</div>
                                <h3 className="empty-state-title">No Modules Completed</h3>
                                <p className="empty-state-description">Complete your first module to see it here.</p>
                            </div>
                        )}
                    </div>
                </section>

                <section className="card activity-card">
                    <div className="card-header">
                        <h2>Recent Activity</h2>
                        <button className="ghost-btn small">See All</button>
                    </div>
                    {activity.length > 0 ? (
                        <ul className="activity-list">
                            {activity.slice(0, 5).map((item) => (
                                <li key={item.title}>
                                    <span className="activity-title">{item.title}</span>
                                    <span className="activity-time">{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-state-icon">📜</div>
                            <h3 className="empty-state-title">No Recent Activity</h3>
                            <p className="empty-state-description">Complete modules and challenges to see your activity here.</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Dashboard;