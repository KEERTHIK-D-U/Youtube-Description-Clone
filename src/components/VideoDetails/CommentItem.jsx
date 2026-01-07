import React, { useState } from "react";

const CommentItem = ({ comment }) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 250; // Characters before truncation
  const isLong = comment.text.length > MAX_LENGTH;

  return (
    <div className="comment-item">
      <img
        src={comment.avatar}
        alt={comment.username}
        className="comment-avatar"
      />

      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-username">{comment.username}</span>
          <span className="comment-time">{comment.time}</span>
        </div>

        <p className="comment-text">
          {expanded || !isLong
            ? comment.text
            : `${comment.text.substring(0, MAX_LENGTH)}...`}
        </p>

        {isLong && (
          <button
            className="comment-read-more"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        <div className="comment-actions">
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{comment.likes}</span>
          <i className="bi bi-hand-thumbs-down" style={{marginLeft: "8px"}}></i>
          <span style={{marginLeft: "16px", cursor: "pointer"}}>Reply</span>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
