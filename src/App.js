import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import MainImage from './components/Main-Image';
import MenuMobile from './components/Menu-mobile';


function App() {
  return (
    <div className="app">
      <Header />
      <MenuMobile/>
      <MainImage/>
      <Main/>
      
    </div>
  );
}

export default App;

