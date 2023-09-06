import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";

/*
  - profile photo + socials + CV
  - Experience
  - Certifications + Education
  - Projects
  - Others related to this(articles written)
*/

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Ganea Andreea</header>
      <Profile />
    </div>
  );
}

export default App;
