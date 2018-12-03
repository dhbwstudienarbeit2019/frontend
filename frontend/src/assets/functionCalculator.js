let isRunning = false;
let isFinished = false;
let func = () => 0;
let config;
addEventListener('message', (message) => {
  try {
    let data = message.data;
    config = data.config;
    func = data.func;
    if (data.action === 'abort') {
      isRunning = false;
    }
    postMessage({
      info: '',
      status: "finished",
      result: runCode()
    });
  }
  catch (e) {
    postMessage({info: e.toString(), result: [], status: "error"});
  }
});

function runCode() {
  isRunning = true;
  isFinished = false;
  const result = [];
  const xStepSize = (config.maxX - config.minX) / config.stepsX;
  const yStepSize = (config.maxY - config.minY) / config.stepsY;
  for (let x = config.minX; x <= config.maxX && isRunning; x += xStepSize) {
    const subresults = [];
    for (let y = config.minY; y <= config.maxY; y += yStepSize) {
      subresults.push(func(x, y));
    }
    result.push(subresults);
  }

  if (isRunning = false) {
    return result;
  }
  isRunning = false;
  isFinished = true;
  return result;
}
