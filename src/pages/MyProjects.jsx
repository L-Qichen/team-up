import Container from '@mui/material/Container';
import { Header, Footer, CourseList } from '../components'
import '../assets/css/CommonStyle.css'

const MyProjects = () => {
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
        <CourseList />
      </Container>
      <Footer />
    </>
  );
}

export default MyProjects;