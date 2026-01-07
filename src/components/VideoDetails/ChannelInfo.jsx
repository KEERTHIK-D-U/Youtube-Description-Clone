import React, { useState } from "react";

const ChannelInfo = ({ channel }) => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="channel-info">
      {/* Channel Avatar */}
      <img
        src={channel.avatar}
        alt={channel.name}
        className="channel-avatar"
      />

      {/* Channel Name & Subscribers */}
      <div className="channel-text">
        <div className="channel-name-row">
          <span className="channel-name">{channel.name}</span>

          {channel.isVerified && (
             <i className="bi bi-patch-check-fill verified-icon"></i>
            )}
        </div>

        <span className="channel-subscribers">
          {channel.subscribers}
        </span>
      </div>
      <button 
        className={`subscribe-btn ${subscribed ? "subscribed" : ""}`}
        onClick={() => setSubscribed(!subscribed)}
      >
        {subscribed ? (
          <>
            <i className="bi bi-bell"></i>
            <span>Subscribed</span>
          </>
        ) : (
          "Subscribe"
        )}
      </button>
    </div>
  );
};

export default ChannelInfo;
