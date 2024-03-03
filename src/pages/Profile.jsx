import { useState } from 'react';
import {
  Header,
  Footer,
  UserDetails,
  CheckBoxAccordion,
  EnrolledProjectAccordion
} from '../components'
import Container from '@mui/material/Container';
import '../assets/css/CommonStyle.css'

const Profile = () => {
  const [user, setUser] = useState({
    firstName: 'FirstName',
    lastName: 'LastName',
    username: 'Toby',
    userRole: 'student',
    email: '10442734856@gmail.com'
  });

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <h1 className='title'>
          Profile
        </h1>
        <div className='break-line' />
      </Container>

      <UserDetails user={user} />

      <CheckBoxAccordion title='Leaded Projects' user={user} />

      <EnrolledProjectAccordion title='Enrolled Projects' user={user} />
      <Footer />
    </>
  );
}

export default Profile;
