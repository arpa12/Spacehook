import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Header from './components/landingPage/header'; 
import Hero from './components/landingPage/hero';
import Contact from './components/landingPage/contact'; // Import the Contact component

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Render the Header component */}
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<Hero />} /> {/* Homepage route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
