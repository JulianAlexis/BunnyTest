import axios from 'axios';
import * as consts from '../config/constants';

export function getLinkedinProfile(){
  return axios({
    method:'get',
    url: 'http://localhost:3001/getLinkedinProfile',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    }
  })
}

export function getTorreBioProfile(){
  return axios({
    method:'get',
    url: 'http://localhost:3001/getTorreProfile',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
}

