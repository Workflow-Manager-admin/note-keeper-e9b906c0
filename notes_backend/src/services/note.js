const NoteModel = require('../models/note');

class NoteService {
  // PUBLIC_INTERFACE
  getAllNotes() {
    /** Retrieve all notes. */
    return NoteModel.getAll();
  }
  // PUBLIC_INTERFACE
  getNoteById(id) {
    /** Retrieve a single note by id. */
    return NoteModel.getById(id);
  }
  // PUBLIC_INTERFACE
  createNote(data) {
    /** Create a new note. */
    return NoteModel.create(data);
  }
  // PUBLIC_INTERFACE
  updateNote(id, data) {
    /** Update an existing note. */
    return NoteModel.update(id, data);
  }
  // PUBLIC_INTERFACE
  deleteNote(id) {
    /** Delete a note by id. */
    return NoteModel.delete(id);
  }
}

module.exports = new NoteService();
