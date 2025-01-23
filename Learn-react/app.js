import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const heading = React.createElement("div", {}, [
  React.createElement("div", { id: "heading section" }, [
    React.createElement("h1", {}, "Hello h!!"),
    React.createElement("h2", {}, "Hello !!"),
  ]),
  React.createElement("div", { id: "heading section" }, [
    React.createElement("h1", {}, "Hello h2 !!"),
    React.createElement("h2", {}, "Hello !!"),
  ]),
]);
const root = createRoot(document.getElementById("root"));

root.render(heading);
