const db = require('../db');

exports.exportCsv = async (req, res) => {
  const { userId } = req.body;
  const result = await db.query(
    'SELECT * FROM study_session_base WHERE user_id=$1',
    [userId]
  );

  let csv = 'id,duration,status,started_at,completed_at\n';
  result.rows.forEach(r => {
    csv += `${r.id},${r.duration_minutes},${r.status},${r.started_at},${r.completed_at}\n`;
  });

  res.header('Content-Type', 'text/csv');
  res.attachment('sessions.csv');
  res.send(csv);
};
