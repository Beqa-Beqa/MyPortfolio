import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import * as Containers from "../Containers";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <main>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/MyPortfolio">
            <Route index element={<Containers.Header />} />
            <Route path="aboutme" element={<Containers.AboutMe />} />
            <Route path="skills" element={<Containers.Skills />} />
            <Route path="projects" element={<Containers.Projects />} />
            <Route path="contact" element={<Containers.Footer />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </main>
  );
}
 
export default App;