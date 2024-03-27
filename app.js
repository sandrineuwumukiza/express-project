const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDb = require('./db/connection')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json());

// app.get('/hello',(req,res)=>{
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks',tasks)

// app.get('/api/v1/tasks')  //get all tasks
// app.post('/api/v1/tasks')  //create all tasks
// app.get('/api/v1/tasks/:id') //get single task
// app.patch('/api/v1/tasks/:id') //update single task
// app.delete('/api/v1/tasks/:id') //delete task

const port = 4000;

const start = async () =>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`server is running at port ${port}`));

    }catch(err){
        console.log(err)

    }
}
start();