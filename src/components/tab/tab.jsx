import React, { useState } from "react";
import PropTypes from "prop-types";
import "./tab.scss";

function Tab(props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <div className="Tab">
        {props?.children
          .filter((x) => x !== false)
          ?.map((item, index) => (
            <p
              className="Title"
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {item?.props?.title}
            </p>
          ))}
      </div>
      <div className="children">
        {props?.children.filter((x) => x !== false)[activeTab]}
      </div>
    </div>
  );
}

export default Tab;

Tab.propTypes = {
  children: PropTypes.any,
};
