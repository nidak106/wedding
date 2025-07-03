import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Quiz from './Components/Quiz'; 
import Events from './Components/Events';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </>
  );
}

export default App;
