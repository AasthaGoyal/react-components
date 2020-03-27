import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
        <a href="/" classname="avatar">
            <img alt="avatar" src={props.image}/>

        </a>
        <div className="content" >
            <a href="/" classname="author">
                {props.author}
            </a>
            <div classname="metadata">
                <span className="date" > {props.timeAgo}</span>
            </div>
            <div className="text">{props.comments}</div>
        </div>
    </div>
    );
}

export default CommentDetail;