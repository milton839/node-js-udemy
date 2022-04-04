const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes......";
}
const addnotes = (title, body) => {
    const notes = loadNotes();
    // console.log(notes);

    const duplicateNotes = notes.filter(note => note.title === title);
    // console.log(duplicateNotes.length);

    if (duplicateNotes.length === 0) {
        notes.push({
        title: title,
        body: body,
        })
        savedNotes(notes)
        console.log(chalk.bgGreen.black('New note added'));
    }
     else {
        console.log(chalk.bgRed.black('Title already used'));  
    }
    
}


//remove Notes
const removeNotes = (title) =>{
    const allNotes = loadNotes();
    // const singleData = allNotes.find(note =>note.title ===title);
    // console.log(singleData);
    // const removeData = allNotes.filter(note =>note.title !==singleData.title);//delete by filtering method and find method
    const afterFilteringData = allNotes.filter(note =>note.title !==title);//delete by filtering method only
    if (afterFilteringData.length < allNotes.length) {
        savedNotes(afterFilteringData)//call and pass the all filtering data
        console.log(chalk.bgGreen.black('Delete a note'));
    }
    else{
        console.log(chalk.bgRed.black('This title not found'));
    }

    // fs.writeFileSync('notes.json', JSON.stringify(removeData))

    
    
    // console.log(removeData);
}

//save all notes
const savedNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json', dataJSON);
}

//load all notes
const loadNotes = () => {
    try{
        const databuffer = fs.readFileSync('notes.json');
        const stringData = databuffer.toString();
        return JSON.parse(stringData)
    }
    catch(e){
        return [];
    }
}

module.exports = {
    getNotes,
    addnotes,
    removeNotes
};