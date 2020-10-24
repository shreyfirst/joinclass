/* Import faunaDB sdk */
const faunadb = require('faunadb')
const getId = require('./utils/getId')
const hostInfo = require('./utils/hostInfo')
const q = faunadb.query

exports.handler = (event, context) => {

  // const client = new faunadb.Client({
  //   secret: process.env.FAUNADB_SERVER_SECRET
  // }) 

  const authorization = event.headers.authorization;
  const data = hostInfo(authorization)
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
}
