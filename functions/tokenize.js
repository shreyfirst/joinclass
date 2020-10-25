
// const getId = require('./utils/getId')
// const hostInfo = require('./utils/hostInfo')
// const q = faunadb.query

exports.handler = async (event, context) => {
  
  const fetch = require("node-fetch")

  const body = JSON.parse(event.body);
  const code = body.code;

  // const client = new faunadb.Client({
  //   secret: process.env.FAUNADB_SERVER_SECRET
  // }) 

  const authorization = event.headers.authorization;
  const access_token = authorization.replace('Bearer ', '')
  const encodedAuth = btoa("VWaT69z9TrarRZlBKtRGTg:IFzc4TKbHX5A2z3ntfGC7Nra7u69u5B2");

  let api_endpoint = "https://zoom.us/oauth/token" + $.param({
    grant_type: "authorization_code", 
    code: code,
    redirect_uri: "https://joinclass.org/dashboard"
  })
  let payload = {  
    method: 'POST',
    authentication: encodedAuth
    }
  
  let result;

  await fetch(api_endpoint, payload)  
  .then(async function(resSuccess) {
    result = resSuccess.json();
   })
  .then(async function(resError) {
    result = resError;
   })

  let data = result
  // const data = hostInfo(authorization)
  // const userId = data.id;

  return {
    statusCode: 200,
    body: "d" + JSON.stringify(data)
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
}
