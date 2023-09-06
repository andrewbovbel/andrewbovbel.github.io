import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
  <div>
      <NavBar></NavBar>
      <div class="flex-container" id="content">
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            
            </Routes>

            {/* <Footer /> */}
          </div>
        </div>)
  
}

export default App;
