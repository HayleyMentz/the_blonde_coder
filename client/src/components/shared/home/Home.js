import { useEffect } from "react";
import { WorkoutConsumer } from "../../../providers/WorkoutProvider";
import HomeImg from '../../styles/Photos/joke4.jpeg';
import { Row, Col } from "react-bootstrap";
import { MainImg } from '../../styles/Styles';

const Home = () => (
  <>
  <div>
    <Row>
      <Col md={6}>
    
    <h1>
      <ol>
        <li>Web Development</li>
        <li>Website Managment</li>
        <li>Debugging</li>
      </ol>
    </h1>
  
       
      
      </Col>
      <Col md={6}>
        <MainImg fluid
        alt="Image"
        src={HomeImg}
        />
        
      </Col>
    </Row>
    </div>
  </>
  )

const ConnectedWorkouts = (props) => (
  <WorkoutConsumer>{(value) => <Home {...props} {...value} />}</WorkoutConsumer>
);
export default ConnectedWorkouts;
