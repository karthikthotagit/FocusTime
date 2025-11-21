
const timerService = require("../services/timerService");

class TimerController {
  async start(req, res) {
    const { duration } = req.body;

    if (!duration) {
      return res.status(400).json({ error: "Duration required" });
    }

    const session = await timerService.startTimer(duration);
    res.json(session);
  }
}

module.exports = new TimerController();
