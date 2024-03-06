import { useState, useContext } from 'react'
import { Form, useNavigate } from 'react-router-dom';
import { currentUserContext } from '../App'
import { Button } from '../components';
import { customFetch } from '../utils';
import '../assets/css/Login.css'

export const action = async ({ request }) => {
  const formData = await request.formData();
  // must send JSON object here
  // otherwise request will send twice(POST + OPTION)
  const data = JSON.stringify(Object.fromEntries(formData));
  console.log(data);
  try {
    const response = await customFetch.post('/user/login', data);
    return redirect('/');
  } catch (error) {
    console.log(error);
    return null;
  }
};


const Login = () => {
  const { currentUser, currLogin } = useContext(currentUserContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [hasAccount, setHasAccount] = useState(false);
  const [storedUser, setStoredUser] = useState({
    user_name: "",
    password: "",
  });

  const handleRegistrationInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleLoginInputChange = (e) => {
    setStoredUser({
      ...storedUser,
      [e.target.name]: e.target.value,
    })
  }

  const handleSwitch = () => {
    setHasAccount(!hasAccount);
  }

  // const handleLogin = (event) => {
  //   action(storedUser);
  // }

  return (
    <>
      <h2>{hasAccount ? "Sign in to Team Up" : "Create an Account"}</h2>
      <div className='component-container'>
        <Form className='registration-form'
          method='post'
          style={{ display: hasAccount ? 'none' : 'grid' }}
        >

          <label htmlFor='firstName'>First Name: </label>
          <input type='text'
            id='firstName'
            className='firstName'
            name='firstName'
            value={user.firstName}
            onChange={handleRegistrationInputChange} />

          <label htmlFor='lastName'>Last Name: </label>
          <input type='text'
            id='lastName'
            className='lastName'
            name='lastName'
            value={user.lastName}
            onChange={handleRegistrationInputChange} />

          <label htmlFor='email'>Email: </label>
          <input type='email'
            id='email'
            className='email'
            name='email'
            value={user.email}
            onChange={handleRegistrationInputChange} />

          <label htmlFor='password'>Password: </label>
          <input type='password'
            id='password'
            className='password'
            name='password'
            value={user.password}
            onChange={handleRegistrationInputChange} />

          <Button text="continue" buttonStyle="green-btn" />
        </Form>

        <Form className='login-form'
          method='post'
          style={{ display: hasAccount ? 'grid' : 'none' }}
        >

          <label htmlFor='user_name'>User Name: </label>
          <input type='text'
            id='user_name'
            className='userName'
            name='user_name'
            value={storedUser.user_name}
            onChange={handleLoginInputChange} />

          <label htmlFor='password'>Password: </label>
          <input type='password'
            id='password'
            className='userPassword'
            name='password'
            value={storedUser.password}
            onChange={handleLoginInputChange} />

          <Button text="Sign in" buttonStyle="blue-btn" />
        </Form>

        <div className='switch-btn-container'>
          <p>
            {hasAccount ? "Not a member yet?" : "Already have an account?"}
          </p>

          <button className='switch-btn'
            onClick={handleSwitch}
          >
            {hasAccount ? "Create an account" : "Sign in"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login