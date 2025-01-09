import { Todo } from '../../interface/Todo';
import './TodoCard.css';

const TodoCard= ({title, description, status, onStatusChange}: Todo) => {
    return (
        <div className={`todo-card ${status ? 'completed' : 'incomplete'}`}>
            <h3 className="todo-card-title">{title}</h3>
            <p className="todo-card-description">{description}</p>
            <label className="todo-card-label">
                <input 
                    type="checkbox" 
                    checked={status} 
                    onChange={(e) => onStatusChange(e.target.checked)} 
                    className="todo-card-checkbox" 
                />
                Completed
            </label>
        </div>
    );
};

export default TodoCard;