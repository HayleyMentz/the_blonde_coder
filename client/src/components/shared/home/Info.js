import { useEffect } from "react";
import { WorkoutConsumer } from "../../../providers/WorkoutProvider";
import HomeImg from '../../styles/Photos/joke4.jpeg';
import { Row, Col } from "react-bootstrap";
import { MainImg } from '../../styles/Styles';
import { Slide, Fade} from 'react-awesome-reveal';
import HomeLogo from '../../styles/Photos/ufo2.jpeg';




const Info = () => (
  <>
  <div>
    <Row>
      <Col md={6}>
    
    <h1>
      <Slide cascade='true'>
      
        <li>Web Development</li>
      
      
        <li>Website Managment</li>
       
        
        
        <li>Debugging</li>
      </Slide>
      
    </h1>
  <Fade>
    <MainImg fluid
        alt="Image"
        src={HomeLogo}
        />
      </Fade>
      </Col>
      <Col md={6}>
        <Slide direction='right'>
        <MainImg fluid
        alt="Image"
        src={HomeImg}
        />
        </Slide>
      </Col>
    </Row>
    </div>
  </>
  )

export default Info;
