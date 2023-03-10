import AboutMe from "./components/AboutMe";
import Socials from "./components/Socials";
import Avatar from "./components/Avatar";
import Knowledge from "./components/Knowledge";

function App() {
  return (
    <div className="container">
      <header className="container__header">
        <Knowledge />
      </header>
      <menu className="container__menu">
        <Socials />
      </menu>
      <main className="container__main">
        <AboutMe className="left" />
        <Avatar className="right" />
      </main>
    </div>
  );
}

export default App;
