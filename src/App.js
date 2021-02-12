import './App.css';
import Nav from './components/Nav/Nav';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>App Body</h1>
      <Contacts />
    </div>
  );
}

export default App;
