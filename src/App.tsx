import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedirectComponent from './RedirectComponent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectComponent />} />

      </Routes>
    </Router>
  );
}

export default App;
