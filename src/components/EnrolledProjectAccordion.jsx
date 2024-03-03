import { useState, useEffect } from 'react';
import { customFetch } from '../utils';
import Container from '@mui/material/Container';
import '../assets/css/CommonStyle.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const EnrolledProjectAccordion = ({ title, user }) => {

  const [projects, setProjects] = useState([
    { id: 1, projectName: 'Project 4', status: 'pending', description: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content.' },
    { id: 2, projectName: 'Project 5', status: 'approved', description: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content.' },
    { id: 3, projectName: 'Project 6', status: 'rejected', description: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content.' },
  ]);

  useEffect(() => {
    const fetchLeadedProjects = async () => {
      try {
        const response = await customFetch.get(`project/enrollProject?userId=${user.userId}`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching enrolled projects:', error);
      }
    };

    fetchLeadedProjects();
  }, [user.id]);

  return (
    <>
      <Container maxWidth="md">
        <h2 className='h2-title'>
          {title}
        </h2>
        <div className='break-line' />
      </Container>

      <Container maxWidth="md">
        {projects.map((project) => {
          return (
            <Accordion
              key={project.id}
              sx={{ outline: '1px solid rgba(0,0,0,.2)' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h6">
                  {project.projectName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column"
                  spacing={1}
                  alignItems="flex-start"
                >
                  <Chip
                    label={`Status: ${project.status}`}
                    sx={{
                      background: '#4caf50',
                      color: "#fff",
                      letterSpacing: '1px',
                    }}
                  />
                </Stack>
                <div className='break-line' />
                <Typography>
                  {project.description}
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <button
                  type='button'
                  className='edit-btn'
                // onClick={ }
                >
                  Go into Detail
                </button>
              </AccordionActions>
            </Accordion>
          );
        })}

      </Container >
    </>
  );
}

export default EnrolledProjectAccordion;
