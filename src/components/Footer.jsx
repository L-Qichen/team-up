import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../assets/css/Footer.css'

const Footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        background: '#001f3f',
      }}
    >
      <Container maxWidth="sm">
        <Typography align="center" variant="body2" color="#ffffff">
          {'©'}
          {new Date().getFullYear()}
          {'.'}
          {' All Rights Reserved. Designed by Toby.'}
        </Typography>
      </Container>
    </Box >
  );
}

export default Footer;