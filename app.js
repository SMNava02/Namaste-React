import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello world!!!");

console.log(heading);

const root = createRoot(document.getElementById("root"));

root.render(heading);
