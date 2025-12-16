const AccessibilityRepository = require('../repositories/AccessibilityRepository');

class AccessibilityService {
  constructor() {
    this.repo = new AccessibilityRepository();
  }

  updateSettings(userId, settings) {
    return this.repo.upsert(userId, settings);
  }

  getSettings(userId) {
    return this.repo.get(userId);
  }
}

module.exports = AccessibilityService;
