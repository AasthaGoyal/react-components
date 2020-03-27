import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>
{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4> Warning!</h4>
            </ApprovalCard>

            <ApprovalCard > 
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comments="A nice blog post" image={faker.image.avatar()}/>
           </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo = "Today at 2:00AM" comments="a very informative blog" image={faker.image.avatar()}/>
           </ApprovalCard>

           <ApprovalCard>
                 <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" comments="a great thing to learn" image={faker.image.avatar()}/>
           </ApprovalCard>
           
        </div>
    );
};  

ReactDOM.render(<App />, document.querySelector('#root'));