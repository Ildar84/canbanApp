import { combineReducers } from 'redux';
import {
  ADD_TASK,
  MOVE_TASK,
  EDIT_TASK,
  CLOSE_MODAL,
  SHOW_MODAL,
  DEL_TASK
} from '../constants/ActionTypes'

const phases = ['doit', 'doing', 'done'];

function makeUniqueId(checkInCollection) {
  let id = Math.random().toString().substr(2, 4);
  if (checkInCollection[id]) makeUniqueId(checkInCollection);
  else return id;
}

function tasks(state = {}, action) {
  switch (action.type) {
    // add new task
    case ADD_TASK:

                                        // if action.task is existed changed task
      if (state[action.task.id]) {
        const oldTask = state[action.task.id];
        let changedTasks = Object.assign({}, state.tasks, {
          [action.task.id]: {
            text: action.task.text || oldTask.text,
            priority: action.task.priority,
            date: oldTask.date,
            phase: oldTask.phase
          }
        });
        return Object.assign({}, state, changedTasks);
      }
                                        // else if action.task is new task
      const taskId = makeUniqueId(state);
      let newState = Object.assign({}, state, Object.assign({}, state, { [taskId]: action.task }))
      return newState;
    // delete task
    case DEL_TASK:
      const newCollection = Object.keys(state).reduce((object, key) => {
        if (key !== action.id) {
          object[key] = state[key]
        }
        return object
      }, {});
      return newCollection;
    // move task to the next phase
    case MOVE_TASK:
      let curPhase = state[action.id].phase;
      if(action.abort) return Object.assign({}, state, {[action.id]: {
        text: state[action.id].text,
        priority: state[action.id].priority,
        date: state[action.id].date,
        phase: 'aborted'
      }});

      let nextPhase = phases.findIndex((item)=>{
        return item === curPhase;
      })+1;
      return Object.assign({}, state, {[action.id]: {
        text: state[action.id].text,
        priority: state[action.id].priority,
        date: state[action.id].date,
        editable: false,
        phase: phases[nextPhase]
      }})
    default:
      return state
  }
}

function editableTask(state = '', action) {
  switch (action.type) {
    // pass current editable task in state to render it in Modal Form
    case EDIT_TASK:
      return action.id;
    default:
      return state;
  }

}

function modalShow(state = false, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return false;
    case SHOW_MODAL:
      return true;
    default:
      return state;
  }
}

const canbanApp = combineReducers({
  tasks,
  editableTask,
  modalShow
})

export default canbanApp