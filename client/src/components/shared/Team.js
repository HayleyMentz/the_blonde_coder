import {Col, Row, Card, Container } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import {TeamTitle, TeamCard, TeamLink, TeamImage} from './../styles/teampage';

const Team = () => (
<Container>
  <TeamTitle>This is Me</TeamTitle>
 

   

    <Col>
      <TeamCard>
        <TeamImage variant="top" src="./images/selfie.png" />
        <Card.Body>
          <Card.Title>Hayley Mentz</Card.Title>
          <TeamLink href="https://github.com/HayleyMentz"><AiFillGithub /></TeamLink>
          <TeamLink href="https://www.linkedin.com/in/hayley-mentz-75713219/"><AiFillLinkedin /></TeamLink>
          <TeamLink href="mailto:hayley.mentz@gmail.com"><AiOutlineMail /></TeamLink>
          <Card.Text>
          Former Research Scientist turned Junior Developer.
          </Card.Text>
        </Card.Body>
      </TeamCard>
    </Col>

   


       
</Container>
)

export default Team;