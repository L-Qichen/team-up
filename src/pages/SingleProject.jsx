import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Header, Footer } from '../components'

const SingleProject = () => {
  const status = "project status";
  const membersRate = "8 / 10";

  return (
    <>
      <Header />

      <Container maxWidth="md">
        <Box>
          <h1 className='sp-title'>
            Single Project
          </h1>
          <Stack direction="column"
            spacing={1}
            alignItems="flex-start"
          >
            <Chip label={status} sx={{ background: '#4caf50', color: "#fff" }} />
            <Chip label={`${membersRate} members`} sx={{ background: '#2094f3', color: "#fff" }} />
          </Stack>
        </Box>
        <div className='break-line' />
      </Container>
      <div>
        <Container maxWidth="md">
          <Box>
            <Typography variant="h4"
              gutterBottom
              sx={{
                fontWeight: "700",
                fontSize: "25px"
              }}
            >
              Project Description
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: '2rem' }}
            >
              Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.

              Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.
            </Typography>
          </Box>
          <div className='break-line' />

          <Box>
            <Typography variant="h4"
              gutterBottom
              sx={{
                fontWeight: "700",
                fontSize: "25px"
              }}
            >
              Contacts
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: '2rem' }}
            >
              Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.
            </Typography>
          </Box>
          <div className='break-line' />
        </Container>
      </div >

      <Footer />
    </>
  );
};

export default SingleProject;