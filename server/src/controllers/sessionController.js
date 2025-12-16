const SessionService = require('../services/SessionService');
const service = new SessionService();

exports.start = async (req, res) => {
  try {
    const { userId, duration } = req.body;
    const session = await service.startSession(userId, duration);
    res.status(201).json(session);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.pause = async (req, res) => {
  await service.pauseSession(req.params.id);
  res.sendStatus(204);
};

exports.resume = async (req, res) => {
  await service.resumeSession(req.params.id);
  res.sendStatus(204);
};

exports.complete = async (req, res) => {
  await service.completeSession(req.params.id);
  res.sendStatus(204);
};
