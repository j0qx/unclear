import './Main.css';
import { Routes , Route } from 'react-router-dom';
import Home from '../Home';
import News from '../News';
import Tournaments from '../Tournaments';
import Legal from '../Legal';
import Contact from '../Contact';


const Main = () => {
  return(
    <div className="main">
      <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route exact path="/association/adhesion" element={<Home />}/>
        <Route exact path="/association/presentation" element={<Home />}/>
        <Route exact path="/association/info" element={<Home />}/>
        <Route exact path="/news" element={<News />}/>
        <Route exact path="/mentions" element={<Legal />}/>
        <Route exact path="/tournaments" element={<Tournaments />}/>
        <Route exact path="/contact" element={<Contact />}/> 
       {/* Cette route n'a pas de path, elle sera donc tout le temps appelé si
      aucune a été appelé avant 
        <Route element={} /> */}
      </Routes>
    </div>
  )
};
export default Main;
