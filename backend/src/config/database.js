const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://quebramedos:81286817@cluster0-vtoix.gcp.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  try {
    const collection = client.db("admin").collection("todolist");
  } catch (error) {
    console.log(error)
  }
  console.log(err)
  // perform actions on the collection object
  client.close();
});