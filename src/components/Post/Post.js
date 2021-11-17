import React from 'react';
import Edit from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Post.css'

const Post = (props) => {
    function convert(iso8601string) {
        let date = new Date(iso8601string);
        return date.toLocaleDateString();
    }

    return (
        <div className="post-container" id={props.id}>
            <div className="title-container">
                <h3>{props.title}</h3>
                <div className="post-icons">
                    <DeleteForeverIcon onClick={props.onClickDelete} style={{ color: '#fff', backgroundColor: '#000'}}/>
                    <Edit onClick={props.onClickEdit} style={{ color: '#fff', backgroundColor: '#000'}}/>
                </div>
            </div>
            <div className="post-content">
                <div className="content-header">
                    <p>{props.autor}</p>
                    <p>{convert(props.time)}</p>
                </div>
                <div className="content">
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
