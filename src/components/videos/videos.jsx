import React from "react";
import { useSelector } from "react-redux";
import "./videos.scss";

function Videos() {
  const subject = useSelector((state) => state.subject.selectedSubject);
  const videos = subject.data.videos;

  return (
    <div className="videos-container">
      {videos?.map((e) => (
        <div key={e?.url} className="video">
          <video width="750" height="500" controls>
            <source src={e?.url} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}

export default Videos;
