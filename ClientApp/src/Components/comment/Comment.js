import "./Comment.css"
import React, { Component } from 'react'
import axios from 'axios';


export default class Comment extends Component {
    constructor(props){
        super(props);

        this.click = this.click.bind(this);
    }
    
    click(event){
        event.target.classList.toggle("likes");
        console.log(this.props.comment.id)
        axios({
            method: 'PUT',
            url: '/api/Comment', 
            data: JSON.stringify(this.props.comment.id), 
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        })    
             .then(resp=>console.log(resp.data))
             .catch((err) => { throw err });
    }

    toLike(comment){
        if(comment.isLiked){
            let like = document.getElementById(`${this.props.comment.id}`);
            like.classList.add('likes');
        }
    }

    componentDidMount(){
        console.log("I'm inside component")
        this.toLike(this.props.comment)
    }

    render() {
        return (
            <div>
                <div className="comment-item">
                    <div className="comment-name">{this.props.comment.name}: </div>
                    <div className="comment-text">{this.props.comment.text}</div>
                    <div className="like-container">
                        <i id={this.props.comment.id} className="fas fa-heart" onClick={this.click}></i>
                    </div>
                </div>
            </div>
        )
    }
}
