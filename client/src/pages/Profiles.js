import React, { Component } from 'react';
import { getLinkedinProfile} from '../utils/api';
import {MyProfile} from '../components/MyProfile';


export default class Profile extends Component {
  

  render() {
    return (  
      <MyProfile />
    );
  }
}

  