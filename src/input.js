import React  from "react";
import './App.css';
const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="input-blocks">
    {label && <label className="label-header" htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;