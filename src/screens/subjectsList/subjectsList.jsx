import React from "react";
import { Link } from "react-router-dom";
import { subjects } from "../../utils";
import { useDispatch } from "react-redux";
import { setSubject } from "../../store/slices/subjectSlice";
import "./subjectsList.scss";

//import images
import osImg from "../../assets/os.png";
import dbmsImg from "../../assets/dbms.png";
import cppImg from "../../assets/cpp.png";
import sqlImg from "../../assets/sql.png";
import bmImg from "../../assets/bm.png";

function SubjectsListScreen() {
  const dispatch = useDispatch();

  const fetchImg = (key) => {
    switch (key) {
      case "os":
        return osImg;
      case "dbms":
        return dbmsImg;
      case "cpp":
        return cppImg;
      case "sql":
        return sqlImg;
      case "bm":
        return bmImg;
      default:
        return "";
    }
  };

  return (
    <div className="SubjectsList">
      {subjects?.map((e) => (
        <Link
          to={e.navigateTo}
          key={e.name}
          onClick={() => {
            dispatch(setSubject(e));
          }}
        >
          <img src={fetchImg(e.img)} alt={e.name} className="img" />
        </Link>
      ))}
    </div>
  );
}

export default SubjectsListScreen;
