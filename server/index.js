const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise-native');
const config = require('./config/config').get(process.env.NODE_ENV);
const {requestLinkedinToken, getLinkedinProfile} = require('./requests');

const app = express();
app.use(bodyParser.json());

// Import the axios library, to make HTTP requests
//const axios = require('axios')

//this is to prevent CORS Error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',(req, res)=>{
  res.redirect('http://localhost:3000/'); 
})


var perfilLinkedin={
  "nombre": "",
  "apellido": ""
}

app.get('/linkedin/auth',(req,res)=>{
  //obtengo código de linkedin para solicitar el token
  let requestToken = req.query.code;
  requestLinkedinToken(requestToken)
  .then((response)=>{
    let accessToken = JSON.parse(response).access_token;
    getLinkedinProfile(accessToken)
    .then((response)=>{     

      let linkedInProfile=JSON.parse(response);
      perfilLinkedin.nombre = linkedInProfile.firstName['localized'].es_ES;
      perfilLinkedin.apellido = linkedInProfile.lastName['localized'].es_ES
      
      console.log("perfil de linkedin: " ,perfilLinkedin);
      res.redirect('http://localhost:3000/myprofile/')
    })
    .catch((e)=>{
      console.log(e);
    })
  })
})

app.get('/getLinkedinProfile',(req, res)=>{
  
  let linkedinProfile = {
    name: perfilLinkedin.nombre,
    surname: perfilLinkedin.apellido
  }
  console.log("funcion devuelve perfil " , linkedinProfile);
  res.json({
    name: perfilLinkedin.nombre,
    surname: perfilLinkedin.apellido
    })
});


app.get('/getTorreProfile',(req,res)=>{
  let options = { method: 'GET',
    url: 'https://torre.bio/api/bios/jacobe55',
    headers: { 
      'content-type': 'multipart/form-data',
      'Authorization': config.TORREBIO_TOKEN
    } 
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var result = JSON.parse( body );
    let torrebioProfile = result;
    console.log("el perfil de torre bio es:" , torrebioProfile);
    res.send(result);  
  })
})

app.use(express.static(__dirname + '/public'))
app.listen(config.SERVER_PORT,()=>{
  console.log(`Server Running on ${config.SERVER_PORT}`);  
});

