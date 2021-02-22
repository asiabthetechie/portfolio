import './App.css';
import Nav from './components/Nav/Nav';
import Contacts from './pages/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
