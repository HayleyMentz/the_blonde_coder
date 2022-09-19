
import { Row, Col, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loginImg from '../../styles/Photos/joke3.jpeg'
import { MainImg } from '../../styles/Styles';



const LandingPage = () => (
<>
<div style={{backgroundColor:'#ffaaab'}}>
  <Row>
    <Col md={6}>
  
      

     
    
    </Col>
    <Col md={6}>
      <MainImg fluid
      alt="Image"
      src={loginImg}
      />
      
    </Col>
  </Row>
  </div>
</>
)
export default LandingPage;