const NotesModel = require('./notesModel')

describe(',/NotesModel', () => {
    it ('should return an empty array', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([])
    });

    it('should add notes to the NotesModel', () => {
    const model = new NotesModel();
  
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
  
    const notes = model.getNotes();
    expect(notes).toEqual(['Buy milk', 'Go to the gym']);
  });

});
