import React from 'react';
import Style from './Input.module.css';

const Input = ({ label, placeholderTxt }) => (
    <>
        {label ? <label>{label}</label> : ''}
        <input className={Style.inputField} placeholder={placeholderTxt} />
    </>
);

export default Input;