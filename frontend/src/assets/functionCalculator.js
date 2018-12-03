let isRunning = false;
let func = () => 0;
let stepsX = 50;
let stepsY = 50;
let searchArea = {
  min: {
    x: -1,
    y: -1
  },
  max: {
    x: 1,
    y: 1
  },
}
addEventListener('message', (message) => {
  try {
    let data = message.data;
    searchArea = data.searchArea;
    func = new Function('return ' + data.func)();
    if (data.action === 'abort') {
      isRunning = false;
    }
    postMessage({
      info: '',
      status: "finished",
      result: runCode()
    });
  } catch (e) {
    postMessage({
      info: e.toString(),
      result: [],
      status: "error"
    });
  }
});

function runCode() {
  isRunning = true;
  const result = [];
  const xStepSize = (searchArea.max.x - searchArea.min.x) / stepsX;
  const yStepSize = (searchArea.max.y - searchArea.min.y) / stepsY;
  for (let x = searchArea.min.x; x <= searchArea.max.x && isRunning; x += xStepSize) {
    const subresults = [];
    for (let y = searchArea.min.y; y <= searchArea.max.y; y += yStepSize) {
      subresults.push({
        x,
        y,
        value: func(x, y)
      });
    }
    result.push(subresults);
  }

  if (isRunning = false) {
    return result;
  }
  isRunning = false;
  return result;
}
