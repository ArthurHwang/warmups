const stopWatcher = {
  timeLimit: 10,
  timeElapsed: 0,
  isStarted: false
}

function renderStopWatch(stopWatch) {
  return `<div class="stop-watch">
              <h1>${stopWatcher.timeLimit}</h1>
              <h3>${stopWatcher.timeElapsed}</h3>
              <p>${stopWatcher.isStarted}</p>
            </div>`;
}
