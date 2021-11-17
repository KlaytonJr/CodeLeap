import Input from '../../components/Input/Input'
import React, { useState, useEffect } from 'react';
import './Main.css';
import Button from '../../components/Button/Button'
import Post from '../../components/Post/Post'
import ModalDelete from '../../components/ModalDelete/ModalDelete'
import ModalEdit from '../../components/ModalEdit/ModalEdit'
import api from '../../actions/api'
// import axios from 'axios'


const Main = () => {
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [data, setData] = useState([]);
    
    // function getPosts() {
    //     axios
    //       .get("http://dev.codeleap.co.uk/careers/")
    //       .then(response => {
        //         const post = response.data.results.map(item => {
            //             return {
                //                 id: item.id,
                //                 username: item.username,
                //                 created_datetime: item.created_datetime,
                //                 title: item.title,
                //                 content: item.content,
                //             };
                //         });
                //         console.log(post);
                //         setData(post);
                //       })
                //       .catch(error => console.log(error));
                
                // }
                
    useEffect(() => {
        api.get("/careers/")
        .then(response => {
            setData(response.data.results.map(item => {
                return {
                    id: item.id,
                    username: item.username,
                    created_datetime: item.created_datetime,
                    title: item.title,
                    content: item.content,
                };
            }));
        })
        .catch(error => console.log(error));
    }, [])
    
    useEffect(() => {
        console.log(`Data: ${JSON.stringify(data)}`);
    }, [data])

    function createPost() {
        var today = new Date();
        today.setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

        api.post('/carrers/post', {
            "username": "klay",
            "created_datetime": today.toISOString(),
            "title": "Hi",
            "content": "Hello"
        })
        .then((response) => setData(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    function updatePost(newData) {
        var today = new Date();
        today.setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

        api
          .put("/carrers/put/", {
            "username": "klay",
            "created_datetime": today.toISOString(),
            "title": "Hi",
            "content": "Hello"
          })
          .then(function(response){
            console.log('atualizado com sucesso')
          });
      }
    
    function deletePost() {
        api
          .delete("/carrers/delete/", {
            "id": 1168
          })
          .then(function(response){
            console.log('deletado com sucesso')
          });
    }
                    
    function renderPost(item) {
        return (<Post 
                id={item.id}
                title={item.title}
                autor={`@${item.username}`}
                time={item.created_datetime}
                onClickDelete={() => setModalDelete(true)}
                onClickEdit={() => setModalEdit(true)}
                content={item.content}
            >
            </Post>)
    }

    return (
        <div className="main-container">
            <div className="main">
                <div className="header">
                    <h2>CodeLeap Network</h2>
                </div>
                <div className="mind-container">
                    <h2>What's on your mind?</h2>
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
                        <Button onClick={createPost}>CREATE</Button>
                    </div>
                </div>
                <div className="feed">
                    {data.map((item) => renderPost(item))}
                    {/* <Post 
                        title="My First Post at CodeLeap Network!"
                        autor="@Klayton"
                        time="25 minutes ago"
                        onClickDelete={() => setModalDelete(true)}
                        onClickEdit={() => setModalEdit(true)}
                        content={`Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
                        \n\nDuis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.`}
                    >
                    </Post>*/}
                </div>
            </div>
            {modalDelete ? <ModalDelete onClickCloseDelete={(e) => {
                const closeDelete = document.querySelector('.close-delete');
                const confirmDelete = document.querySelector('.confirm-delete');
                if (e.target === closeDelete) {
                    setModalDelete(false)
                }
                if (e.target === confirmDelete) {
                    deletePost()
                }
            }} /> : null}
            {modalEdit ? <ModalEdit onClickCloseEdit={(e) => {
                const bgModal = document.querySelector('.bg-modal');
                if (e.target === bgModal) {
                    setModalEdit(false)
                }
            }} /> : null}
            
        </div>
    )
}

export default Main