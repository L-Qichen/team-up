import { useState } from 'react';
import Container from '@mui/material/Container';
import '../assets/css/CommonStyle.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditUserInfoDialog from './EditUserInfoDialog';

const UserDetails = () => {

  const [user, setUser] = useState({
    firstName: 'FirstName',
    lastName: 'LastName',
    username: 'Toby',
    userRole: 'student',
    email: '10442734856@gmail.com'
  });

  const [opnDialogName, setOpenDialogName] = useState(null);

  const closeDialog = () => {
    setOpenDialogName(null);
  };

  const openEditUserInfoDialog = () => {
    setOpenDialogName('UserInfo');
  }

  return (
    <>
      <Container maxWidth="md">
        <h2 className='h2-title'>
          User Details
        </h2>
        <div className='break-line' />
      </Container>

      <Container maxWidth="md">
        <Accordion defaultExpanded
          sx={{ outline: '1px solid rgba(0,0,0,.2)' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6">
              Personal Info
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container alignItems="center">
              <Grid item xs={3} md={2}>
                <Typography>
                  First Name:
                </Typography>
              </Grid>
              <Grid item xs={9} md={10}
                sx={{ color: '#666' }}
              >
                <Typography>
                  {user.firstName}
                </Typography>
              </Grid>

              <Grid item xs={3} md={2}>
                <Typography>
                  Last Name:
                </Typography>
              </Grid>
              <Grid item xs={9} md={10}
                sx={{ color: '#666' }}
              >
                <Typography>
                  {user.lastName}
                </Typography>
              </Grid>

              <Grid item xs={3} md={2}>
                <Typography>
                  User Name:
                </Typography>
              </Grid>
              <Grid item xs={9} md={10}
                sx={{ color: '#666' }}
              >
                <Typography>
                  {user.username}
                </Typography>
              </Grid>

              <Grid item xs={3} md={2}>
                <Typography>
                  User Role:
                </Typography>
              </Grid>
              <Grid item xs={9} md={10}
                sx={{ color: '#666' }}
              >
                <Typography>
                  {user.userRole}
                </Typography>
              </Grid>

              <Grid item xs={3} md={2}>
                <Typography>
                  Email:
                </Typography>
              </Grid>
              <Grid item xs={9} md={10}
                sx={{ color: '#666' }}
              >
                <Typography>
                  {user.email}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
          <AccordionActions>
            <Grid container justifyContent="center">
              <Grid item>
                <button
                  type='button'
                  className='edit-btn'
                  onClick={openEditUserInfoDialog}
                >
                  Edit
                </button>
                <EditUserInfoDialog open={opnDialogName === 'UserInfo'} onClose={closeDialog} user={user} />
              </Grid>
            </Grid>
          </AccordionActions>
        </Accordion>
      </Container >
    </>
  );
}

export default UserDetails;
