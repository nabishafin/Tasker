import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import TaskContainer from "./components/TaskContainer/TaskContainer";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Navbar />
      <div style={{position:'relative'}}>
        <Hero />
        <TaskContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
