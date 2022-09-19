import { Slide, Fade} from 'react-awesome-reveal';
import { Col, Container, Row, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import signupImg from '../../styles/Photos/joke1.jpeg';
import { MainImg } from '../../styles/Styles';
import {TeamTitle, TeamCard, TeamLink, TeamImage} from '../../styles/teampage';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { ContactLink } from '../Styles';



const Contactpage = () => (
<>
 
   <Container>
    <Row>
    <Col md={6} >
 

    
    
    
    <h1>
    
          <TeamLink href="https://github.com/HayleyMentz"><AiFillGithub /></TeamLink>
       </h1>
       <h1> 
          <TeamLink href="https://www.linkedin.com/in/hayley-mentz-75713219/"><AiFillLinkedin /></TeamLink>
          </h1> 
          <h1> 
          <TeamLink href="mailto:hayley.mentz@gmail.com"><AiOutlineMail /></TeamLink>

          </h1> 
        
          </Col>
    <Col md={6}>
  <h1>How do you make a blonde laugh on Saturday?</h1>
<Fade duration='6000'>
  <h1>Tell her a joke on Wednesday</h1>
  </Fade>
 </Col>
 </Row>
 </Container>
 
</>
)
export default Contactpage;