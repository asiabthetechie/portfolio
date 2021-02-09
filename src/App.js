import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import SocialMediaButtons from './components/SocialMediaButtons/SocialMediaButtons';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>App Body</h1>
      <SocialMediaButtons />
      <Footer />
    </div>
  );
}

export default App;
