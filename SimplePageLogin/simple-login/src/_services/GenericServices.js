import Axios from "axios";

function callPost(url, body, headers) {
  console.log('inizio call post')
  return Axios.post(url, body, headers)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

function callGet(url, body, headers) {
  return Axios.get(url, headers)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

function callPostSync(url, body, headers) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4){
          if (xhr.status === 200) {
              console.log("fine call")
          }
          else{
              console.log(xhr.status);
              console.log(xhr.responseText);
          }
        }
    }
    console.log("inizio send");
    xhr.open("POST", url, false);
    xhr.send(body);
    console.log("fine send");
    return xhr;
}

function callGetSync(url, headers) {
  return Axios.post(url, headers)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}


const GenericServices = {
    callPost,
    callGet,
    callPostSync,
    callGetSync
  };
  
export default GenericServices;
