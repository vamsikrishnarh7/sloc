import './App.css';
import './css/events.css'
import './css/mobile.css'
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Nav from './components/Nav';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import EventsPage from './pages/EventsPage';
import AboutSection from './components/AboutSection';
import AdminPage from './pages/AdminPage';
import OrganizeEvent from './pages/OrganizeEvent';
import Abstract from "./components/event creation componets/Abstract";
import Preview from './components/event creation componets/Preview';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/admin" />;
  }
  return (
    
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path='/sloc/events' element={<EventsPage/>}></Route>
        <Route path='/sloc/admin' element = {<AdminPage/>}></Route>
        <Route path='/sloc/organize-event' element = {<RequireAuth><OrganizeEvent/></RequireAuth>}>
            <Route path="abstract" element={<Abstract/>}></Route>
            <Route path="preview" element = {<Preview/>}></Route>        
        </Route>
        <Route path='/sloc/about' element = {<AboutSection/>}></Route>
        <Route exact path='/sloc' element = {<MainSection/>}></Route>
      </Routes>
      
      <Footer />
    </div>
    
  );
}

export default App;
