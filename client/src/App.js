import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetList from './components/GetList';
import GetCharacter from './components/GetCharacter';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<GetList/>} />
        <Route exact path="/character" element={<GetCharacter/>} />
      </Routes>
    </Router>
  );
}

export default App;
