import './Lesson.css';
import { useParams, useNavigate } from 'react-router-dom';

function Lesson() {
    const { moduleId, lessonId } = useParams();
    const navigate = useNavigate();

    // Placeholder data - will be replaced with actual data from backend
    const lesson = {
        id: lessonId,
        title: 'Hash Functions',
        moduleTitle: 'First Line of Defense',
        content: 'This is a placeholder for lesson content. Actual lesson content, interactive elements, code examples, and exercises will be implemented here.',
        estimatedTime: '15 min',
        completed: false
    };

    const handleMarkComplete = () => {
        // TODO: API call to mark lesson as complete
        navigate(`/training/module/${moduleId}`);
    };

    const handleNextLesson = () => {
        // TODO: Navigate to next lesson
        const nextLessonId = parseInt(lessonId) + 1;
        navigate(`/training/module/${moduleId}/lesson/${nextLessonId}`);
    };

    return (
        <div className="lesson">
            <div className="lesson-header">
                <button className="back-btn" onClick={() => navigate(`/training/module/${moduleId}`)}>
                    ← Back to Module
                </button>
                
                <div className="lesson-breadcrumb">
                    <span className="breadcrumb-module">{lesson.moduleTitle}</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-lesson">Lesson {lessonId}</span>
                </div>

                <h1>{lesson.title}</h1>
                <div className="lesson-meta">
                    <span className="meta-item">⏱️ {lesson.estimatedTime}</span>
                    {lesson.completed && <span className="meta-item completed-badge">✓ Completed</span>}
                </div>
            </div>

            <div className="lesson-content">
                <div className="content-card">
                    <h2>Lesson Overview</h2>
                    <p>{lesson.content}</p>
                    
                    <div className="placeholder-notice">
                        <div className="notice-icon">🚧</div>
                        <div className="notice-content">
                            <h3>Lesson Content Coming Soon</h3>
                            <p>This is a placeholder page. Interactive lesson content, videos, code examples, and exercises will be added here.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lesson-actions">
                <button className="secondary-btn" onClick={() => navigate(`/training/module/${moduleId}`)}>
                    Back to Lessons
                </button>
                <div className="action-right">
                    <button className="primary-btn" onClick={handleMarkComplete}>
                        Mark as Complete
                    </button>
                    <button className="primary-btn" onClick={handleNextLesson}>
                        Next Lesson →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Lesson;
