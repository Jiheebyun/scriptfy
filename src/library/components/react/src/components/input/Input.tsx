import React from "react";
import "./input.scss";


const Input = ({

}) => {
    return (
        <>
             <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Username"/>
            </div>
        </>
    )
}

export default Input

// placeholder, size, disable, required, type, background