import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/AboutMe/About";
import Resume from "./components/Resume/Resume";
import ProjectWork from "./components/Project/Project";
import Contact from "./components/ContactMe/Contact";
import { BrowserRouter as Routex, Switch, Route } from "react-router-dom";
import Education from "./components/Resume/Education/Education";
import Skills from "./components/Resume/Skills/Skills";

function App() {
  return (
    <Routex>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Resume />
        <ProjectWork />
        <Contact />
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={ProjectWork} />
        <Route path="/contact" component={Contact} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </Routex>
  );
}

export default App;
