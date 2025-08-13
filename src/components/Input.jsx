import React from 'react';

import "../styles/Contact.css"; // Assuming you have a CSS file for styles

const Input = ({
  id,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  as = "input",
}) => {
  const commonProps = {
    id,
    name,
    placeholder,
    value,
    onChange,
    required,
    className: "input-contact",

  };

  return (
    <div className='row'>
      <label htmlFor={id} className="label-contact">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea rows={4} {...commonProps} />
      ) : (
        <input type={type} {...commonProps} />
      )}
    </div>
  );
};
export default Input;