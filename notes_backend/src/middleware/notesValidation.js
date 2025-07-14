//
// Notes request validation middleware
//

// PUBLIC_INTERFACE
function validateNoteCreate(req, res, next) {
  /**
   * Validates POST /notes body request for note creation.
   */
  const { title, content } = req.body;
  if (typeof title !== 'string' || !title.trim())
    return res.status(400).json({ status: 'error', message: 'Title is required and must be a non-empty string.' });
  if (typeof content !== 'string')
    return res.status(400).json({ status: 'error', message: 'Content must be a string.' });
  next();
}

// PUBLIC_INTERFACE
function validateNoteUpdate(req, res, next) {
  /**
   * Validates PUT /notes/:id body request for note update.
   */
  const { title, content } = req.body;
  if (title !== undefined && (typeof title !== 'string' || !title.trim()))
    return res.status(400).json({ status: 'error', message: 'If specified, title must be a non-empty string.' });
  if (content !== undefined && typeof content !== 'string')
    return res.status(400).json({ status: 'error', message: 'If specified, content must be a string.' });
  next();
}

module.exports = {
  validateNoteCreate,
  validateNoteUpdate,
};
