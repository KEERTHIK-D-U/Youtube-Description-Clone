import React from "react";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Video player is intentionally not included */}
      <VideoDetails />
    </div>
  );
}

export default App;
