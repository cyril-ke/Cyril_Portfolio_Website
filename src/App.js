import './App.scss';
import Header from './components/Header/Header';
import HomeA from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <HomeA />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
