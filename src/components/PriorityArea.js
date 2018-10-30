import React from 'react';
import PropTypes from 'prop-types';

const priorities = ['low','normal','high'];


const PriorityArea = ({data, priority, disabled}) => {
    return (
       
        <div className="radio-group">
            {priorities.map(item=>{
                return (
                    <label data={data} key={item}>
                        <input
                        disabled={disabled?disabled:false}
                        type="radio"
                        id={item}
                        name="priority"
                        value={item}
                        defaultChecked={checkDefaultRadio(item, priority)}/>
                            {item}
                    </label>
                )
            })}
        </div>
    )
}

export default PriorityArea;

function checkDefaultRadio(item, priority){
    if(!priority){
        return item==='normal'?true:false;
    }
    return priority===item?true:false;
}

PriorityArea.propTypes = {
    priority: PropTypes.oneOf(priorities),
    data: PropTypes.string,
    disabled: PropTypes.bool
}