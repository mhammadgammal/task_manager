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
const createTask = (req, res) => {
    res.status(201).json({
        message: 'Create a new task'
    });
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