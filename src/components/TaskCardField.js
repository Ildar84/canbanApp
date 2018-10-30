import React from 'react';
import Button from './Button';
import { PropTypes } from 'prop-types';
import PriorityArea from './PriorityArea';

const TaskCardField = ({ tasks, onEditClick, onDelClick, onMoveClick, addTask }) => {

  let getId = (event) => event.target.parentElement.getAttribute('data');
  return tasks.map((task) => {
    const btnEdit = task.phase === 'doit' ?
      <Button
        className="btn"
        onClick={(e) => { const id = getId(e); onEditClick(id) }}
      > Edit </Button>
      :
      <Button className="btn disabled" >Edit</Button>;

    const btnNext = task.phase === 'done' || task.phase === 'aborted' ?
      <Button className="btn disabled">Next phase</Button>
      :
      <Button onClick={(e) => {
        const id = getId(e);
        onMoveClick(id)
      }}
        className="btn">
        Next phase
        </Button>

    const btnDel = task.phase === "done" || task.phase === "aborted" ?
      <Button onClick={(e) => {
        const id = getId(e);
        onDelClick(id);
      }}
        className="btn btn-del">
        &#128465;
        </Button>
      :
      null

    

    const btnAbort = task.phase === 'doit' || task.phase === 'doing' ?
      <Button onClick={(e) => {
        const id = getId(e);
        onMoveClick(id, true);
      }} className="btn">Abort</Button>
      :
      <Button className="btn disabled">Abort</Button>


    // function to change task priority
    const onChangeRadio = (e) => {
      const id = getId(e);
      const elemCard = document.getElementById(id)
      const newPriority = elemCard.children[1].children[0].elements['priority'].value
      let data = {
        priority: newPriority,
        id: id,
      }
      addTask(data);
    };

    const radioGroup = task.phase === 'doit' || task.phase === 'doing' ?
      <form onChange={onChangeRadio} name={"card-radio"}>
        <PriorityArea data={task.id} priority={task.priority} />
      </form>
      :
      <form onChange={onChangeRadio} name={"card-radio"}>
        <PriorityArea disabled={true} priority={task.priority} />
      </form>








    return (
      <div id={task.id} key={task.id} className={'task-card '.concat('clr-', task.priority)}>

        <h3 className="card-text">
          <span>{task.text}</span>
        </h3>

        <div className="card-body">

          {radioGroup}
          <span className="task-priority">Priority: {task.priority}</span>
          <br />
          <span>{task.date}</span>
          <div data={task.id} className="btn-group">
            {btnEdit}
            {btnNext}
            {btnAbort}
            {btnDel}
          </div>
        </div>
      </div>
    )
  }
  )
}

export default TaskCardField;

TaskCardField.propTypes = {
  tasks: PropTypes.array,
  onEditClick: PropTypes.func.isRequired,
  onDelClick: PropTypes.func.isRequired,
  onMoveClick: PropTypes.func.isRequired,
  addTask: PropTypes.func
}
