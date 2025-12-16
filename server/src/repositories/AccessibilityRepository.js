const db = require('../db');

class AccessibilityRepository {
  upsert(userId, s) {
    return db.query(
      `INSERT INTO user_accessibility_settings
       VALUES ($1,$2,$3,$4)
       ON CONFLICT (user_id)
       DO UPDATE SET font_size=$2, theme=$3, color_blind_mode=$4`,
      [userId, s.fontSize, s.theme, s.colorBlindMode]
    );
  }

  async get(userId) {
    const res = await db.query(
      'SELECT * FROM user_accessibility_settings WHERE user_id=$1',
      [userId]
    );
    return res.rows[0];
  }
}

module.exports = AccessibilityRepository;
