import logo from '../../styles/Photos/Logo.png';
import { FootLine, FootLinks, FootName, FootSpace } from '../../styles/Styles';
import { Col, Row } from 'react-bootstrap';

const Footer = () => (


  <>

  <FootLine>
      <Row className="mx-auto py-4 flex-wrap">
        
        <Col>
        <img className='nav-logo' 
          alt="logo" 
          src={logo} width="70px" /> 

            <FootName>The Blonde Coder</FootName>
        </Col>

    

        <Col>
        <FootSpace className="justify-content-end">
       
        <FootLinks to='/login'  className='p-3'>Privacy Policy</FootLinks>
        <FootLinks to='/login'  className='p-3'>License</FootLinks>
        </FootSpace>
        </Col>
        
      </Row>
    </FootLine>
  
  </>
) 
export default Footer;