import React from 'react';

const InputField = ({
    type,
    value, 
    placeholder,
    onChange,
    errorMessage
}) => {
    return(
        <>
            <input type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}></input>
            <div>{errorMessage}</div>
        </>
    );
}

export default InputField;