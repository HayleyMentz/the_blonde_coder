import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/shared/home/Home";
import Info from "./components/shared/home/Info";
import Nomatch from "./components/shared/Nomatch";
import MainNavbar from "./components/shared/MainNavbar";
import Payment from "./components/shared/home/Payment";
import FetchUser from "./components/auth/FetchUser";
import Team from './components/shared/Team';
import Contact from "./components/shared/home/Contact";
import Footer from "./components/shared/home/Footer";
import "./components/shared/home/styles.css";







const App = () => (
  <>
     <MainNavbar />
  <div className="content-container" style={{backgroundColor:'#ffaaab'}} >
      <Routes>
      <Route path= "/" element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/*' element={<Nomatch />} /> 
      </Routes>
    </div> 
<Footer className="footer--pin"/> 
  
  </>
);

export default App;
