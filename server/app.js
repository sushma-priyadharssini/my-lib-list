const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

//replace the uri string with your connection string.
const uri = "mongodb+srv://admin:Password@cluster0-lifwk.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  }, function(err, client){
  if(err){
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  else {
      console.log('connected to database');
      //const collection = client.db("graphql").collection("books");
  }
});


// bind express with graphql
// one single end point
// middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
