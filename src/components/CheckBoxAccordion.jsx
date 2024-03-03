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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

const CheckBoxAccordion = ({ title }) => {
  const [user, setUser] = useState({
    firstName: 'FirstName',
    lastName: 'LastName',
    username: 'Toby',
    userRole: 'student',
    email: '10442734856@gmail.com'
  });

  const [checked, setChecked] = useState([]);

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
        {/* 
        这里先获取到当前 user的 leaded projects list，
        然后用map生成多个 Accordion
         */}
        <Accordion
          sx={{ outline: '1px solid rgba(0,0,0,.2)' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6">
              Project 1
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
      </Container >
    </>
  );
}

export default CheckBoxAccordion;
