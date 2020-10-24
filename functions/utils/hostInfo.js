module.exports = function hostInfo(access_token) {
  import fetch from "node-fetch";

  let api_endpoint = 'https://api.zoom.us/v2/users/me'
  let payload = {  
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token,
      'Host': 'api.zoom.us'
    }
  }
  let return_value;

  await fetch(api_endpoint, payload)  
  .then(function(resSuccess) {
    return_value = resSuccess.json();
   })
  .then(function(resError) {
    return_value = resError;
   })

  return return_value
}
