import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { currentUserContext } from '../App'
import { Button } from '../components';
import '../assets/css/Login.css'

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
    userName: "",
    userPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name == "" || user.email == "" || user.password == "") {
      alert("Please insert All three fields.");
    } else {
      const userList = JSON.parse(localStorage.getItem("userList")) || [];
      userList.push(user);
      localStorage.setItem("userList", JSON.stringify(userList));
      const users = localStorage.getItem("userList");
      console.log(users);
      setUser({
        name: "",
        email: "",
        password: "",
      });
      currLogin(user);
      // navigate("/");
    }
  }

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

  const handleLogin = () => {
    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    const existUser = userList.find(
      (element) => {
        return element.name === storedUser.userName && element.password === storedUser.userPassword;
      }
    );
    if (existUser) {
      currLogin(existUser);
      // navigate("/");
    } else {
      alert("User does not exist");
    }
  }

  const handleSwitch = () => {
    setHasAccount(!hasAccount);
  }

  return (
    <>
      <h2>{hasAccount ? "Sign in to Team Up" : "Create an Account"}</h2>
      <div className='component-container'>
        <form className='registration-form'
          onSubmit={handleSubmit}
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
        </form>

        <form className='login-form'
          onSubmit={handleLogin}
          style={{ display: hasAccount ? 'grid' : 'none' }}
        >

          <label htmlFor='userName'>User Name: </label>
          <input type='text'
            id='userName'
            className='userName'
            name='userName'
            value={storedUser.userName}
            onChange={handleLoginInputChange} />

          <label htmlFor='userPassword'>Password: </label>
          <input type='password'
            id='userPassword'
            className='userPassword'
            name='userPassword'
            value={storedUser.userPassword}
            onChange={handleLoginInputChange} />

          <Button text="Sign in" buttonStyle="blue-btn" />
        </form>

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