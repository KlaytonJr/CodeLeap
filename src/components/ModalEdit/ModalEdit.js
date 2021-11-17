import React from 'react';
import './ModalEdit.css'
import Button from '../Button/Button'
import Input from '../Input/Input'

const ModalEdit = (props) => {
    return (
        <div className="bg-modal" onClick={props.onClickCloseEdit}>
            <div className="edit-confirmation">
                    <h2>Edit item</h2>
                    <div className="inputs-area">
                        <Input
                            placeholder="Hello World"
                        >Title</Input>
                        <Input
                            placeholder="Content here"
                            size="large"
                        >Content</Input>
                    </div>
                    <div className="mind-btn">
                        <Button>SAVE</Button>
                    </div>
            </div>
        </div>
    )
}

export default ModalEdit
