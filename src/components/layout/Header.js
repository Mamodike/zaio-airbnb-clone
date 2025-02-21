import React from 'react';
import './Header.css'; 
import { Avatar } from '@mui/material';
import { openModal } from '../../actions/modalAction';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login';
import { logout } from '../../actions/userActions';
import { Link } from 'react-router-dom';

const Header = () => {
  
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandler = () => {
    dispatch(openModal('open', <Login />))
  }

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div className='header'>
      <Link to='/'>
      <img src='https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo-500x281.png' alt=''
          className='header-logo' />
        </Link>
      <div className='header-center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header-right'>
        <p>Become a host</p>
        <LanguageIcon />
        <div className='dropdown'>
          <ExpandMoreIcon className='dropbtn' />
          <div className='dropdown-content'>
            {userInfo ? (
              <>
                <span>Account</span>
                <span onClick={logoutHandler}>Logout</span>
              </>): (<>
                <span>Sign Up</span>
                <span onClick={openModalHandler}>Login</span>
              </>)}
            <span>Help</span>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Header
