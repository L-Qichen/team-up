import { Header, Footer, UserDetails } from '../components'
import Container from '@mui/material/Container';
import '../assets/css/CommonStyle.css'

const Profile = () => {

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <h1 className='title'>
          Profile
        </h1>
        <div className='break-line' />
      </Container>

      <UserDetails />

      <Container maxWidth="md">
        <h2 className='title'>
          Leaded Projects
        </h2>
        <div className='break-line' />
      </Container>

      <Container maxWidth="md">
        <h2 className='title'>
          Enrolled Projects
        </h2>
        <div className='break-line' />
      </Container>
      <Footer />
    </>
  );
}

export default Profile;
