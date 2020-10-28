import React, { useState } from 'react';
import axios from 'axios';

import '../styles/Add.css';

const Add = () => {
    const [title, setTitle] = useState("");
    const [auth, setAuth] = useState("");
    const [desc, setDesc] = useState("");
    
    const addClick = (e) => {
        if (title === "" || auth === "" || desc === "") {
            window.alert('Please fill out all the fields')
        }
        else {
            let newBook = {
                _id: Date(),
                name: title,
                author: auth,
                desc: desc
            }
            axios
                .post('http://localhost:5000/api/new', newBook)
                .then( book=> {
                    window.alert("Added to catalogue!")
                    setTitle("")
                    setAuth("")
                    setDesc("")
                })
                .catch(error => {
                    console.log(error);
                });
            }
    }

    const titleChg = (e) => {
        setTitle(e.target.value)
    }   
    const authChg = (e) => {
        setAuth(e.target.value)
    }
    const descChg = (e) => {
        setDesc(e.target.value)
    }

    return (
        <div id="container" className="content">
            <form>
                <h4>Add a new book</h4>
                <input type="text" placeholder="Title" onChange={e=>{titleChg(e)}} />
                <br />
                <input type="text" placeholder="Author" onChange={e=>{authChg(e)}} />
                <br />
                <input type="text" placeholder="Description" onChange={e=>{descChg(e)}} />
                <br />
                <input type="reset" onClick={e=>addClick(e)} value="Add to catalogue" />
            </form>
        </div>
    );
};

export default Add;