const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.use(express.static('./public'));

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

//Routes
app.use('/api/v1/tasks', tasks);

//routes
// app.get('/hello',(req,res)=>{
//     res.send('Task Manager app')
// })

// app.post('/hello',(req))

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});
