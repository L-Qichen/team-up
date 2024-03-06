import { useState, useEffect } from 'react';
// import { switchMap } from 'rxjs/operators';
import { customFetch } from '../utils';
import Container from '@mui/material/Container';
import '../assets/css/CommonStyle.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

const CheckBoxAccordion = ({ title, user }) => {

  const [checked, setChecked] = useState([]);
  const [projects, setProjects] = useState([
    { id: 1, projectName: 'Project 1' },
    { id: 2, projectName: 'Project 2' },
    { id: 3, projectName: 'Project 3' },
  ]);

  useEffect(() => {
    const fetchLeadedProjects = async () => {
      try {
        const leadedProjectList = await customFetch.get(`project/getAllLeadedProject?userId=${user.userId}`);
        // const
        // setProjects(response.data);
      } catch (error) {
        console.error('Error fetching leaded projects:', error);
      }
    };

    fetchLeadedProjects();
  }, [user.id]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
                <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {/* 通过 project ID 获取 candidate list */}
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                      <ListItem
                        key={value}
                        secondaryAction={
                          <Checkbox
                            edge="end"
                            onChange={handleToggle(value)}
                            checked={checked.indexOf(value) !== -1}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        }
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemAvatar>
                            <Avatar
                              alt={`Avatar n°${value + 1}`}
                              src={`/static/images/avatar/${value + 1}.jpg`}
                            />
                          </ListItemAvatar>
                          <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
              <AccordionActions>
                <Grid container justifyContent="center">
                  <Grid item>
                    <button
                      type='button'
                      className='edit-btn'
                    // onClick={ }
                    >
                      Confirm
                    </button>
                  </Grid>
                </Grid>
              </AccordionActions>
            </Accordion>
          );
        })}

      </Container >
    </>
  );
}

export default CheckBoxAccordion;
