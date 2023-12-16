import './App.css';
import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import {NavBarComp} from './deportes/NavBar.jsx';
import {Formula1} from './deportes/Formula1.jsx';
import {Carreras} from './deportes/carreras.jsx';
import {Calendarios} from './deportes/calendarios.jsx';
import {Clasificacion} from './deportes/clasificacion.jsx';
import {Momentos} from './deportes/momentos.jsx';
import {Pilotos} from './deportes/pilotos.jsx';
import {Autos} from './deportes/autos.jsx';
import {Pistas} from './deportes/pistas.jsx';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
                      <Routes>
                                <Route path='/' element={<NavBarComp />}>
                                <Route path='/formula1' element={<Formula1 />} />
                                <Route path='/carreras' element={<Carreras />} />
                                <Route path='/calendarios' element={<Calendarios />} />
                                <Route path='/clasificacion' element={<Clasificacion />} />
                                <Route path='/momentos' element={<Momentos />} />
                                <Route path='/pilotos' element={<Pilotos />} />
                                <Route path='/autos' element={<Autos />} />
                                <Route path='/pistas' element={<Pistas />} />
                                </Route>
                      </Routes>
      </BrowserRouter> 
    </div>
    
  );
}

export default App; 
