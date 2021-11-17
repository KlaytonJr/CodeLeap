import React from 'react'
import './Button.css';

const Button = (props) => {
    return (
        <div>
            <button 
                className={`Button ${props.type}`} 
            >{props.children}</button>
        </div>
    )
}

export default Button;