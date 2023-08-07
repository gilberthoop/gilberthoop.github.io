import "./App.css";
import Introduction from "./components/Introduction";
import Bio from "./components/Bio";
import Resume from "./components/Resume";
import MyProjects from "./components/MyProjects";
import Quotes from "./components/Quotes";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Introduction />
      <Bio />
      <Resume />
      <MyProjects />
      <Quotes />
      <Contact />
    </main>
  );
}

export default App;
