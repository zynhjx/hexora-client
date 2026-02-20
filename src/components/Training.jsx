import './Training.css';
import './sharedFilterStyle.css'
import { useState } from 'react';
import { useNavigate, useSearchParams, useOutletContext } from 'react-router-dom';

function Training() {
    const navigate = useNavigate();
    const { sidebarOpen } = useOutletContext();
    const [searchParams] = useSearchParams();
    const filterParam = searchParams.get('filter');
    
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState(filterParam || 'All');
    const [searchTerm, setSearchTerm] = useState('');

    const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
    const statusFilters = ['All', 'Owned', 'Available', 'In Progress', 'Not Owned'];

    const user = {
        rank: 'Observer',
        level: 1,
        exp: 0,
        points: 0
    };

    const modules = [
        {
            id: 1,
            title: 'Intro to Cybersecurity',
            image: "/module1.png",
            description: 'Get started with cybersecurity fundamentals and essential concepts for protecting digital systems.',
            difficulty: 'Beginner',
            lessons: 7,
            levelRequired: 1,
            progress: 60,
            enrolled: true
        },
        {
            id: 2,
            title: 'Malware',
            image: "/module2.png",
            description: 'Get started with cybersecurity fundamentals and essential concepts for protecting digital systems.',
            difficulty: 'Beginner',
            lessons: 6,
            levelRequired: 1,
            progress: 0,
            enrolled: false
        },
        {
            id: 3,
            title: 'Social Engineering',
            image: "/module3.png",
            description: 'Understand the human element of cybersecurity and learn how attackers manipulate people to gain access to systems and sensitive information.',
            difficulty: 'Beginner',
            lessons: 6,
            levelRequired: 1,
            progress: 0,
            enrolled: false
        },
        {
            id: 4,
            title: 'Wala pa po laman',
            image: "/empty.png",
            description: 'Get started with cybersecurity fundamentals and essential concepts for protecting digital systems.',
            difficulty: 'Intermediate',
            lessons: 7,
            levelRequired: 5,
            progress: 0,
            enrolled: false
        },
        {
            id: 5,
            title: 'Wala pa nga po',
            image: "/empty.png",
            description: 'Get started with cybersecurity fundamentals and essential concepts for protecting digital systems.',
            difficulty: 'Intermediate',
            lessons: 7,
            levelRequired: 5,
            progress: 0,
            enrolled: false
        },
        {
            id: 6,
            title: 'Wala pa ngane',
            image: "/empty.png",
            description: 'Get started with cybersecurity fundamentals and essential concepts for protecting digital systems.',
            difficulty: 'Advanced',
            lessons: 7,
            levelRequired: 10,
            progress: 0,
            enrolled: false
        },
        
    ];

    const canUnlockModule = (module) => {
        return user.level >= module.levelRequired;
    };

    const filteredModules = modules.filter(m => {
        const difficultyMatch = selectedDifficulty === 'All' || m.difficulty === selectedDifficulty;
        const statusMatch = 
            selectedStatus === 'All' ? true :
            selectedStatus === 'Owned' ? m.enrolled :
            selectedStatus === 'Available' ? m.enrolled || canUnlockModule(m) :
            selectedStatus === 'In Progress' ? m.enrolled && m.progress > 0 && m.progress < 100 :
            selectedStatus === 'Not Owned' ? !m.enrolled : true;
        const searchMatch = m.title.toLowerCase().includes(searchTerm.toLowerCase());
        return difficultyMatch && statusMatch && searchMatch;
    });

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Beginner': return '#4ade80';
            case 'Intermediate': return '#fbbf24';
            case 'Advanced': return '#f87171';
            default: return '#00d4ff';
        }
    };


    const getModulePrice = (difficulty) => {
        switch(difficulty) {
            case 'Beginner': return 50;
            case 'Intermediate': return 100;
            case 'Advanced': return 200;
            default: return 0;
        }
    };

    return (
        <div className={`training ${!sidebarOpen ? 'training--expanded' : ''}`}>
            <div className="training-header">
                <div>
                    <h1>Training Modules</h1>
                    <p className="training-subtitle">Master cybersecurity through interactive learning</p>
                </div>
               
            </div>

            <div className="filters-container">
                <div className="filter-group">
                    <div className="category-filter">
                        {statusFilters.map(status => (
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

            <div className="training-searchbar-container">
                <input
                    className="training-searchbar"
                    type="text"
                    placeholder="Search modules..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="modules-grid">
                {filteredModules.map(module => {
                    const isLocked = !module.enrolled && !canUnlockModule(module);

                    return (
                    <div 
                        key={module.id} 
                        className="module-card"
                        onClick={() => {
                            if (!isLocked) {
                                navigate(`/training/module/${module.id}`);
                            }
                        }}
                    >
                        <div className="module-image">
                            <img src={module.image} alt="" />
                        </div>
                        <div className="module-content">
                            <h3 className="module-title">{module.title}</h3>
                            <div className="module-meta">
                                <span 
                                    className="difficulty-badge"
                                    style={{ backgroundColor: getDifficultyColor(module.difficulty) }}
                                >
                                    {module.difficulty}
                                </span>
                                <span className="lessons-badge">📚 {module.lessons} lessons</span>
                            </div>
                            {module.enrolled && module.progress > 0 && (
                                <div className="module-progress">
                                    <div className="progress-bar">
                                        <div 
                                            className="progress-fill" 
                                            style={{ width: `${module.progress}%` }}
                                        />
                                    </div>
                                </div>
                            )}
                            <button 
                                className={module.enrolled ? 'primary-btn' : 'secondary-btn'}
                                disabled={isLocked || (module.enrolled && module.progress === 100)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isLocked) {
                                        return;
                                    }
                                    if (module.enrolled && module.progress > 0) {
                                        // Navigate to the lesson in progress (placeholder: lesson 4)
                                        navigate(`/training/module/${module.id}/lesson/4`);
                                    } else if (module.enrolled) {
                                        // Start from first lesson
                                        navigate(`/training/module/${module.id}/lesson/1`);
                                    } else {
                                        // Handle unlock logic (future implementation)
                                        console.log('Unlock module');
                                    }
                                }}
                            >
                                {module.enrolled ? (module.progress > 0 ? 'Continue' : 'Start') : isLocked ? `Locked (Level ${module.levelRequired} required)` : `Unlock • ${getModulePrice(module.difficulty)} Orbs`}
                            </button>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Training;