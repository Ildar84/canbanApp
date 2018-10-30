import { connect } from 'react-redux'
import { editTask, deleteTask, moveTask, addTask } from '../actions'
import TaskCardField from '../components/TaskCardField';

const getCurrentTasks = (state, ownProps) => {
    let tasks = [];
    for (let key in state.tasks) {
        if (state.tasks[key].phase === ownProps.phase) {
            let task = state.tasks[key]
            task.id = key
            tasks.push(task)
        }
    }
    
    tasks.sort((a, b) => {
        let aTime = new Date(a.date);
        let bTime = new Date(b.date);
        let priority1 = a.priority === "high"? 2: a.priority === "normal"? 1: 0;
        let priority2 = b.priority === "high"? 2: b.priority === "normal"? 1: 0;
        return (priority1 < priority2) - (priority1 > priority2) || (bTime > aTime) - (aTime > bTime);
    })
   
    return tasks;
}

const getVisibility = (state) => {
    return state.showModal;
}

const mapStateToProps = (state, ownProps) => ({
    tasks: getCurrentTasks(state, ownProps),
    modalVisibility: getVisibility(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        onEditClick: (data) => dispatch(editTask(data)),
        onDelClick: (id) => dispatch(deleteTask(id)),
        onMoveClick: (id, abort) => dispatch(moveTask(id, abort)),
        addTask: (id) => dispatch(addTask(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskCardField)