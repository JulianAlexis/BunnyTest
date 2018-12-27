import React, { Component } from 'react';
import { getLinkedinProfile, getTorreBioProfile} from '../../utils/api';
import { parse } from 'path';


export default class MyProfile extends Component {
  constructor(props){
    super(props); 
    this.state = {
      'linkedinProfile': {
        'nombre':'julian',
        'apellido':'correa'
      },
      'torreBioProfile': {
        'id':"t1",
        'publicId':"t2",
        'name':"t3",
        'email':"t4",
        'professionalHeadline':"t5",
        'picture':"t6",
        'location':"t7"
      },
      'merge':{}
    };   
  }

  componentWillMount() {
    console.log("se va a montar el componente perfiles");
    getLinkedinProfile()
      .then( response => {
        this.setState({
          linkedinProfile: response.data
        })
        console.log("el response de linkedin es ", response.data);
      })
      .catch(error => console.log(error));
    getTorreBioProfile()
    .then (response =>{
      this.setState({
        torreBioProfile: response.data.person
      })
      console.log("el response de torre Bio es ", response.data.person);

    })
    
  };
  
  renderItes=()=>{
    const { itemslin}= this.state.linkedinProfile;
    const { itemsbio}= this.state.torreBioProfile;
    const merge = { ...this.state.linkedinProfile, ...this.state.torreBioProfile};
    

    return merge;
    console.log("objetos mezclados " , merge);
  }

  render() {    
    const { linkedinProfile } = this.state;
    let data = this.renderItes();

    return (
      <React.Fragment>
        <div className="post-preview">
          <p>Estamos viendo el perfil</p>
        <div><pre>{JSON.stringify(data, null, 2) }</pre></div>;
          <p>  {linkedinProfile.name} {linkedinProfile.surname} </p>
      
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
