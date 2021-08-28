import React from 'react';

import './style.css';

const Task = ({ task }) => {
    return <div className='task-container'>{task.title}</div>
}

export default Task;