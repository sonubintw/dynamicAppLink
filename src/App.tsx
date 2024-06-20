import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedirectComponent from './RedirectComponent';
import Home from './home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EProcess" element={<RedirectComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
