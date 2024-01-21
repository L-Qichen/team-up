import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Header, Footer } from '../components'

const MyProjects = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box>
          <Typography variant="h4"
            gutterBottom
            sx={{
              fontWeight: "700",
              fontSize: "25px"
            }}
          >
            General Information
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ marginBottom: '2rem' }}
          >
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default MyProjects;