import fetch from "node-fetch";
// import faunadb from "faunadb";
// import getId from "./utils/getId";
// import hostInfo from "./utils/hostInfo";

// const q = faunadb.query

exports.handler = async (event, context) => {

  // const client = new faunadb.Client({
  //   secret: process.env.FAUNADB_SERVER_SECRET
  // }) 

  const authorization = event.headers.authorization;
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
  .then(async function(resSuccess) {
    return_value = resSuccess.json();
   })
  .then(async function(resError) {
    return_value = resError;
   })

  let data = return_value
  // const data = hostInfo(authorization)
  const userId = data.id;

  return {
    statusCode: 200,
    body: "d" + userId
  }

  // console.log(`Function 'todo-read' invoked. Read id: ${id}`)
  // return client.query(q.Get(q.Ref(`classes/todos/${id}`)))
  //   .then((response) => {
  //     console.log('success', response)
  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify(response)
  //     }
  //   }).catch((error) => {
  //     console.log('error', error)
  //     return {
  //       statusCode: 400,
  //       body: JSON.stringify(error)
  //     }
  //   })
};
