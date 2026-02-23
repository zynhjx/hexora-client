import './Leaderboard.css';
import { useState } from 'react';

function Leaderboard() {
    const [selectedTimePeriod, setSelectedTimePeriod] = useState('All Time');
    const [selectedCategory, setSelectedCategory] = useState('Overall');

    const timePeriods = ['All Time', 'This Month', 'This Week'];
    const categories = ['Overall', 'Challenges', 'Training', 'Cryptography', 'Network Security'];

    const leaderboardData = [
        {
            rank: 1,
            userId: 'user_001',
            name: 'Cipher Master',

            points: 12500,
            level: 25,
            challenges: 48,
            modules: 42,
            streak: 32
        },
        {
            rank: 2,
            userId: 'user_002',
            name: 'Network Guardian',

            points: 11800,
            level: 24,
            challenges: 45,
            modules: 38,
            streak: 28
        },
        {
            rank: 3,
            userId: 'user_003',
            name: 'Security Sentinel',

            points: 11200,
            level: 23,
            challenges: 42,
            modules: 40,
            streak: 25
        },
        {
            rank: 4,
            userId: 'user_004',
            name: 'Exploit Engineer',

            points: 10950,
            level: 22,
            challenges: 41,
            modules: 36,
            streak: 22
        },
        {
            rank: 5,
            userId: 'user_005',
            name: 'Threat Analyst',

            points: 10500,
            level: 21,
            challenges: 39,
            modules: 35,
            streak: 19
        },
        {
            rank: 6,
            userId: 'user_006',
            name: 'Code Breaker',

            points: 9800,
            level: 20,
            challenges: 36,
            modules: 33,
            streak: 18
        },
        {
            rank: 7,
            userId: 'user_007',
            name: 'Packet Sniffer',

            points: 9200,
            level: 19,
            challenges: 33,
            modules: 31,
            streak: 15
        },
        {
            rank: 8,
            userId: 'user_008',
            name: 'Reverse Engineer',

            points: 8750,
            level: 18,
            challenges: 31,
            modules: 29,
            streak: 12
        },
        {
            rank: 9,
            userId: 'user_009',
            name: 'Forensic Pro',

            points: 8200,
            level: 17,
            challenges: 28,
            modules: 27,
            streak: 10
        },
        {
            rank: 10,
            userId: 'user_010',
            name: 'System Admin',

            points: 7600,
            level: 16,
            challenges: 25,
            modules: 24,
            streak: 8
        },
        {
            rank: 11,
            userId: 'user_011',
            name: 'Bug Hunter',

            points: 7100,
            level: 15,
            challenges: 22,
            modules: 22,
            streak: 6
        },
        {
            rank: 12,
            userId: 'user_012',
            name: 'Secure Dev',

            points: 6500,
            level: 14,
            challenges: 19,
            modules: 20,
            streak: 4
        }
    ];

    const currentUserRank = 12;
    const currentUser = leaderboardData.find(u => u.rank === currentUserRank);

    const getRankMedal = (rank) => {
        switch(rank) {
            case 1: return '🥇';
            case 2: return '🥈';
            case 3: return '🥉';
            default: return null;
        }
    };

    // const stats = {
    //     totalUsers: 5420,
    //     activeThisWeek: 1280,
    //     avgPoints: Math.floor(leaderboardData.reduce((acc, u) => acc + u.points, 0) / leaderboardData.length)
    // };

    return (
        <div className="leaderboard">
            <div className="leaderboard-header">
                <div>
                    <h1>Leaderboard</h1>
                    <p className="leaderboard-subtitle">Compete with other cybersecurity enthusiasts</p>
                </div>
                
            </div>

            

            {currentUser && (
                <div className="user-position-card">
                    <div className="position-label">Your Position</div>
                    <div className="position-content">
                        <div className="position-rank">
                            <span className="rank-number">#{currentUser.rank}</span>
                        </div>
                        <div className="position-info">
                            <span className="position-name">{currentUser.name}</span>
                            <span className="position-points">{currentUser.points.toLocaleString()} Points</span>
                        </div>
                        <div className="position-stats">
                            <div>
                                <span className="pos-label">Level</span>
                                <span className="pos-value">{currentUser.level}</span>
                            </div>
                            <div>
                                <span className="pos-label">Streak</span>
                                <span className="pos-value">{currentUser.streak}d</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="ranking-table">
                <div className="table-header">
                    <div className="col-rank">Rank</div>
                    <div className="col-user">User</div>
                    <div className="col-level">Level</div>
                    <div className="col-challenges">Attempts</div>
                    <div className="col-points">Points</div>
                </div>

                <div className="table-body">
                    {leaderboardData.map((user) => (
                        <div key={user.userId} className={`table-row ${user.rank <= 3 ? 'top-rank' : ''} ${user.rank === currentUserRank ? 'current-user' : ''}`}>
                            <div className="col-rank">
                                <div className="rank-badge">
                                    {getRankMedal(user.rank)}
                                    <span>{user.rank}</span>
                                </div>
                            </div>
                            <div className="col-user">
                                <div className="user-info">
                                    <span className="user-name">{user.name}</span>
                                </div>
                            </div>
                            <div className="col-level">
                                <span className="level-badge">{user.level}</span>
                            </div>
                            <div className="col-challenges">
                                <span>{user.challenges}</span>
                            </div>
                            {/* <div className="col-modules">
                                <span>{user.modules}</span>
                            </div> */}
                            <div className="col-points">
                                <span className="points-value">{user.points.toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;