import React from 'react';
import PropTypes from 'prop-types';
const Button = (props)=>{
    return (
        <button className={props.className} type={props.type} onClick={props.onClick}>{props.children}</button>
    )
};

export default Button;

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node,
    type: PropTypes.string
}