import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageRoutes from './components/mainHome/PageRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <PageRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
