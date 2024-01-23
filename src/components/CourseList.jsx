import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../assets/css/CourseList.css'

const CourseList = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 4 }}>
        <Paper
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
                R
              </Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>
                Radar System for Indoor Health Monitoring (A)
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper
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
                R
              </Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>
                Radar System for Indoor Health Monitoring (A)
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
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
                R
              </Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>
                Radar System for Indoor Health Monitoring (A)
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
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
                R
              </Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>
                Radar System for Indoor Health Monitoring (A)
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
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
                R
              </Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>
                Radar System for Indoor Health Monitoring (A)
              </Typography>
            </Grid>
          </Grid>
        </Paper>

      </Box>
    </>
  );
}

export default CourseList;