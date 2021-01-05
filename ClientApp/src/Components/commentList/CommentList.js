import React, { Component } from 'react'
import Form from "../form/Form";
import Comment from "../comment/Comment";
import axios from "axios"

export default class CommentList extends Component {
    
    constructor(props){
        super(props);

        this.state={
            comments: []
        }

        this.loadData = this.loadData.bind(this);
    }
    
    loadData() {
        axios.get('/api/Comment').then(resp => {

            this.setState({ comments: resp.data });
            console.log(this.state.comments);
        })
    }

    componentDidMount(){
        this.loadData();
    }

    render() {
        return (
            <div>
                <Form loadData={this.loadData}/>
                <div id="comments">Відгуки:
                    {this.state.comments.map((comment,id)=>{
                        return(<Comment key={id} comment={comment}/>)
                        })
                    }
                </div>
            </div>
        )
    }
}
