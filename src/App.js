import TelaInicial from './Componentes/TelaInicial';
import TelaPrincipal from './Componentes/TelaPrincipal'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { useHistory ,useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial/>}/>
        <Route path="/quiz" element={<TelaPrincipal/>}/>
        
      </Routes>
    </Router>
    // {useLocation().pathname === '/quiz' ? <TelaInfoJogadores/> : ''}
  );
}

export default App;
