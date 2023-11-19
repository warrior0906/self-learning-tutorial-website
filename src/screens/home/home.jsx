import React, { useRef } from "react";
import logo from "../../assets/bg.png";
// import logo from "src/assets/bg.png";
import "./home.scss";
import { Link } from "react-router-dom";

function HomeScreen() {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  console.log("width: ", windowWidth.current);
  console.log("height: ", windowHeight.current);
  return (
    <div class="Home">
      <img src={logo} alt="home" className="bgImg" />
      <Link to="/subjectsList" class="center">
        Start Learning
      </Link>
    </div>
  );
}

export default HomeScreen;
