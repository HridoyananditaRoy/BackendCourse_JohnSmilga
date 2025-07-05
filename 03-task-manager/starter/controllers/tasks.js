let tasks = [];

const getAllTasks = (req, res) => {
    res.status(200).json({ success: true, data: tasks });
};

const createNewTask = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            msg: "Please provide a task name"
        });
    }

    const newTask = {
        id: tasks.length + 1,
        name
    };

    tasks.push(newTask);

    return res.status(201).json({ success: true, data: newTask });
};

const getSingleTask = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id === Number(id));

    if (!task) {
        return res.status(404).json({
            success: false,
            msg: `No task found with id ${id}`
        });
    }

    return res.status(200).json({ success: true, data: task });
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const task = tasks.find(task => task.id === Number(id));

    if (!task) {
        return res.status(404).json({
            success: false,
            msg: `No task found with id ${id}`
        });
    }

    if (name) task.name = name;

    return res.status(200).json({ success: true, data: task });
};

const deleteTask = (req, res) => {
    const { id } = req.params;

    const task = tasks.find(task => task.id === Number(id));

    if (!task) {
        return res.status(404).json({
            success: false,
            msg: `No task found with id ${id}`
        });
    }

    tasks = tasks.filter(task => task.id !== Number(id));

    return res.status(200).json({
        success: true,
        msg: `Task with id ${id} deleted`
    });
};

module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
};
