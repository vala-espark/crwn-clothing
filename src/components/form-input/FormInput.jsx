import React from 'react'

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <>
            <input type="form-input" onChange={handleChange} {...otherProps} />
            {
                label ? (
                    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input`}>
                        {label}
                    </label>
                ) : null
            }
        </>
    )
}

export default FormInput;
