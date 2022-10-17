import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/calendar/Main';
import './App.css';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;