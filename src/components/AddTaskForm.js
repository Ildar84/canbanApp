import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import PriorityArea from './PriorityArea';

function getTextValue(task){
    return task?task.text:''
}

const AddTaskForm = ({editableTask, onSubmit, onCancelClick}) => {
    let task = editableTask;
    const addTask = onSubmit;
    return (
        <form
            onSubmit={(e)=>{
                e.preventDefault();
                const form = document.forms.addTask;
                let date = new Date().toLocaleString();
                let data = {
                    text: form.elements['text'].value,
                    priority: form.elements['priority'].value,
                    date: date,
                    phase: 'doit',
                    id: task?task.id:undefined
                }

                addTask(data); 
                }
            }
            className='addtask-dialog'
            name="addTask">
                <input
                    type="text"
                    placeholder="type your next task"
                    name="text"
                    autoComplete="off"
                    required
                    defaultValue={getTextValue(task)}
                />

                <PriorityArea priority={task?task.priority:undefined}/>
                <Button className="btn">OK</Button>
                <Button type="button" className="btn" onClick={onCancelClick}>Cancel</Button>

        </form>
    )
}

export default AddTaskForm;

AddTaskForm.propTypes = {
    editableTask: PropTypes.objectOf(PropTypes.string.isRequired),
    onSubmit: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired
}