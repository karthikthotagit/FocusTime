const DashboardReadRepository = require('../repositories/DashboardReadRepository');
const repo = new DashboardReadRepository();

exports.summary = async (req, res) => {
  const data = await repo.getSummary(req.params.userId);
  res.json(data);
};
