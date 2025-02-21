import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { login } from '../actions/userActions';
import { openModal } from '../actions/modalAction';

const Login = () => {
  
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(openModal('closed', ''));
    }
  }, [dispatch, userInfo]);

   const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className='login-form'>
      <h2>Login or Sign up </h2>
        {error && <h2>{error}</h2>}
      {loading && <h2>Loading ....</h2>}
      <form onSubmit={submitLogin}>
        <button className='facebook-login'>Connect With Facebook</button>
        <button className='google-login'>Connect With Google</button>
        <div className='login-or-center'>
          <span>or</span>
          <div className='or-divider'></div>
        </div>
        <input
          type='email'
          value={email}
          className='browser-default'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email' />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='browser-default'
          placeholder='Password' />
        <button className='sign-up-button'>Sign In</button>
        <div className='divider'></div>
        <div>Don't have an account? Sign Up</div>
        <button className='sign-up-button'>Sign Up</button>
      </form>
    </div>
  )
}

export default Login;
