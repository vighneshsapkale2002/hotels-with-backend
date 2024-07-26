const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const MenuItem = require('./models/MenuItem')


app.get('/', function (req, res) {
    res.send('Welcome To My Hotel ... How I Can Help You')
})

// Import Routes File .

const personRoutes = require('./routes/personRoutes');

// Use The Routes.

app.use('/person', personRoutes);

app.listen(3000, () => {
    console.log('Listening port on 3000');
})











// This Is First Way To Declear data in mongoose.

// newPerson.name = data.name;
// newPerson.age = data.age;
// newPerson.mobile = data.mobile;
// newPerson.email = data.email;
// newPerson.address = data.address;
// newPerson.work = data.work;
















































// app.get('/chicken', (req, res) => {
//     res.send('Yes Available For Chicken... !')
// })

// app.post('/items', (req, res) => {
//     res.send("Data is Saved");
// })

// app.get('/idli', (req, res) => {
//     var customized_idli = {
//         name: 'rava idli',
//         size: '10 cm diameter',
//         is_sambhar: true,
//         is_chutney: false
//     }
//     res.send(customized_idli)
// })