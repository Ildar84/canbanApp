import React from 'react';
import PropTypes from 'prop-types';
import AddTaskForm from './AddTaskForm';
import ColumnContainer from '../containers/ColumnContainer';
import TaskCardContainer from '../containers/TaskCardContainer';

export default function MainBoard({modalVisibility, editableTask, onAddTask, onCancelClick}) {
    return (
        <div className="container">
            <section className="board">
                {modalVisibility === true &&
                    <AddTaskForm
                        onCancelClick={onCancelClick}
                        editableTask={editableTask}
                        onSubmit = {(data)=>onAddTask(data)}/>}
                <ColumnContainer>
                    <TaskCardContainer />
                </ColumnContainer>
            </section>
        </div>
    )
}

MainBoard.propTypes = {
    modalVisibility: PropTypes.bool.isRequired,
    editableTask: PropTypes.objectOf(PropTypes.string),
    onAddTask: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired
}
