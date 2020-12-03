//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const todo = require('./todo/todo');

let comando = argv._[0];

switch (comando) {
    case 'new':
        let task = todo.newTask(argv.description);
        console.log(task);
        break;
    case 'list':
        let tasks = todo.listTasks();
        for (let task of tasks) {
            console.log('============= Por Hacer ================'.green);
            console.log(task.description);
            console.log('Estado: ', task.ok);
            console.log('========================================'.green);
        }
        break;
    case 'update':
        let update = todo.updateTask(argv.description, argv.ok);
        console.log(update);
        break;
    case 'remove':
        let removed = todo.removeTask(argv.description);
        console.log(removed);
        break;
    default:
        console.log('Unknow command!!');
}
/*
node app new -d "walk dog"
node app list
node app update -d "walk dog" -ok true
*/