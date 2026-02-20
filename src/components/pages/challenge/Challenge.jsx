import './Challenge.css';
import '../../shared/sharedFilterStyle.css'
import { useState } from 'react';

function Challenge() {
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
            status: 'Available',
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
        {
            id: 2,
            title: '4 pics 1 word',
            image: '/empty.png',
            difficulty: 'Easy',
            reward: 100,
            status: 'Available',
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
        {
            id: 3,
            title: 'Spot the Phish',
            image: '/empty.png',
            difficulty: 'Easy',
            reward: 100,
            status: 'Available',
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
        {
            id: 4,
            title: 'Spot the Phish',
            image: '/empty.png',
            difficulty: 'Easy',
            reward: 100,
            status: 'Available',
            description: 'Analyze suspicious emails and identify phishing indicators before they reach users.',
            timeLimit: '5 minutes'
        },
       
    ];

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
                {filteredChallenges.map(challenge => (
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
                            
                            <button className="challenge-btn">
                                {challenge.status === 'In Progress' ? 'Continue' : challenge.status === 'Completed' ? 'Review' : 'Start'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Challenge;