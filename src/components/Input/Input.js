import React from 'react'
import './Input.css'

const Input = (props) => {

    return (

        <div  id="float-label">
            <input className="Input" 
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

export default Input