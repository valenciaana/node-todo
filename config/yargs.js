const description = {
    demand: true,
    alias: 'd',
    desc: 'Task description'
}

const ok = {
    default: true,
    desc: 'Status for the task'
}

const argv = require('yargs')
    .command('new', 'Make a new task with a description.', {
        description
    })
    .command('list', 'Show the tasks list', {})
    .command('update', 'Update the task status.', {
        description,
        ok
    })
    .command('remove', 'Remove a task by a description.', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}