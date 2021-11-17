import React, { useState } from 'react';
import './Singup.css';
import InputSingup from '../../components/InputSingup/InputSingup';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../redux/user';

const Singup = () => {
    
    const [isActive, setIsActive] = useState(false);

    const [value, setValue] = useState('');

    let { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    function handleTextChange(text) {
        setValue(text);

        if (value !== '') {
            setIsActive(true);
            dispatch(userLogin({user: value}))
        } else {
            setIsActive(false);
        }
    }

    return (
        <>
            <div className="singup">
                <div className="box">
                    <h3>Welcome to CodeLeap network!</h3>
                    <p>Please enter your username</p>
                    <InputSingup 
                        placeholder="John doe" 
                        onChange={(e) => handleTextChange(e.target.value)} 
                        value={value}
                        isActive={isActive}
                    />
                    <div id="btn">
                        {isActive ? (
                        <Link to="/main">
                            <Button >ENTER</Button>
                        </Link>)
                        : 
                        (<Button type={"disable"}>ENTER</Button>
                        )
                        }                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singup