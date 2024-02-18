import Container from '@mui/material/Container';
import { Header, Footer, CourseList } from '../components'
import '../assets/css/CommonStyle.css'
import { useState, useEffect } from 'react';
import { customFetch } from '../utils';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // const fetchProjectList = async () => {
    //   try {
    //     const response = await customFetch.get('/project/projectList');
    //   } catch (error) {
    //     console.error('Error fetching project list:', error);
    //   }
    // };
    // fetchProjectList();
    setProjects([
      { id: 1, projectName: 'First Project (A)' },
      { id: 2, projectName: 'One Project (B)' },
      { id: 3, projectName: 'Some Project (C)' },
      { id: 4, projectName: 'AN Project (D)' },
      { id: 5, projectName: 'Another Project (E)' },
    ]);
  }, []);

  return (
    <>
      <Header />

      <Container maxWidth="md">
        <h1 className='title'>
          My Projects
        </h1>
        <div className='break-line' />
      </Container>

      <Container maxWidth="md">
        <CourseList projects={projects} />
      </Container>

      <Footer />
    </>
  );
};
export default ProjectList;