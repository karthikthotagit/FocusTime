// server/services/timerService.js
const sessionRepo = require("../repositories/sessionRepository");

class TimerService {
  async startTimer(duration) {
    // Business logic placeholder for sprint 2
    return sessionRepo.createSession(duration);
  }
}

module.exports = new TimerService();
