import GenericServices from './GenericServices'

function checkLogin(username, password) {
    var xhr;

    const requestOptions = {
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'fake_token',
        'Access-Control-Allow-Origin' : 'http://localhost:8080'
      }
    };
    console.log('inizio call');
    xhr = GenericServices.callPostSync("http://localhost:9090/checkLogin", {'user' : username, 'pwd' : password}, requestOptions);
    console.log('fine call');
    console.log(xhr);
    console.log(xhr.statusText);
    return xhr.statusText;
  }


export const LoginServices = {
  checkLogin
};


