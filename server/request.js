var request = require("request");

var options = { method: 'POST',
  url: 'https://www.linkedin.com/oauth/v2/accessToken',
  qs: 
   { client_id: '78s8t0db8vcjsk',
     client_secret: 'DBe7yKyda0zRvrHj',
     grant_type: 'authorization_code',
     redirect_uri: 'http://208.76.84.102:3000/linkedin/auth',
     code: 'AQQpdtyvwRcXTKEd3FE44bl5OiunYCPtLttes8wFEIYOSnj3QlqkSWol9mtP2xVOow6BZ17RAxR2qaD2cAPKNMhjCXW0SnWfZRzjjeYTAgxN5igsPdGpEhFx7nC3S7O27XrRjVweuaKMhTe6C9TtyGaMh0r-ElF8pBvfuxP8oBNvACCS8Yt8H1GUrfzYTA' },
  headers: 
   { 'postman-token': '7f855417-0267-88a1-bac6-90192f8249ed',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


_______________________



POST /oauth/v2/accessToken?client_id=78s8t0db8vcjsk&amp;client_secret=DBe7yKyda0zRvrHj&amp;grant_type=authorization_code&amp;redirect_uri=http://208.76.84.102:3000/linkedin/auth&amp;code=AQQpdtyvwRcXTKEd3FE44bl5OiunYCPtLttes8wFEIYOSnj3QlqkSWol9mtP2xVOow6BZ17RAxR2qaD2cAPKNMhjCXW0SnWfZRzjjeYTAgxN5igsPdGpEhFx7nC3S7O27XrRjVweuaKMhTe6C9TtyGaMh0r-ElF8pBvfuxP8oBNvACCS8Yt8H1GUrfzYTA HTTP/1.1
Host: www.linkedin.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Cache-Control: no-cache
Postman-Token: e90c591f-e1d5-6f9a-19a3-8004199c8295

------WebKitFormBoundary7MA4YWxkTrZu0gW--


______________________________-




  // axios({
  //   // make a POST request
  //   method: 'post',
  //   // to the Linkedin authentication API, with the client ID, client secret
  //   // and request token
  //   url: `https://www.linkedin.com/oauth/v2/access_token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=${grant_type}&redirect_uri=${redirect_uri}&code=${requestToken}`,
  //   // Set the content type header, so that we get the response in JSOn
  //   headers: {
  //       'accept': 'application/json',
  //       'cache-control': 'no-cache',
  //       'content-type': 'application/x-www-form-urlencoded'
  //   }
  // }).then((response) => {
  //   // Once we get the response, extract the access token from
  //   // the response body
  //   const accessToken = response.data.access_token
  //   // redirect the user to the welcome page, along with the access token
  //   console.log("token")
  //   console.log(accessToken)
  //   res.redirect(`/welcome.html?access_token=${accessToken}`)

  // }).catch((err)=>{

  //   console.log("status : ",err.status);
  //   console.log("serviceErrorCode: " , err.serviceErrorCode);
  //   console.log("message: " , err.message);

  //   if(err.response){
  //     console.log("Data error: ", err.response.data);
  //     console.log("status error: ", err.response.status);
  //     console.log("headers error: ", err.response.headers);
  //   }else if (err.request) {
  //     // The request was made but no response was received
  //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //     // http.ClientRequest in node.js
  //     console.log("Request error: ", err.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log('Error message: ', err.message);
  //   }
  // })