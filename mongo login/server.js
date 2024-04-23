const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/registrationDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const registrationSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  gender: String
});

const Registration = mongoose.model('Registration', registrationSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/regis', (req, res) => {
  res.sendFile(__dirname + '/registeration.html');
});


// Handle form submission
app.post('/regis', (req, res) => {
  const { username, email, password, gender } = req.body;

  const newRegistration = new Registration({
    username,
    email,
    password,
    gender
  });

  newRegistration.save()
    .then(() => {
      res.send('User registered successfully');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error registering user');
    });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  Registration.findOne({ username, password })
    .then(user => {
      if (user) {
        res.send('Login successful!');
      } else {
        res.send('Invalid username or password');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error during login');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
