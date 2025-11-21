
const db = require("../config/db");

class SessionRepository {
  async createSession(duration) {
    const result = await db.query(
      "INSERT INTO sessions (duration) VALUES ($1) RETURNING *",
      [duration]
    );
    return result.rows[0];
  }
}

module.exports = new SessionRepository();
