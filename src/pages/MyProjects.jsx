import Container from '@mui/material/Container';
import { Header, Footer, CourseList, AddProjectDialog } from '../components'
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import '../assets/css/CommonStyle.css'
import '../assets/css/MyProjects.css'
import { useState } from 'react';

const MyProjects = () => {
  const [opnDialogName, setOpenDialogName] = useState(null);

  const closeDialog = () => {
    setOpenDialogName(null);
  };

  const openAddProjectDialog = () => {
    setOpenDialogName('AddProject');
  }

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

        <Paper
          elevation={0}
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
            textAlign: 'center',
          }}
        >
          <IconButton type="button"
            sx={{
              color: '#4caf50',
            }}
            className='addIcon-container'
            onClick={openAddProjectDialog}
          >
            <AddIcon sx={{ width: '64px', height: '64px' }} />
          </IconButton>
          <AddProjectDialog open={opnDialogName === 'AddProject'} onClose={closeDialog} />
        </Paper>

      </Container>
      <Footer />
    </>
  );
}

export default MyProjects;