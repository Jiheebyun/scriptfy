import React from "react";
import "./input.scss";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string,
    type?: string,


}

const SfInput: React.FC<InputProps> = ({
    type = "text",
    placeholder,

}) => {
    return (
        <>
             <div className="input-group">
                <i className='bx bxs-user'></i>
                <input 
                    type={type} 
                    placeholder={placeholder}

                />
            </div>
        </>
    )
}

export default SfInput

// placeholder, size, disable, required, type, background, onChange,
