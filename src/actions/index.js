import * as types from '../constants/ActionTypes';

export function addTask(data) {
  return [
    {
      type: types.ADD_TASK,
      task: data
    },
    {
      type: types.CLOSE_MODAL
    },
    {
      type: types.EDIT_TASK,
      id: ''
    }
  ]
}

export function moveTask(id, abort = false){
  return {
    type: types.MOVE_TASK,
    id: id,
    abort: abort
  }
}

export function showModal() {
  return {
    type: types.SHOW_MODAL,
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  }
}

export function editTask(id) {
  return [
    {
      type: types.EDIT_TASK,
      id: id
    },
    {
      type: types.SHOW_MODAL
    }
  ]
}

export function deleteTask(id) {
  return {
    type: types.DEL_TASK,
    id: id,
  }
}