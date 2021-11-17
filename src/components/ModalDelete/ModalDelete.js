import React from 'react';
import './ModalDelete.css'
import Button from '../Button/Button'

const ModalDelete = (props) => {
    return (
        <div className="bg-modal" onClick={props.onClickCloseDelete}>
            <div className="delete-confirmation">
                <p>Are you sure you want to delete this item?</p>
                <div className="delete-btn">
                    <Button type="outline close-delete">Cancel</Button>
                    <Button type="outline confirm-delete">OK</Button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete
