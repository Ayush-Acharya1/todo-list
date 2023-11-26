const TodoModel = require("../models/todo.js");

module.exports.createToDo = async (req, res) => {
    const { text } = req.body;
    await TodoModel.create({ text }).then((data) => {
        res.send(data)
    });
}

module.exports.getToDo = async (req, res) => {
    await TodoModel.find().then((task) => {
        res.send(task)
    }).catch((error) => { res.status(500).json(error) });
}

module.exports.updateToDo = async (req, res) => {
    const taskId = req.params.id;
    const { text } = req.body;
    await TodoModel.findByIdAndUpdate(taskId, { text }, { new: true })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => { console.log(error) });
}

module.exports.removeToDo = async (req, res) => {
    const taskId = req.params.id;
    await TodoModel.findByIdAndDelete(taskId)
        .then((data) => { res.status(200).json(data); })
        .catch((error) => console.log(error));
}
