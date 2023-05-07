import React from "react";

const PostItem = (props) => {
    return(
        <div className="App">
        <div className="post">
          <div className="post_content">
            <strong>{props.number} {props.post.title}</strong>
            <div>
              {props.post.body}
            </div>
          </div>
          <div className="post_btns">
            <button>Delete</button>
          </div>
        </div>
      </div>
    );
}
export default PostItem;