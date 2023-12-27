import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

//import 변수 from 'js파일경로';
import App from "./hook/theme_useContext/App"

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/} {/*리액트 주석 표기*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
