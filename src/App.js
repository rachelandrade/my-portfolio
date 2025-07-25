import { Header } from './components/Header';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import Contact from './components/Contact';
import './styles/main.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <TechSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;