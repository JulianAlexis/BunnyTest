import React, { Component } from 'react';
import { getLinkedinProfile, getTorreBioProfile} from '../../utils/api';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

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
    getLinkedinProfile()
      .then( response => {
        this.setState({
          linkedinProfile: response.data
        })
      })
      .catch(error => console.log(error));
    getTorreBioProfile()
    .then (response =>{
      this.setState({
        torreBioProfile: response.data.person
      })
    })    
  };
  
  renderItes=()=>{
    const merge = { ...this.state.linkedinProfile, ...this.state.torreBioProfile};
    
    console.log("objetos mezclados " , merge);
    return merge;
  }

  render() {    
    let data = this.renderItes();

    return (
      <React.Fragment>
        <div className="post-preview">
          <p>Perfil combinado de LinkedIn y TorreBio</p>
          <Table>
           
              <Tr>
                <Th>Id</Th>
                <Td>{data.id}</Td>
              </Tr>
              <Tr>
                <Th>PublicId</Th>
                <Td>{data.publicId}</Td>
              </Tr>
              <Tr>
                <Th>Name</Th>
                <Td>{data.name}</Td>
              </Tr>
              <Tr>
                <Th>Surname</Th>
                <Td>{data.surname}</Td>
              </Tr>
              <Tr>
                <Th>Email</Th>
                <Td>{data.email} </Td>
              </Tr>
              <Tr>
                <Th>Profession</Th>
                <Td>{data.professionalHeadline} </Td>
              </Tr>
              <Tr>
                <Th>Location</Th>
                <Td>{data.location} </Td>
              </Tr>          
          </Table>
      
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
