//
// Note model (in-memory for illustrative/simple scenario; swap with DB as needed)
//

let notes = [];
let nextId = 1;

/**
 * Note schema:
 * {
 *   id: Number,
 *   title: String,
 *   content: String,
 *   createdAt: Date-string,
 *   updatedAt: Date-string
 * }
 */
class NoteModel {
  // PUBLIC_INTERFACE
  static getAll() {
    /** Get all notes. */
    return notes;
  }

  // PUBLIC_INTERFACE
  static getById(id) {
    /** Get note by id. */
    return notes.find((note) => note.id === id);
  }

  // PUBLIC_INTERFACE
  static create({ title, content }) {
    /** Create and store a new note. */
    const note = {
      id: nextId++,
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    notes.push(note);
    return note;
  }

  // PUBLIC_INTERFACE
  static update(id, { title, content }) {
    /** Update an existing note by id. */
    const note = notes.find((n) => n.id === id);
    if (!note) return null;
    note.title = title !== undefined ? title : note.title;
    note.content = content !== undefined ? content : note.content;
    note.updatedAt = new Date().toISOString();
    return note;
  }

  // PUBLIC_INTERFACE
  static delete(id) {
    /** Delete a note by id. */
    const idx = notes.findIndex((n) => n.id === id);
    if (idx === -1) return false;
    notes.splice(idx, 1);
    return true;
  }
}

module.exports = NoteModel;
