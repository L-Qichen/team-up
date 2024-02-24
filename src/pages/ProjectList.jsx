import Container from '@mui/material/Container';
import { Header, Footer, CourseList } from '../components'
import '../assets/css/CommonStyle.css'
import { useState, useEffect } from 'react';
import { customFetch } from '../utils';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const response = await customFetch.get('/project/getProject');
        // const projectList = JSON.stringify(response.data);
        const projectList = response.data;
        setProjects([projectList]);
      } catch (error) {
        console.error('Error fetching project list:', error);
      }
    };
    fetchProjectList();
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