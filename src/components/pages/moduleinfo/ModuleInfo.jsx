import './ModuleInfo.css';
import { useParams, useNavigate } from 'react-router-dom';

function ModuleInfo() {
    const { moduleId } = useParams();
    const navigate = useNavigate();

    // Placeholder data - will be replaced with actual data from backend
    const modules = [
        {
            id: 1,
            title: 'First Line of Defense',
            image: '/module1.png',
            description: 'Get started with cybersecurity fundamentals and essential concepts for protecting digital systems. This comprehensive module covers the core principles of cybersecurity and how to apply them in real-world scenarios. You will learn encryption methods, key management, and best practices for securing sensitive data against common threats.',
            difficulty: 'Beginner',
            totalLessons: 7,
            progress: 60,
            enrolled: true,
            lessons: [
                { id: 1, title: 'Introduction to Cybersecurity', completed: true, locked: false },
                { id: 2, title: 'Security Threats', completed: true, locked: false },
                { id: 3, title: 'Defense Mechanisms', completed: true, locked: false },
                { id: 4, title: 'Best Practices', completed: false, inProgress: true, locked: false },
                { id: 5, title: 'Risk Management', completed: false, locked: false },
                { id: 6, title: 'Security Standards', completed: false, locked: false },
                { id: 7, title: 'Practical Application', completed: false, locked: false },
            ]
        },
        {
            id: 2,
            title: 'Malware',
            image: '/module2.png',
            description: 'Learn how malware works and how to defend against common attack vectors. Discover the different types of malware threats including trojans, ransomware, and worms, and understand how attackers distribute them. You will develop practical strategies for detection, prevention, and response to malware incidents.',
            difficulty: 'Beginner',
            totalLessons: 6,
            progress: 0,
            enrolled: false,
            lessons: [
                { id: 1, title: 'Malware Basics', completed: false, locked: false },
                { id: 2, title: 'Trojan Horses', completed: false, locked: true },
                { id: 3, title: 'Ransomware', completed: false, locked: true },
                { id: 4, title: 'Worms and Bots', completed: false, locked: true },
                { id: 5, title: 'Detection and Response', completed: false, locked: true },
                { id: 6, title: 'Hardening Systems', completed: false, locked: true },
            ]
        },
        {
            id: 3,
            title: 'Social Engineering',
            image: '/module3.png',
            description: 'Understand the human element of cybersecurity and learn how attackers manipulate people to gain access to systems and sensitive information. Discover various social engineering tactics including phishing, pretexting, and manipulation techniques. You will develop practical strategies to recognize social engineering attacks and implement awareness programs to protect organizations from human-targeted threats.',
            difficulty: 'Beginner',
            totalLessons: 6,
            progress: 0,
            enrolled: false,
            lessons: [
                { id: 1, title: 'Social Engineering Basics', completed: false, locked: false },
                { id: 2, title: 'Phishing Attacks', completed: false, locked: true },
                { id: 3, title: 'Pretexting and Manipulation', completed: false, locked: true },
                { id: 4, title: 'Credential Harvesting', completed: false, locked: true },
                { id: 5, title: 'Insider Threats', completed: false, locked: true },
                { id: 6, title: 'Defense and Awareness', completed: false, locked: true },
            ]
        }
    ];

    const module = modules.find(item => String(item.id) === String(moduleId)) ?? modules[0];
    const lessons = module.lessons;

    const handleLessonClick = (lessonId, locked) => {
        if (!locked) {
            navigate(`/training/module/${moduleId}/lesson/${lessonId}`);
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Beginner': return '#4ade80';
            case 'Intermediate': return '#fbbf24';
            case 'Advanced': return '#f87171';
            default: return '#00d4ff';
        }
    };

    return (
        <div className="module-info">
            <button className="back-btn" onClick={() => navigate('/training')}>
                ← Back to Modules
            </button>

            <div className="module-header-section">
                <div className="module-image-large">
                    <img src={module.image} alt="" />
                </div>
                <div className="module-details">
                    <h1>{module.title}</h1>
                    <p className="module-description">{module.description}</p>
                    
                    <div className="module-stats">
                        <div className="stat-item">
                            <span 
                                className="difficulty-badge"
                                style={{ backgroundColor: getDifficultyColor(module.difficulty) }}
                            >
                                {module.difficulty}
                            </span>
                        </div>
                        <div className="stat-item">
                            <span className="lessons-count">📚 {module.totalLessons} Lessons</span>
                        </div>
                        <div className="stat-item">
                            <span className="progress-text">{module.progress}% Complete</span>
                        </div>
                    </div>

                    {module.enrolled && module.progress > 0 && (
                        <div className="module-progress-section">
                            <div className="progress-bar-large">
                                <div 
                                    className="progress-fill" 
                                    style={{ width: `${module.progress}%` }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="lessons-section">
                <h2>Lessons</h2>
                <div className="lessons-list">
                    {lessons.map((lesson, index) => (
                        <div 
                            key={lesson.id} 
                            className={`lesson-item ${lesson.completed ? 'completed' : ''} ${lesson.inProgress ? 'in-progress' : ''} ${lesson.locked ? 'locked' : ''}`}
                            onClick={() => handleLessonClick(lesson.id, lesson.locked)}
                        >
                            <div className="lesson-number">{index + 1}</div>
                            <div className="lesson-info">
                                <h3>{lesson.title}</h3>
                                {lesson.completed && <span className="status-badge completed">✓ Completed</span>}
                                {lesson.inProgress && <span className="status-badge in-progress">In Progress</span>}
                                {lesson.locked && <span className="status-badge locked">🔒 Locked</span>}
                            </div>
                            <div className="lesson-arrow">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ModuleInfo;
