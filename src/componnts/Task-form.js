import {React,useState} from 'react';

const TaskForm = (props) => {
    const [task, settask] = useState("");
    const handilesubmit = (e) => {
        e.preventDefault();
        props.addtask({
          id: Date.now(),
          title: task,
          completed: false,
        });
        settask("")
    }
    
    return (
      <>
        <form onSubmit={handilesubmit} className="form">
          <input
            onChange={(e) => {
              settask(e.target.value);
            }}
            type="text"
            className="input"
            value={task}
          />
          <input
            onSubmit={handilesubmit}
            type="submit"
            className="add"
            value="Add Task"
          />
        </form>
        {props.tasks.length?<div className="form">
          <button onClick={props.clearAll} className="clear">
            clear all
          </button>
          <span className="info">Number Tasks : {props.tasks.length}</span>
          <span className="info">
            Completed Tasks : {props.nocomplet.length}
          </span>
        </div>:null}
        
      </>
    );
}

export default TaskForm;