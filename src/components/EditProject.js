import React, { useContext } from 'react';
import ProjectPage from './ProjectPage';
import { useParams } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';

const EditProject = ({ history }) => {

  const { project, setProject } = useContext(ProjectContext);
  const { id } = useParams();
  const projectToEdit = project.find((projects) => projects.id === id);

  const handleOnSubmit = (projects) => {
    const filteredProjects = project.filter((projects) => projects.id !== id);
    setProject([projects, ...filteredProjects]);
    history.push('/project');
  };

  return (
    <div>
      <ProjectPage project={projectToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditProject;