import React from 'react';

const TasksItem = (props) => {
    return (
      <div className='box'>
        <div
          onClick={() => {
            props.done(props.tasks.id);
          }}
          className={props.tasks.completed ? "task done" : "task"}
        >
          {props.tasks.title}
        </div>
        <span onClick={props.onDelete} className="add">
          Delete
        </span>
      </div>
    );
}

export default TasksItem;
