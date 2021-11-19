import './App.css';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Sobre from '../components/Sobre/Sobre'
import Projetos from '../components/Projetos/Projetos';
import Contatos from '../components/Contatos/Contatos';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Projetos />
      <Contatos />
    </>
  );
}

export default App;