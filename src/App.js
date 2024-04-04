import './App.css';
import AlgorithmsPreview from './components/AlgorithmsPreview';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
        <AlgorithmsPreview/>
      <Footer/>
    </div>
  );
}

export default App;
