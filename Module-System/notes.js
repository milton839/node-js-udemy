const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) =>{
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title:title,
            body:body,
        })
        saveNotes(notes)
        console.log("Note added successfully");
    }
    else{
        console.log("notes title already exists");
    }
    
}

const saveNotes = (notes) =>{
    const stringNotes = JSON.stringify(notes)
    fs.writeFileSync("notes.json", stringNotes);
}

const loadNotes = () =>{
    try{
        const bufferNotes = fs.readFileSync('notes.json');
        const stringNotes = bufferNotes.toString();
        return JSON.parse(stringNotes);
    }
    catch(err){
        return [];
    }
}

const removeNotes = (title) => {
    const allNotes = loadNotes();
    const newNotes = allNotes.filter(note => note.title !== title);

    if (allNotes.length > newNotes.length) {
        saveNotes(newNotes);
        console.log(chalk.red('note removed successfully'));
    }
    else{
        console.log(chalk.green('note not found'));
    }
    
    
}

module.exports={
    addNotes,
    removeNotes
}