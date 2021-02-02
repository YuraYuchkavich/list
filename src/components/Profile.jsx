import React from 'react'
//import {connect} from 'react-redux';
import axios from 'axios';
//import { compose } from 'redux';
//import { withRouter } from 'react-router-dom';

const Profile = (props) => {
//we get id from props.match.params.userId and make request and get request all users and find  user  with our  userId in all users
//render user information
//for back link we get prev path from withRouter and make navLink for this buttom with prev path
return (
    <>
      {`${props.first_name} ${props.last_name}`}
    </>
  )
}

export default Profile
/*
export default compose(
    connect(
      null,
      null),
      withRouter
)(Profile)*/
