import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/header";
import Body from "./components/body";
// import App from "./sidebar";
const AppLayout = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
