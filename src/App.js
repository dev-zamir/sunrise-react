import './App.scss';
import Container from '@material-ui/core/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import BottomBar from './components/BottomBar';

function App() {
  return (
    <Container maxWidth={false} className="main-container">
      <Header/>
      <MainContent/>
      <BottomBar/>
    </Container>
  );
}

export default App;
