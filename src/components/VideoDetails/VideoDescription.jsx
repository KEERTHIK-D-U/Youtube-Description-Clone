import React, { useState } from "react";

const VideoDescription = ({ description, views, uploadedAt }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`video-description ${expanded ? "expanded" : ""}`} onClick={() => setExpanded(true)}>
      <div className="description-meta">
        <span className="meta-views">{views}</span>
        <span className="meta-date">{uploadedAt}</span>
      </div>
      
      <div className="description-content">
        <p className="description-text">
          {description}
        </p>

        <button
          className="description-toggle"
          onClick={(e) => {
            e.stopPropagation();
            toggleDescription();
          }}
        >
          {expanded ? "Show less" : "more"}
        </button>
      </div>
    </div>
  );
};

export default VideoDescription;
