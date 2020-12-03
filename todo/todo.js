const fs = require('fs');

let tasks = [];

const saveDB = () => {
    let data = JSON.stringify(tasks);
    const txt = new Uint8Array(Buffer.from(data));
    fs.writeFile(`db/data.json`, txt, (err) => {
        if (err)
            throw new Error('No se pudo guardar', err);
    });
}

const chargeDB = () => {
    try {
        tasks = require('../db/data.json');
    } catch (err) {
        tasks = [];
    }

}

const newTask = (description) => {
    chargeDB();
    let todo = {
        description,
        ok: false
    };

    tasks.push(todo);
    saveDB();
    return todo;
}

const listTasks = () => {
    chargeDB();
    return tasks;
}

const updateTask = (description, ok = true) => {
    chargeDB();
    let index = tasks.findIndex(task => task.description === description);
    if (index >= 0) {
        tasks[index].ok = ok;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const removeTask = (description) => {
    chargeDB();
    let newTasks = tasks.filter(task => task.description !== description);

    if (newTasks.length != tasks.length) {
        tasks = newTasks;
        saveDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    newTask,
    listTasks,
    updateTask,
    removeTask
}