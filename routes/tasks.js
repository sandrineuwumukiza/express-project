const express = require('express')
const router = express.Router()
const {getAllTasks,createTasks,updateTasks,deleteTasks} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTasks)

router.route('/:id').put(updateTasks).delete(deleteTasks)


module.exports = router