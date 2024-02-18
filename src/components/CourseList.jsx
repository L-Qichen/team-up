import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../assets/css/CourseList.css'

const CourseList = () => {
  const [projects, setProjects] = useState([
    { id: 1, projectName: 'Radar System for Indoor Health Monitoring (A)' },
    { id: 2, projectName: 'Radar System for Indoor Health Monitoring (B)' },
    { id: 3, projectName: 'Radar System for Indoor Health Monitoring (C)' },
    { id: 4, projectName: 'Radar System for Indoor Health Monitoring (D)' },
    { id: 5, projectName: 'Radar System for Indoor Health Monitoring (E)' },
  ]);

  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 4 }}>
        {projects.map((project) => {
          return (
            <Paper
              key={project.id}
              className='paper-container'
              elevation={0}
              sx={{
                my: 1,
                mx: 'auto',
                p: 2,
                marginBottom: '1.5rem',
              }}
            >
              <Grid container wrap="nowrap" spacing={3}>
                <Grid item>
                  <Avatar
                    sx={{
                      background: '#00796b',
                      width: '64px',
                      height: '64px',
                    }}
                    variant='square'
                  >
                    {project.projectName[0]}
                  </Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>
                    {project.projectName}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          )
        })}
      </Box>
    </>
  );
}

export default CourseList;