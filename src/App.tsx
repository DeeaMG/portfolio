import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/*
  - profile photo + socials + CV
  - Experience
  - Certifications + Education
  - Projects
  - Others related to this(articles written)
*/

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
