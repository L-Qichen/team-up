import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { currentUserContext } from '../App'
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
      navigate("/prize-wheel");
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
      navigate("/prize-wheel");
    } else {
      alert("User does not exist");
    }
  }

  const handleSwitch = () => {
    setHasAccount(!hasAccount);
  }

  return (
    <div className='component-container'>
      <h1>{hasAccount ? "Login Form" : "Registration Form"}</h1>
      <form className='registration-form'
        onSubmit={handleSubmit}
        style={{ display: hasAccount ? 'none' : 'grid' }}
      >

        <label htmlFor='name'>Name: </label>
        <input type='text'
          id='name'
          className='name'
          name='name'
          value={user.name}
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

        <button type='submit' className='btn'>Submit</button>
      </form>

      <form className='login-form'
        onSubmit={handleLogin}
        style={{ display: hasAccount ? 'grid' : 'none' }}
      >

        <label htmlFor='userName'>Name: </label>
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

        <button type='submit' className='btn'>Login</button>
      </form>

      <button className='switch-btn'
        onClick={handleSwitch}
      >
        {hasAccount ? "Registration" : "Login"}
      </button>
    </div>
  );
};

export default Login