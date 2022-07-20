import { useState } from "react";
import { Button, Modal, Image, Card, Container } from "react-bootstrap";
import ExerciseForm from './ExerciseForm';
import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, Link } from 'react-router-dom';


const Exercise = ({ workout_id, id, name, image, category, deleteExercise}) => {
  const [show, setShow] = useState(false);
  const [editing, setEdit] = useState(false); 
  
  return (
    <>
    <Container>

    <ListGroup as="ol">
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    <Image width={171}
        height={180}
        src={image} />
            {name}
    
    <Badge bg="secondary" pill>Category: {category} </Badge>
   
    <Link to={`/${id}/exerciseShow`} state={{name: name, image: image, category: category, workoutId: workout_id}}>
    <Button variant="dark">Show Exercise</Button>
    </Link>

   
    </ListGroup.Item>
    </ListGroup>
 

 

    </Container>

    </>
  )
}



const ConnectedExercise = (props) => (
  <ExerciseConsumer>
    { value => <Exercise {...props} {...value} />}
  </ExerciseConsumer>
)

export default ConnectedExercise;