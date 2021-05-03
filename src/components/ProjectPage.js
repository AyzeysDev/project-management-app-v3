import React, { useState } from 'react';
import moment from 'moment'
// import DatePicker from 'react-datetime';
// import {MDBDatePicker}  from 'mdbreact';
import {  Container, Row, Col, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProjectPage = (props) => {
  const [project, setProject] = useState(() => {
    return {
    projectName: props.project ? props.project.projectName : '',
    stack: props.project ? props.project.stack : '',
    description: props.project ? props.project.description : '',
    storyPoints: props.project ? props.project.storyPoints : '',
    totalPay: props.project ? props.project.totalPay : '',
    date: props.project ? props.project.date : ''
  };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { projectName, stack, description, storyPoints, totalPay, date } = project;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [projectName, stack, description, storyPoints, totalPay, date];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const project = {
        id: uuidv4(),
        projectName,
        stack,
        description,
        storyPoints,
        totalPay,
        date
      };
      props.handleOnSubmit(project);
    } else {
      errorMsg = 'Try again!! Verify if all fields are filled, then Submit';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'storyPoints':
        if (value === '' || parseInt(value) === +value) {
          setProject((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'totalPay':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setProject((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setProject((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (    
    <Container>
      <Row className='justify-content-md-center'>
      <Col xs={12} md={12}>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="projectName"
            value={projectName}
            placeholder="Type the name of Project"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="stack">
          <Form.Label>Tech Stack</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="stack"
            value={stack}
            placeholder="Mention Frameworks and Database types used here"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter Description of the project"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="storyPoints">
          <Form.Label>Story Points</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            min="0"
            name="storyPoints"
            value={storyPoints}
            placeholder="Assign Story Points for the project"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="totalPay">
          <Form.Label>Total Pay</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="totalPay"
            value={totalPay}
            placeholder="Mention the price you're paid"
            onChange={handleInputChange}
          />          
        </Form.Group>        
        <Form.Group controlId="date">
          <Form.Label>Target Date</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="date"
            value={date}
            min={moment().format("YYYY-MM-DD")}
            placeholder="Estimated date of Completion"
            onChange={handleInputChange}
          />          
        </Form.Group> 
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
      </Col>
      </Row>
    </Container>
  );
};

export default ProjectPage;