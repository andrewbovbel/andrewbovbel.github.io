import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Terminal from "./pages/Terminal";

function App() {
  const [showTerminal, setShowTerminal] = useState(false)
  return (
  <div>
      {!showTerminal && <NavBar></NavBar>}
      <div className="flex-container" id="content">
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/terminal" element={<Terminal showTerminal={showTerminal} turnOffTerminal={() => setShowTerminal(false)} turnOnTerminal={()=> setShowTerminal(true)}/>} />
            </Routes>



            {/* <Footer /> */}
          </div>
        </div>)
  
}

export default App;
