
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

  const encodedAuth = Buffer.from("VWaT69z9TrarRZlBKtRGTg:IFzc4TKbHX5A2z3ntfGC7Nra7u69u5B2").toString('base64')
  
  let api_endpoint = "https://zoom.us/oauth/token?grant_type=authorization_code&code=" + code + "&redirect_uri=https://joinclass.org/auth"
  
  let payload = {  
    method: 'POST',
    headers: {
      Authorization: "Basic " + encodedAuth
    }
  }
  
  let zoom_return;
  let token_return;

  await fetch(api_endpoint, payload)  
  .then(async function(res) {
    zoom_return = await res.json();
   })

  if (zoom_return.error) {
    token_return = {
      statusCode: 401
    }
  }
  else if (zoom_return.access_token) {
    token_return = {
      statusCode: 200,
      headers: {
        'Set-Cookie': 'token=' + JSON.stringify(zoom_return.access_token)
      }
    }
  }
  else {
    token_return = {
      statusCode: 500,
      body: "We are not sure what happened here. We're looking into it right now."
    }  
  }

  console.log(JSON.stringify(zoom_return))

  // const data = hostInfo(authorization)
  // const userId = data.id;
  
  return token_return

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