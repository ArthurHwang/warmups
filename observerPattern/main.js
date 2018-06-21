function createEmitter() {
    const listeners = {}

  return {
    on(eventType, listener) {
      listeners[eventType] = listeners[eventType] || []
      listeners[eventType].push(listener)
    },
    emit(eventType, payload) {
      if (!listeners[eventType]) {
        return listeners[eventType].forEach(listener => {
          listener(payload)
        })
      }
    }
  }
}

const emitter = createEmitter()
