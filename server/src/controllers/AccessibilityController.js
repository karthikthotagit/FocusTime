const AccessibilityService = require('../services/AccessibilityService');
const service = new AccessibilityService();

exports.update = async (req, res) => {
  const { userId, ...settings } = req.body;
  await service.updateSettings(userId, settings);
  res.sendStatus(204);
};

exports.get = async (req, res) => {
  const settings = await service.getSettings(req.params.userId);
  res.json(settings);
};
