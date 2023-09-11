import './App.css';
import './css/student-post.css'
import './css/resource.css'
import './css/clubs.css'
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
import AdminPage from './pages/AdminPage';
import OrganizeEvent from './pages/OrganizeEvent';
import Abstract from "./components/event creation componets/Abstract";
import Preview from './components/event creation componets/Preview';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Resources from './components/Resources';
import AboutUs from './components/AboutUs';
import Clubs from './components/Clubs';
import Placements from './pages/Placements';
import TechClub from './pages/TechClub';


function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/admin" />;
  }
  return (
    
    <div className="App">
      <Nav />
      
      <Routes>
        <Route exact path='/clubs' element={<Clubs/>}>
            
        </Route>
        <Route path='/placement-club' element={<Placements />}></Route>
        <Route path='/tech-club' element={<TechClub />}></Route>
        <Route exact path='/events' element={<EventsPage/>}></Route>
        <Route exact path='/admin' element = {<AdminPage/>}></Route>
        <Route exact path='/organize-event' element = {<RequireAuth><OrganizeEvent/></RequireAuth>}>
            <Route path="abstract" element={<Abstract/>}></Route>
            <Route path="preview" element = {<Preview/>}></Route>        
        </Route>
        <Route path='/resources' element = {<Resources/>}></Route>
        <Route exact path='/about' element = {<AboutUs/>}></Route>
        <Route exact path='/' element = {<MainSection/>}></Route>
      </Routes>
      
      <Footer />
    </div>
    
  );
}

export default App;
