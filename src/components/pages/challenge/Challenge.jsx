import './Challenge.css';
import '../../shared/sharedFilterStyle.css'
import { useState } from 'react';

function Challenge() {
        // Price per entry for each difficulty
        const difficultyPrice = {
            Easy: 20,
            Medium: 30,
            Hard: 40,
            Expert: 50
        };
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const difficulties = ['All', 'Easy', 'Medium', 'Hard', 'Expert'];
    const statuses = ['All', 'Available', 'In Progress', 'Completed'];

    const challenges = [
        {
            id: 1,
            title: 'Spot the Phish',
            image: '/challenge1.png',
            difficulty: 'Easy',
            reward: 100,
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
        {
            id: 2,
            title: '4 pics 1 word',
            image: '/empty.png',
            difficulty: 'Easy',
            reward: 100,
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
        {
            id: 3,
            title: 'Coming Soon',
            image: '/empty.png',
            difficulty: 'Easy',
            reward: 100,
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
        {
            id: 4,
            title: 'Coming Soon',
            image: '/empty.png',
            difficulty: 'Medium',
            reward: 100,
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
        {
            id: 5,
            title: 'Coming Soon',
            image: '/empty.png',
            difficulty: 'Medium',
            reward: 100,
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
        {
            id: 6,
            title: 'Coming Soon',
            image: '/empty.png',
            difficulty: 'Hard',
            reward: 100,
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
    ];
    // User mock (should be replaced with actual user context)
    const user = { level: 1 };

    // Level requirements for each difficulty
    const difficultyLevelReq = {
        Easy: 1,
        Medium: 3,
        Hard: 7,
        Expert: 12
    };

    // Check if user can enter challenge
    const canEnterChallenge = (challenge) => {
        const req = difficultyLevelReq[challenge.difficulty] || 1;
        return user.level >= req;
    };

    const filteredChallenges = challenges.filter(c => {
        const difficultyMatch = selectedDifficulty === 'All' || c.difficulty === selectedDifficulty;
        const statusMatch = selectedStatus === 'All' || c.status === selectedStatus;
        const searchMatch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
        return difficultyMatch && statusMatch && searchMatch;
    });

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Easy': return '#4ade80';
            case 'Medium': return '#fbbf24';
            case 'Hard': return '#f87171';
            case 'Expert': return '#c084fc';
            default: return '#00d4ff';
        }
    };

   

    return (
        <div className="challenge">
            <div className="challenge-header">
                <div>
                    <h1>Challenges</h1>
                    <p className="challenge-subtitle">Test your skills and earn rewards</p>
                </div>
                
            </div>

            <div className="filters-container">
                <div className="filter-group">
                    <div className="category-filter">
                        {statuses.map(status => (
                            <button
                                key={status}
                                className={`filter-btn ${selectedStatus === status ? 'active' : ''}`}
                                onClick={() => setSelectedStatus(status)}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="filter-group">
                    <div className="category-filter">
                        {difficulties.map(difficulty => (
                            <button
                                key={difficulty}
                                className={`filter-btn ${selectedDifficulty === difficulty ? 'active' : ''}`}
                                onClick={() => setSelectedDifficulty(difficulty)}
                            >
                                {difficulty}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="challenge-searchbar-container">
                <input
                    className="challenge-searchbar"
                    type="text"
                    placeholder="Search challenges..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    autoComplete="off"
                />
            </div>

            <div className="challenges-grid">
                {filteredChallenges.map(challenge => {
                    const canEnter = canEnterChallenge(challenge);
                    return (
                        <div key={challenge.id} className="challenge-card">
                            <div className="challenge-image">
                                <img src={challenge.image} alt="" />
                            </div>
                            <div className="challenge-content">
                                <h3 className="challenge-title">{challenge.title}</h3>
                                <div className="challenge-meta-top">
                                    <span 
                                        className="difficulty-badge"
                                        style={{ backgroundColor: getDifficultyColor(challenge.difficulty) }}
                                    >
                                        {challenge.difficulty}
                                    </span>
                                    <span className="time-badge">⏱️ {challenge.timeLimit}</span>
                                    <span className="reward-badge">+ {challenge.reward} Points</span>
                                </div>
                                <button 
                                    className='challenge-btn'
                                    disabled={!canEnter}
                                >
                                    {!canEnter ? `Locked (Level ${difficultyLevelReq[challenge.difficulty]} required)` : (
                                        <span className="challenge-btn-content">
                                            <img src="/icons/orb.svg" alt="orb" className="challenge-btn-orb" />
                                            <span>{difficultyPrice[challenge.difficulty] || 20} to Enter</span>
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Challenge;