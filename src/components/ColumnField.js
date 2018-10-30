import React from 'react';
import { PropTypes } from 'prop-types';
import ButtonAddTask from './Button';


const ColumnField = ({children, phases, onShowModalClick})=>{
  return (
    phases.map((phase)=>(
      <div key={phase} className={'board__column board__column-'+phase}>
      <h2 className="column-header">
      {phase}
      </h2>
      { phase === 'doit' && <ButtonAddTask className="buttonAddTask" onClick={onShowModalClick}>Add new Task</ButtonAddTask>}
        { React.cloneElement(children, {phase}) }
      </div>
    ))
  )
}

export default ColumnField;

ColumnField.propTypes = {
  phases: PropTypes.array.isRequired,
  onShowModalClick: PropTypes.func.isRequired,
  children: PropTypes.node
}
