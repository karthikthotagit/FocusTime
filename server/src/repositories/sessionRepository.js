const db = require('../db');

class SessionRepository {
  async create(userId, duration) {
    const res = await db.query(
      `INSERT INTO study_session_base (user_id, duration_minutes, status, started_at)
       VALUES ($1,$2,'ACTIVE',NOW())
       RETURNING *`,
      [userId, duration]
    );
    return res.rows[0];
  }

  updateStatus(id, status) {
    return db.query(
      'UPDATE study_session_base SET status=$1 WHERE id=$2',
      [status, id]
    );
  }

  complete(id) {
    return db.query(
      `UPDATE study_session_base
       SET status='COMPLETED', completed_at=NOW()
       WHERE id=$1`,
      [id]
    );
  }
}

module.exports = SessionRepository;
