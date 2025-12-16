const db = require('../db');

class DashboardRepository {
  async getSummary(userId) {
    const res = await db.query(
      `SELECT COUNT(*) AS sessions,
              COALESCE(SUM(duration_minutes),0) AS minutes
       FROM study_session_base
       WHERE user_id=$1 AND status='COMPLETED'`,
      [userId]
    );
    return res.rows[0];
  }
}

module.exports = DashboardRepository;
