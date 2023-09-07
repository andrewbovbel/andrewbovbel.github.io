import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Terminal from "./pages/Terminal";
import { Routes, Route } from "react-router-dom";
import React, {useState} from "react";

function App() {
  const [showTerminal, setShowTerminal] = useState(true)
  return (
  <div>
      {!showTerminal && <NavBar></NavBar>}
      <div class="flex-container" id="content">
            <Routes> 
              <Route path="/" element={<Home showTerminal={showTerminal} turnOffTerminal={() => setShowTerminal(false)}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>



            {/* <Footer /> */}
          </div>
        </div>)
  
}

export default App;
