import React from "react";
import "./VideoWithPlayButton.css";
import ConstructionVideo from "../../assets/construction.mp4";
import ThumbnailImage from "../../assets/Thumbnail.svg";

const VideoWithPlayButton = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className={`video-player ${isPlaying ? "visible" : "hidden"}`}
        src={ConstructionVideo}
        type="video/mp4"
        controls
      ></video>

      {!isPlaying && (
        <div
          className="thumbnail-overlay"
          style={{ backgroundImage: `url(${ThumbnailImage})` }}
        >
          <button className="play-button" onClick={handlePlay}>
            <span>&#9658;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoWithPlayButton;
