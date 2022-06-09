import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header'
import { Content } from './components/Content';
import './GlobalStyle.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </main>
  );
}

export default App;
