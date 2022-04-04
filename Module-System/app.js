const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv[2];
// console.log(process.argv);
yargs.version('1.2.0');
// console.log(yargs.argv);


yargs.command({
    command:'add',
    describe: 'add a note',
    handler: function (){
        console.log(chalk.red('adding notes'));
    }
})
yargs.command({
    command:'remove',
    describe: 'remove note',
    handler: function (){
        console.log(chalk.red('removing note'));
    }
})
yargs.command({
    command:'list',
    describe: 'list all note',
    handler: function (){
        console.log(chalk.red('listing note'));
    }
})
yargs.command({
    command:'read',
    describe: 'read a note',
    handler: function (){
        console.log(chalk.red('reading note'));
    }
})

yargs.parse()
// if (command == 'add') {
//     console.log(chalk.green('Adding notes'));
// }
// else if (command == 'remove'){
//     console.log(chalk.red('Removing notes'));
// }