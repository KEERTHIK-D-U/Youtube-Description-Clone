import React, { useState } from "react";
import Button from "../common/Button";

const ActionButtons = ({ engagement }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(engagement.likes);

  const handleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  return (
    <div className="action-buttons">
      <Button
        className={liked ? "liked" : ""}
        onClick={handleLike}
      >
        <i className={`bi ${liked ? "bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"}`}></i>
        <span>{likeCount}</span>
      </Button>

      <Button>
        <i className="bi bi-share"></i>
        <span>Share</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
