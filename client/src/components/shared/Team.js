import {Col, Row, Card, Container } from 'react-bootstrap';

import {TeamTitle, TeamCard, TeamLink, TeamImage} from './../styles/teampage';

const Team = () => (
<Container>
  <TeamTitle>About Me </TeamTitle>
   <Row xs={1} md={3} xl={5} className="g-2 justify-content-center">

    <Col>
    
     <TeamImage variant="top" src="./images/selfie.png" />
    
    </Col>
   
    
    </Row>
 

   <Row>
 <Col>
<br/>
   <p>
   Hello! My name is Hayley Mentz. My background is in Molecular Biology Research.
   I have since become a junior developer. The scientific method can be visualized in most agile methodologies showing that developers and researchers utilize many of the same skills and principles.
     </p>
     </Col>
     </Row>
     </Container>
)

export default Team;