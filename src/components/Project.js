import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListGroup, Button, Card } from 'react-bootstrap';

const Project = ({
  id,
  projectName,
  stack,
  description,
  storyPoints,
  totalPay,
  date,
  handleRemoveProject
}) => {

  const history = useHistory();

  return (
    <Card className='my-3 p-3 rounded' bg={'Primary'} text={'dark'} border="dark" style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>
          <strong>{projectName}</strong>
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Stack: {stack}</ListGroup.Item>
          <ListGroup.Item>Description: {description}</ListGroup.Item>
          <ListGroup.Item>Story Points: {storyPoints}</ListGroup.Item>
          <ListGroup.Item>Total Pay: {totalPay}</ListGroup.Item>
          <ListGroup.Item>Date: {date}</ListGroup.Item>
        </ListGroup>
        <Button variant="warning" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveProject(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;