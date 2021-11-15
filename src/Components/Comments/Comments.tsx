import React, { FunctionComponent } from "react";
import "./comments.css";
import { Avatar, Button } from "antd";
const Comments: FunctionComponent = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="comments__container">
      <h1 className="comments__title">12 comments</h1>
      <div className="comments__comments">
        <div className="comments__comment">
          <div>
            <Avatar size={40} src={`${PF}/assets/avatars/ava1.png`} />
          </div>
          <div className="comments__contents">
            <div>
              <span className="comment__name">Han Solo</span>
              <span className="comment__time">
                Commented on Chapter 35 • 24 min. ago
              </span>
            </div>
            <div className="comments__content">
              Copy I had no idea such a sequel was coming as I thought the show
              had ended and Kyoto Animation took a hard hit from the tragedy but
              currently 4 episodes in as of writing this review, and I love
              every second of it.
            </div>
            <div className="comments__action-container">
              <div className="comments__action">
                <img
                  src={`${PF}/assets/like.png`}
                  alt="like"
                  height="12"
                  width="12"
                  style={{marginRight: '9px'}}
                />
                <span className="comment__count">61</span>
              </div>
              <div className="comments__action">
                <img
                  src={`${PF}/assets/comment.png`}
                  alt="comment"
                  height="12"
                  width="12"
                  style={{marginRight: '9px'}}
                />
                <span className="comment__count">12</span>
              </div>
              <div className="comments__reply">Reply</div>
            </div>
          </div>
        </div>
        <div className="comments__comment">
          <div>
            <Avatar size={40} src={`${PF}/assets/avatars/ava2.png`} />
          </div>
          <div className="comments__contents-user">
            <input
              type="text"
              placeholder="Add your comment"
              className="comments__input"
            />
          </div>
        </div>
        <Button className="comments__button">Add Comment</Button>
      </div>
    </div>
  );
};

export default Comments;
