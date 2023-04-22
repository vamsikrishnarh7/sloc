import './App.css';
import './css/events.css'
import './css/mobile.css'
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Nav from './components/Nav';
import {
  Routes,
  Route
} from 'react-router-dom'
import EventsPage from './pages/EventsPage';
import AboutSection from './components/AboutSection';
import AdminPage from './pages/AdminPage';
import OrganizeEvent from './pages/OrganizeEvent';
import Abstract from "./components/event creation componets/Abstract";
import Preview from './components/event creation componets/Preview';
import Dates from './components/event creation componets/Dates';


function App() {
  return (
    
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path='/events' element={<EventsPage/>}></Route>
        <Route path='/admin' element = {<AdminPage/>}></Route>
        <Route path='/organize-event' element = {<OrganizeEvent/>}>
            <Route path="abstract" element={<Abstract/>}></Route>  
            <Route path='dates' element = {<Dates/>}></Route>
            <Route path="preview" element = {<Preview/>}></Route>        
        </Route>
        <Route path='/about' element = {<AboutSection/>}></Route>
        <Route exact path='/' element = {<MainSection/>}></Route>
         
        
      </Routes>
      
      <Footer />
    </div>
    
  );
}

export default App;
