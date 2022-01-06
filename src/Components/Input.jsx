import React from 'react';
import Style from './Input.module.css';

const Input = ({ label, placeholder }) => (
    <>
        {label ? <label>{label}</label> : ''}
        <input className={Style.inputField} placeholder={placeholder} />
    </>
);

export default Input;