// // const timeDisplay = document.getElementById('time-display');
// // const startPauseButton = document.getElementById('start-pause');
// // const resetButton = document.getElementById('reset');
// // const lapButton = document.getElementById('lap');
// // const lapsList = document.getElementById('laps-list');

// // let startTime = 0;
// // let elapsedTime = 0;
// // let timerInterval;
// // let isRunning = false;

// // // Update the stopwatch display
// // function updateTime() {
// //   const currentTime = Date.now() - startTime + elapsedTime;
// //   const minutes = Math.floor(currentTime / 60000);
// //   const seconds = Math.floor((currentTime % 60000) / 1000);
// //   const milliseconds = Math.floor((currentTime % 1000));

// //   timeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
// // }

// // function formatTime(value) {
// //   return value.toString().padStart(2, '0');
// // }

// // function formatMilliseconds(value) {
// //   return value.toString().padStart(3, '0');
// // }

// // // Start or pause the stopwatch
// // startPauseButton.addEventListener('click', function() {
// //   if (isRunning) {
// //     clearInterval(timerInterval);
// //     elapsedTime += Date.now() - startTime;
// //     startPauseButton.textContent = 'Start';
// //   } else {
// //     startTime = Date.now();
// //     timerInterval = setInterval(updateTime, 10);
// //     startPauseButton.textContent = 'Pause';
// //   }
// //   isRunning = !isRunning;
// // });

// // // Reset the stopwatch
// // resetButton.addEventListener('click', function() {
// //   clearInterval(timerInterval);
// //   isRunning = false;
// //   elapsedTime = 0;
// //   startPauseButton.textContent = 'Start';
// //   timeDisplay.textContent = '00:00:00.000';
// //   lapsList.innerHTML = '';
// // });

// // // Record lap time
// // lapButton.addEventListener('click', function() {
// //   if (isRunning) {
// //     const lapTime = timeDisplay.textContent;
// //     const lapItem = document.createElement('li');
// //     lapItem.textContent = lapTime;
// //     lapsList.appendChild(lapItem);
// //   }
// // });



// const timeDisplay = document.getElementById('time-display');
// const startPauseButton = document.getElementById('start-pause');
// const resetButton = document.getElementById('reset');
// const lapButton = document.getElementById('lap');
// const lapsList = document.getElementById('laps-list');

// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;
// let isRunning = false;

// // Update the stopwatch display
// function updateTime() {
//   const currentTime = Date.now() - startTime + elapsedTime;
//   const minutes = Math.floor(currentTime / 60000);
//   const seconds = Math.floor((currentTime % 60000) / 1000);
//   const milliseconds = Math.floor((currentTime % 1000));

//   timeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
// }

// function formatTime(value) {
//   return value.toString().padStart(2, '0');
// }

// function formatMilliseconds(value) {
//   return value.toString().padStart(3, '0');
// }

// // Start or pause the stopwatch
// startPauseButton.addEventListener('click', function() {
//   if (isRunning) {
//     clearInterval(timerInterval);
//     elapsedTime += Date.now() - startTime;
//     startPauseButton.textContent = 'Start';
//     startPauseButton.style.animation = 'pulse 1s infinite'; // Button pulse animation
//   } else {
//     startTime = Date.now();
//     timerInterval = setInterval(updateTime, 10);
//     startPauseButton.textContent = 'Pause';
//     startPauseButton.style.animation = ''; // Stop pulse animation
//   }
//   isRunning = !isRunning;
// });

// // Reset the stopwatch
// resetButton.addEventListener('click', function() {
//   clearInterval(timerInterval);
//   isRunning = false;
//   elapsedTime = 0;
//   startPauseButton.textContent = 'Start';
//   timeDisplay.textContent = '00:00:00.000';
//   lapsList.innerHTML = '';
// });

// // Record lap time
// lapButton.addEventListener('click', function() {
//   if (isRunning) {
//     const lapTime = timeDisplay.textContent;
//     const lapItem = document.createElement('li');
//     lapItem.textContent = lapTime;
//     lapsList.appendChild(lapItem);
//   }
// });
const timeDisplay = document.getElementById('time-display');
const startPauseButton = document.getElementById('start-pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps-list');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Update the stopwatch display
function updateTime() {
  const currentTime = Date.now() - startTime + elapsedTime;
  const minutes = Math.floor(currentTime / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = Math.floor((currentTime % 1000));

  timeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
}

function formatTime(value) {
  return value.toString().padStart(2, '0');
}

function formatMilliseconds(value) {
  return value.toString().padStart(3, '0');
}

// Start or pause the stopwatch
startPauseButton.addEventListener('click', function() {
  if (isRunning) {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    startPauseButton.textContent = 'Start';
  } else {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 10);
    startPauseButton.textContent = 'Pause';
  }
  isRunning = !isRunning;
});

// Reset the stopwatch
resetButton.addEventListener('click', function() {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  startPauseButton.textContent = 'Start';
  timeDisplay.textContent = '00:00:00.000';
  lapsList.innerHTML = '';
});

// Record lap time
lapButton.addEventListener('click', function() {
  if (isRunning) {
    const lapTime = timeDisplay.textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
  }
});
