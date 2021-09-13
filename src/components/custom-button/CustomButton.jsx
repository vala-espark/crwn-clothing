import React from 'react'

const CustomButton = ({ children, isGoogleSignIn, btnBorder, ...otherProps }) => {
    return (
        <>
            <button className={`${isGoogleSignIn ? 'isGoogleSignIn' : ''} ${btnBorder ? 'btnBorder' : ''}  btn`} {...otherProps}>
                {children}
            </button>
        </>
    )
}

export default CustomButton;
