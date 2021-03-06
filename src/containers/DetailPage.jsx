import "../assets/css/Detailpage.css";
import React from "react";
import { Context } from "../context/MyProvider.js";
const detailPage = (props) => {
  const { globalState } = React.useContext(Context);
  // id	organization_id	image	tags	react_code	vue_code	file_name	type	description
  const {
    id,
    organization_id,
    image,
    tags,
    react_code,
    vue_code,
    file_name,
    type,
    description,
  } = globalState.details;
  return (
    <div className="detailpage">
      DETAIL PAGE
      <div className="image-container">
        <img
          src={image}
          alt={file_name}
          className="detail-img"
          width="150"
          height="150"
        />
      </div>
      <ul>
        <li>
          TYPE:
          {type}
        </li>
        <li>TAGS: {tags}</li>
        <li>DESCRIPTION: {description}</li>
        <li>React Code: {react_code}</li>
      </ul>
      <div className="button-container">
        <button>Download Code</button>
      </div>
    </div>
  );
};

export default detailPage;
