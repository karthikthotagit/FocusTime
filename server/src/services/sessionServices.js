const SessionRepository = require('../repositories/sessionRepository');
const TimerService = require('./TimerService');
const EventPublisher = require('./EventPublisher');

class SessionService {
  constructor() {
    this.repo = new SessionRepository();
    this.timer = new TimerService();
  }

  async startSession(userId, duration) {
    this.timer.validate(duration);
    const session = await this.repo.create(userId, duration);
    EventPublisher.publish('SessionStarted', { sessionId: session.id });
    return session;
  }

  pauseSession(id) {
    return this.repo.updateStatus(id, 'PAUSED');
  }

  resumeSession(id) {
    return this.repo.updateStatus(id, 'ACTIVE');
  }

  completeSession(id) {
    return this.repo.complete(id);
  }
}

module.exports = SessionService;
