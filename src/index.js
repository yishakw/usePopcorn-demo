import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import PropTypes from "prop-types";
StarRating.proptypes = {
  maxRating: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  defaultRating: PropTypes.number,
  messages: PropTypes.string,
  onSetRating: PropTypes.func,
  className: PropTypes.string,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={10}
      size="15px"
      color={"darkblue"}
      defaultRating={3}
    />
    <StarRating maxRating={8} size="20px" color="orange" defaultRating={5} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
