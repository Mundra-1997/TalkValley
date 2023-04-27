import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;