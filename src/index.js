import React from "react";
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { render } from "react-dom";
import App from "./components/App";
import { MyProvider } from "./context/MyProvider.js";
// configure the amplify 
Amplify.configure(awsExports);
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement("div");

root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it
render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById("root")
);
