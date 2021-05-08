import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Particles className='particles-canvas' params={{
      particles:{
        number:{
          value: 50,
          density:{
            enable: true,
            value_area: 900
          }
        },
        shape:{
          type:'circle',
          stroke: {
            width: 6,
            color:'#f9ab00'
          }
        }
      }
      }}/>
    <Navbar />
    <Header />
    <About />
    <Skills/>
    <Projects />
    <Contact/>
    </>
  );
}

export default App;
