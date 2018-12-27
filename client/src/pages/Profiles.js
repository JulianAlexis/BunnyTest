import React, { Component } from 'react';
import { getLinkedinProfile} from '../utils/api';
import {MyProfile} from '../components/MyProfile';


// consumir API para traer el detalle del post
// https://jsonplaceholder.typicode.com/posts/:id

// Consumir API para traer el detalle del post https://jsonplaceholder.typicode.com/posts/:id



export default class Profile extends Component {
  
  componentWillMount() {
    console.log("se va a montar el componente perfiles");
    getLinkedinProfile()
      .then( response => {
        this.setState({
          name:response.data.name,
          surname: response.data.surname,
        })
        console.log("la respuesta de la api es ", response);
      })
      .catch(error => console.log(error));
  };

  // constructor(){
  //   this.state={
  //     name: " ",
  //     surname: " "
  //   }
  // }

  render() {
    return (  
      <MyProfile />
    );
  }
}

  