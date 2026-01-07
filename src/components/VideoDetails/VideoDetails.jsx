import React, { useEffect, useState } from "react";
import "./VideoDetails.css";
import { videoData } from "../../data/videoData";

import VideoTitle from "./VideoTitle";
import ChannelInfo from "./ChannelInfo";
import ActionButtons from "./ActionButtons";
import VideoDescription from "./VideoDescription";
import CommentsPreview from "./CommentsPreview";
import Loader from "../common/Loader";

const VideoDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(videoData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

 if (loading) {
  return <Loader />;
}

  if (!data) {
    return <div className="video-details-empty">No video data available</div>;
  }

  return (
    <div className="video-details-container">
      {/* Video Title */}
      <VideoTitle title={data.title} />

      {/* Channel + Actions */}
      <div className="video-actions-row">
        <ChannelInfo channel={data.channel} />
        <ActionButtons engagement={data.engagement} />
      </div>

      {/* Description with Meta */}
      <VideoDescription 
        description={data.description} 
        views={data.views}
        uploadedAt={data.uploadedAt}
      />

      {/* Comments */}
      <CommentsPreview comments={data.comments} />
    </div>
  );
};

export default VideoDetails;
