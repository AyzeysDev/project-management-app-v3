import React, { useContext, useState, useEffect } from 'react';
import { Row, Col, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import _ from 'lodash';
import ProjectContext from '../context/ProjectContext';
import Project from './Project';

const ProjectList = () => {

  const { project, setProject } = useContext(ProjectContext);

  const [sortType, setSortType] = useState('date');
  const [sortValue, setSortValue] = useState('asc');

  const handleRemoveProject = (id) => {
    setProject(project.filter((projects) => projects.id !== id));
  };

  useEffect(() => {
  const sortArray = (type, value) => {
    const types = {
      storyPoints: 'storyPoints',
      name: 'projectName',
      price: 'totalPay',
      date: 'date'
    };
    const sortProperty = types[type];

    if (sortProperty === 'storyPoints' || sortProperty === 'totalPay') {
      if (value === 'asc') {    
        const sorted = [...project].sort((a, b) => a[sortProperty] - b[sortProperty]);
        setProject(sorted);
      } else {
        const sorted = [...project].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setProject(sorted);
      }
    } else if (sortProperty === 'date') {
      if (value === 'asc') { 
        const sorted = [...project].sort((a, b) => new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()));
        setProject(sorted);
      } 
      else { 
        const sorted = [...project].sort((a, b) => new Date(...b.date.split('/').reverse()) - new Date(...a.date.split('/').reverse()));
        setProject(sorted);
      }
    } else {
      if (value === 'asc') { 
        const sorted = [...project].sort((a, b) => a[sortProperty].toString().localeCompare(b[sortProperty]));
        setProject(sorted);
      } else {
        const sorted = [...project].sort((a, b) => b[sortProperty].toString().localeCompare(a[sortProperty]));
        setProject(sorted);
      }
    }  
  };

  sortArray(sortType, sortValue);
}, [sortType, sortValue]);


  return (
    <React.Fragment>
      <h2>Project Hub</h2>
        {!_.isEmpty(project) ? (
          <>
          <Container>
          <DropdownButton drop='right' variant = 'info' title = {sortType} onSelect={(e) => setSortType(e)}>
            <Dropdown.Item eventKey="name">Name</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="storyPoints">Story Points</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="price">Price</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="date">Date</Dropdown.Item>
          </DropdownButton>

          <DropdownButton drop='right' variant = 'info' title = {sortValue} onSelect={(e) => setSortValue(e)}>
            <Dropdown.Item eventKey= "asc">Asc</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="dsc">Dsc</Dropdown.Item>
          </DropdownButton>
          </Container>
          <Row>
          {project.map((projects) => (
            <Col key={projects.id} sm={10} md={5} lg={4} xl={4}>
            <Project key={projects.id} {...projects} handleRemoveProject={handleRemoveProject} />
            </Col>
          ))}
          </Row>
          </>
          )  : (
          <p className="message">Looks like your project tool box is empty. Prepare a new project by adding a task.</p>
        )}
    </React.Fragment>
  );
};

export default ProjectList;
