// implement your API here
const express = require('express');

const { find, findById, insert, update, remove } = require('./data/db');

const app = express();

app.use(express.json());

//root?
app.get('/', (req, res) => {
  res.json('We\'re live and rocking it (o_o)');
});

//Get all users
app.get('/api/users', (req, res) => {
  find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        // message: error.message
        errorMessage: "The users information could not be retrieved."
      })
    })
})

//Get specific user by id
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "The user information could not be retrieved."
      })
    })
})

//Add new user to db
app.post('/api/users', (req, res) => {

})

//Modify user details
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;

})

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

})

app.listen(5100, () => {
  console.log('listening on port 5100');
});