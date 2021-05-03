import React, { useContext } from 'react';
import ProjectPage from './ProjectPage';
import ProjectContext from '../context/ProjectContext';

const AddProject = ({ history }) => {

  const { project, setProject } = useContext(ProjectContext);

  const handleOnSubmit = (projects) => {
    setProject([projects, ...project]);
    history.push('/project');
  };

  return (
    <React.Fragment>
      <ProjectPage handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  )
}

export default AddProject;
