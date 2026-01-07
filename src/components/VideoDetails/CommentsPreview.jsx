import React from "react";
import CommentItem from "./CommentItem";

const CommentsPreview = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="comments-empty">
        <i className="bi bi-chat-left-text"></i>
        <span>No comments yet</span>
      </div>
    );
  }

  return (
    <div className="comments-preview">
      {/* Header */}
      <div className="comments-header">
        <i className="bi bi-chat-left-text"></i>
        <span>{comments.length} Comments</span>
      </div>

      {/* Comment List (Preview only) */}
      <div className="comments-list">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsPreview;
