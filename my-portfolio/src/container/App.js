import './App.css';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Projetos from '../components/Quests/Quests';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projetos />
    </>
  );
}

export default App;

const textAreaStyles = {
  width: 235,
  margin: 5
};