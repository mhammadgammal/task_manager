const Task = require('../../models/taskModel');

const getAllTasks = (req, res) => {
    res.status(200).json({
        message: 'Get all tasks'
    });
}

const getTaskById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `Get task with ID: ${id}`
    });
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(400).json(
            {
                massege: "Failed to create task",
                error: error,
            }
        )
    }
}

const updateTask = (req, res) => {
    res.status(200).json({
        message: 'Update a task'
    });
}

const deleteTask = (req, res) => {
    res.status(200).json({
        message: 'Delete a task'
    })
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}