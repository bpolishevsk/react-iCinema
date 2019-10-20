import React from 'react';
import './style.css';

const Input = ({ name, label, error, iconClass, ...rest }) => {
  return ( 
    <div className="input-container">
      <label> {label} </label>
      {iconClass && <div className={`input-icon ${iconClass}`}/> }
      <input id="input" name={name} {...rest} />
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
}
 
export default Input;