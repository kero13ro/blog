require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  // rootValue: root,
  graphiql: true,
}));

mongoose.connect(`mongodb+srv://kero13:${process.env.PASS}@cluster0.gju3hgz.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  }
).then((res)=>{
  app.listen(4000);
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');

}).catch((err)=>{
  console.log(err)
})

// mutation {
//   CreateUser(name: "bbb",age: 13) {
//     id,
//     name
//   }
// }
