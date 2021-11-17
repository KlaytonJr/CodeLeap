import React from 'react'
import './InputSingup.css'

const InputSingup = (props) => {

    return (

        <div  id="float-label">
            <input className="InputSingup" 
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
            <label className={ props.isActive ? "active" : ""} htmlFor="email">
                {props.children}
            </label>
        </div>
    )
}

export default InputSingup