import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.component';
import "@carbon/styles/css/styles.css";
import RegistrationPage from './pages/Registration/Registration.page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from './pages/About/About.page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<RegistrationPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
