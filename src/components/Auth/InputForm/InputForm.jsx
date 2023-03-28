import React from "react";

const InputForm = ({
  required = false,

  label,
  name,
  placeholder,
  type = "text",
  handleChange,
}) => {
  return (
    <div className="auth__form-container_fields-content_input">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        required={required}
      ></input>
    </div>
  );
};

export default InputForm;
