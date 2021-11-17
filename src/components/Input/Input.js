import React from 'react'
import './Input.css'

const Input = (props) => {

    return (

        <div  id="input">
            <label>
                {props.children}
            </label>
            {props.size ? 
            (<textarea
                className={`${props.size}`}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />)
            : 
            (<input
                className={`${props.size}`}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />)}
            
        </div>
    )
}

export default Input