class TimerService {
  validate(duration) {
    if (duration <= 0) {
      throw new Error('Invalid duration');
    }
  }
}

module.exports = TimerService;

