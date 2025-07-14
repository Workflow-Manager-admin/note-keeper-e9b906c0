// Notes controller

const noteService = require('../services/note');

// PUBLIC_INTERFACE
exports.getAll = (req, res) => {
  /** List all notes. */
  const notes = noteService.getAllNotes();
  res.json({ status: 'success', notes });
};

// PUBLIC_INTERFACE
exports.getOne = (req, res) => {
  /**
   * Get a single note by ID.
   */
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ status: 'error', message: 'Invalid ID' });
  const note = noteService.getNoteById(id);

  if (!note) {
    return res.status(404).json({ status: 'error', message: 'Note not found' });
  }
  res.json({ status: 'success', note });
};

// PUBLIC_INTERFACE
exports.create = (req, res) => {
  /**
   * Create a new note.
   */
  const { title, content } = req.body;
  const note = noteService.createNote({ title: title.trim(), content: content || '' });
  res.status(201).json({ status: 'success', note });
};

// PUBLIC_INTERFACE
exports.update = (req, res) => {
  /**
   * Update a note.
   */
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ status: 'error', message: 'Invalid ID' });
  const updated = noteService.updateNote(id, req.body);
  if (!updated) {
    return res.status(404).json({ status: 'error', message: 'Note not found' });
  }
  res.json({ status: 'success', note: updated });
};

// PUBLIC_INTERFACE
exports.remove = (req, res) => {
  /**
   * Delete a note.
   */
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ status: 'error', message: 'Invalid ID' });
  const deleted = noteService.deleteNote(id);
  if (!deleted) {
    return res.status(404).json({ status: 'error', message: 'Note not found' });
  }
  res.status(204).send();
};
