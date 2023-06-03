import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.component';
import "@carbon/styles/css/styles.css";
import RegistrationPage from './pages/Registration/Registration.page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from './pages/About/About.page';
import HomePage from './pages/Home/Home.page';
import AdminPage from './pages/AdminPage/Admin.page';
import EventsPage from './pages/EventsPage/EventsPage.page';
import ErrorPage from './pages/ErrorPage/ErrorPage.page';
import BuddyPage from './pages/Buddy/Buddy.page';
import BuddyListPage from './pages/Buddy/BuddyList.page';
import IdeathonPage from './pages/EventsPage/Ideathon.page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<RegistrationPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/events' element={<EventsPage />}></Route>
          <Route path='/buddy' element={<BuddyPage />}></Route>
          <Route path='/buddy-list' element={<BuddyListPage />}></Route>
          <Route path='/ideathon' element={<IdeathonPage />}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
