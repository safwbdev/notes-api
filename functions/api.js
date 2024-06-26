const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
// const { demodata } = require('../data');


const demodata = require("../data.json");
// const demodata = [

//     {
//         id: 1,
//         title: 'Doctor',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit ligula, tempor eu ipsum vel, convallis pharetra metus. Phasellus lobortis, nisl non suscipit fermentum, lacus ligula ultricies nibh, sit amet lacinia nunc leo quis enim. ',
//         listContent: [],
//         archived: true
//     },
//     {
//         id: 2,
//         title: 'Dentist',
//         content: 'Quisque et laoreet dui. Curabitur faucibus eleifend ornare. Vestibulum rhoncus risus sit amet fringilla placerat. Duis justo nisl, scelerisque at quam eget, finibus aliquam ipsum. Nullam efficitur luctus vulputate. Suspendisse tincidunt euismod auctor. Etiam ornare laoreet egestas. Nullam tempor lobortis varius. In sed dolor mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris fringilla ante id tortor dapibus, quis feugiat nulla elementum.',
//         listContent: [],
//         archived: false
//     },
//     {
//         id: 3,
//         title: 'Football game',
//         content: 'Quisque ullamcorper leo vel metus scelerisque rhoncus. Proin hendrerit sed magna posuere porta. Fusce risus ligula,',
//         listContent: [],
//         archived: false
//     },
//     {
//         id: 4,
//         title: 'Office Meeting',
//         content: 'pharetra eu risus eget, sagittis tincidunt est. Aenean eget ex felis. Nullam porta interdum justo, eu tincidunt ipsum mollis quis. Maecenas sed ultrices metus, eget tristique nibh. Quisque molestie nisl justo, sodales suscipit nunc congue in. Vivamus scelerisque in nisl ut sollicitudin. Cras commodo mauris nec neque varius, non congue leo consequat.',
//         listContent: [],
//         archived: false
//     },
//     {
//         id: 5,
//         title: 'Shopping List',
//         content: null,
//         listContent: [
//             {
//                 lId: 101,
//                 text: 'Bananas',
//                 completed: false
//             },
//             {
//                 lId: 102,
//                 text: 'Apples',
//                 completed: true
//             },
//             {
//                 lId: 103,
//                 text: 'Grapes',
//                 completed: false
//             },
//             {
//                 lId: 104,
//                 text: 'Milk',
//                 completed: true
//             },
//             {
//                 lId: 105,
//                 text: 'Eggs',
//                 completed: false
//             },
//         ],
//         archived: false
//     },
// ]

const app = express();

app.use(cors());

const router = express.Router();

let record = [];

// Get all entries
router.get('/', (req, res) => {
    res.send('App is running...')
});

// create new entry
router.post('/add', (req, res) => {
    res.send('New entry has been added')
});
// delete new entry
router.delete('/', (req, res) => {
    res.send('Entry has been deleted')
});
// update an entry
router.put('/', (req, res) => {
    res.send('Entry has been update')
});
// demo data
router.get('/demo', (req, res) => {
    res.json(demodata)
});
// get data by id
router.get('/getOne/:id', (req, res) => {
    const result = demodata.filter(re => re.id === Number(req.params.id))
    res.json(result);

})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);