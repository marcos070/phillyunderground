import React from 'react';

const NumberField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        type='number'
        step='0.01'
        value={props.content}
        onChange={props.onChange}
      />
    </label>
  );
}

export default NumberField;
