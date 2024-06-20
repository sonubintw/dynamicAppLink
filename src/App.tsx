import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedirectComponent from './RedirectComponent';
import Home from './home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectComponent />} />
        <Route path="/EProcess" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
