const request = require('request-promise-native');
const config = require('./config/config').get(process.env.NODE_ENV);


function requestLinkedinToken(requestToken){

  // var accessToken;
  // let reqTokenLin = new requestLinkedin(requestToken);

  
  // let token2= new Promise((resolve, reject)=>{
  //   requestLinkedin.token;
  // }).then((res)=>{
  //   accessToken = requestLinkedin.accessToken;
  // })

  // console.log("el token en el server es : ", accessToken);

  let options = { method: 'POST',
    url: 'https://www.linkedin.com/oauth/v2/accessToken',
    qs: { 
      client_id: config.LINKEDIN_CLIENT_ID,
      client_secret: config.LINKEDIN_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: config.LINKEDIN_REDIRECT_URL,
      code: requestToken 
    },
    headers: { 
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded' 
    } 
  };

  return request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var result = JSON.parse( body );
    accessToken = result.access_token;
    return accessToken;
    // console.log("el token en el request es: " , accessToken);
    //getLinkedinProfile(accessToken,res)
    //res.redirect(`/welcome.html?access_token=${accessToken}`)
  });

}  //fin requestLinkedinToken



function getLinkedinProfile(accessToken){
  //  console.log("el token recibido es " , accessToken);

  let options = { method: 'GET',
    url: 'https://api.linkedin.com/v2/me',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + accessToken
    } 
  };
  return request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var result = JSON.parse( body );
    return result
    // let linkedInProfile = {
    //   id:result.id,
    //   nombre: result.firstName.localized.es_ES,
    //   apellido:result.lastName.localized.es_ES
    // }
    // return linkedInProfile;
    // console.log("el perfile es : " , linkedInProfile);
    // mergeProfiles(linkedInProfile,res);
  });
}; //fin getLinkedinProfile




module.exports ={requestLinkedinToken, getLinkedinProfile};