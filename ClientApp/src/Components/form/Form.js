import './Form.css'
import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    
    constructor(props){
        super(props)

        this.state={
            name: "",
            text: "",
            comments: []
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onNameChange(e) {
        this.setState({ name: e.target.value });
    }

    onTextChange(e) {
        this.setState({ text: e.target.value });
    }

    clearFields(){
        document.querySelectorAll('.inputInfo').forEach((item) => {
            item.value = ""
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const commentName = this.state.name;
        const commentText = this.state.text;
        if (!commentName || !commentText) {
            return;
        }

        const data = new FormData();

        data.append("Name", commentName);
        data.append("Text", commentText);
        data.append("isLiked", false);
        
        axios({
            method: 'post',
            url: '/api/Comment',
            data: data,
        })
            .then((res) => {
                this.props.loadData();
            })
            .catch((err) => { throw err });

        this.setState({ name: "", text: "" });
        this.clearFields();
    }

    render() {
        return (
            <section>
                <form id="my-form" onSubmit={this.onSubmit}>
                    <a id="feedback-btn">Нам важлива ваша думка</a>
                    <label htmlFor="in_name">Ім'я:</label>
                    <input className="inputInfo" onChange={this.onNameChange}/>
                    <label htmlFor="text_feedback">Коментар:</label>
                    <textarea className="inputInfo" onChange={this.onTextChange}></textarea>
                    <button type="submit">Залиште відгук</button>
                </form>
            </section>
        )
    }
}
