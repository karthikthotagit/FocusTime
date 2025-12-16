class EventPublisher {
  publish(type, payload) {
    console.log(`[EVENT] ${type}`, payload);
  }
}

module.exports = new EventPublisher();
