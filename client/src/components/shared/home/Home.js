import { useEffect } from "react";
import {  EnterImg, EnterTitle } from "../Styles";
import { Slide, Fade} from 'react-awesome-reveal';
import EnterLogo from '../../styles/Photos/Logo.png';
import { Row } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Home = () => (
  <>

<EnterTitle>The Blonde Coder</EnterTitle>

  
<Fade duration='5000'>
  <Link to='/'>
 <EnterImg fluid
  alt="Image"
  
  src={EnterLogo} />
  </Link>
        </Fade>
        </>
);

export default Home;
