const Task = require('../../models/taskModel');
const NotFoundException = require('../../exception/notFoundExeption');

const getAllTasks = async (_, res) => {
    res.status(200).json({ status: 'success', tasks });
}

const getTaskById = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id)
    if (!task) {
        console.error(`No task found with ID: ${id}`);

        throw new NotFoundException(`No task found with ID: ${id}`);
    }
    res.status(200).json({
        status: 'success',
        task: task
    });

}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({
        status: 'success',
        task
    });
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    console.log(`Updating task with ID: ${id}`, req.body);

    const task = await Task.findByIdAndUpdate({ _id: id }, req.body,
        {
            new: true,
            runValidators: true
        })

    if (!task) {
        throw new Error(`No task found with ID: ${id}`);
    }

    res.status(200).json({
        status: 'success',
        task
    });
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
        throw new Error(`No task found with ID: ${id}`);
    }
    res.status(200).json({
        status: 'success',
        message: 'Task deleted successfully'
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}