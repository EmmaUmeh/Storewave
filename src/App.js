// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import Herobanner from './components/Herobanner';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobanner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
