import React, { useState } from "react";
import "./App.css"; // Make sure this path is correct for your project

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app-container">
      <button onClick={toggleSidebar} className="toggle-btn">
        {isSidebarVisible ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <h2>Sidebar</h2>
        <p>This is the sidebar!</p>
      </div>

      {/* Main Content */}
      <div className={`content ${isSidebarVisible ? "shifted" : ""}`}>
        <h1>Main Content</h1>
        <p>
          This is the main content area. The sidebar will not overlap this area
          when it's visible.
        </p>
      </div>
    </div>
  );
};

export default App;
