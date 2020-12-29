import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// importing baseURL from axios.js file - no need for line below
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use(
  (req) => {
    console.log("Request: ", req);
    return req;
  },
  (error) => {
    console.log("Request Error: ", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log("Response: ", res);
    return res;
  },
  (error) => {
    console.log("Response Error: ", error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
