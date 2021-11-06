import React, { useState } from 'react';
import './Singup.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});

const Singup = () => {

    state = {
        inputValue: ''
    }
    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }
    

    const { clickButton, newValue } = this.props;

    const { inputValue } = this.state;

    const [isActive, setIsActive] = useState(false);

    const [value, setValue] = useState('');

    function handleTextChange(text) {
        setValue(text);

        if (value !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    // function handleClick() {

    //     console.log("here")

    //     navigate.push("/main")
    // }

    return (
        <>
            <div className="singup">
                <div className="box">
                    <h3>Welcome to CodeLeap network!</h3>
                    <p>Please enter your username {newValue}</p>
                    <Input 
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

export default connect(mapStateToProps)(Singup);