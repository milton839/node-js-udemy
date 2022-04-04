const {addNotes, removeNotes, listNotes, readNote} = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv[2];
// console.log(process.argv);
yargs.version('1.2.0');
// console.log(yargs.argv);


yargs.command({
    command:'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body: {
            description: 'note body here',
            demandOption: true,
            type: 'string',
        }
    },

    // here we can use use directly argv.title, argv.body or destructuring title, body
    handler({title, body}){
        addNotes(title, body)
    }
})


yargs.command({
    command:'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'note removing command',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        removeNotes(argv.title);
    }
})


yargs.command({
    command:'list',
    describe: 'list all note',
    builder: {
        title: {
            describe : 'Note title',
            // demandOption: true,
            type: 'string',
        }
    },
    handler(){
        listNotes()
    }
})


yargs.command({
    command:'read',
    describe: 'read a note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        readNote(argv.title)
    }
})

yargs.parse()