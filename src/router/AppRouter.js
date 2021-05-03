import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddProject from '../components/AddProject';
import ProjectList from '../components/ProjectList';
import LandingPage from '../components/LandingPage';
import useLocalStorage from '../hooks/useLocalStorage';
import EditProject from '../components/EditProject';
import ProjectContext from '../context/ProjectContext';

const AppRouter = () => {
  const [project, setProject] = useLocalStorage('project', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className='py-3'>
        <Container>
          <ProjectContext.Provider value={{ project, setProject }}>
            <Switch>
              <Route path='/' component={LandingPage} exact />
              <Route path='/project' component={ProjectList} />
              <Route path='/add' component={AddProject} />
              <Route path='/edit/:id' component={EditProject} />
              <Route component={() => <Redirect to="/project" />} />
            </Switch>
          </ProjectContext.Provider>
          </Container>  
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;