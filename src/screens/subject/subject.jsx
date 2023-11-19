import React from "react";
import { useSelector } from "react-redux";
import Tab from "../../components/tab/tab";
import Videos from "../../components/videos/videos";
import Articles from "../../components/articles/articles";

import "./subject.scss";

function SubjectScreen() {
  const subject = useSelector((state) => state.subject.selectedSubject);

  return (
    <div className="subject">
      <h2 className="subjectTitle">{subject.name}</h2>
      <Tab>
        <Videos title="Videos" />
        <Articles title="Articles" />
        {/* <Quiz title="Quiz" /> */}
      </Tab>
    </div>
  );
}

export default SubjectScreen;
