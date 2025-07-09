const Task = require('../../models/taskModel');
const NotFoundException = require('../../exception/notFoundExeption');

const getAllTasks = async (_, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({ status: 'success', tasks });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch tasks",
            error: error.message
        });
    }
}

const getTaskById = async (req, res) => {
    try {
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
    } catch (error) {
        const taskErr = new Error(error);
        taskErr.status = 500;

        throw taskErr;
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            status: 'success',
            task
        });
    } catch (error) {
        res.status(400).json(
            {
                massege: "Failed to create task",
                error: error,
            }
        )
    }
}

const updateTask = async (req, res) => {
    try {
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

    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            throw new Error(`No task found with ID: ${id}`);
        }
        res.status(200).json({
            status: 'success',
            message: 'Task deleted successfully'
        });
    } catch (err) {
        res.status(404).json({
            message: err.message,
        });
    }
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}