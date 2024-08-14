"use strict";

//time counters display
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const microsecond = document.querySelector("#microsecond");

// lap's time counters display
const lhour = document.querySelector("#lap-hour");
const lminute = document.querySelector("#lap-min");
const lsecond = document.querySelector("#lap-sec");
const lmicrosecond = document.querySelector("#lap-micro");

//buttons
const leftButton = document.querySelector("#start");
const rightButton = document.querySelector("#lap-button");

//others
const lapTime = document.querySelector("#lap-timer");
const lapRecord = document.querySelector("#lap");
const record = document.querySelector("#record-lap-r");
const recordNotRemoved = document.querySelector("#record-lap");
const show = document.querySelector(".hide");

//js time counters
let micro = Number(microsecond.textContent);
let s = Number(second.textContent);
let min = Number(minute.textContent);
let h = Number(hour.textContent);

//js lap time counters
let lmicro = 0;
let ls = 0;
let lmin = 0;
let lh = 0;
let lapcounter = 0;

//check if the timer is running or not
let lapStarted = false;
let started = false;
let stopInterval = true;

leftButton.addEventListener("click", () => {
  //if the timer is not running the start the timer and change the button to stop
  if (!started) {
    started = true;
    stopInterval = false;
    setInterval(startTimer, 10);
    stopButton();
    lapButton();
  }
  //if the timer is running stop the timer and change the left button to resume and right button to reset
  else {
    started = false;
    stopInterval = true;
    //change to resume button
    resumeButton();
    //change to reset button
    resetButton();
  }
});
// Lap button and reset button
rightButton.addEventListener("click", () => {
  //if the time is running and lap isn't started yet, record and start the lap
  if (started && !lapStarted) {
    lapStarted = true;
    displayTables();
    lapRecord.style.margin = "0 auto";
  }
  //if the time is running the lap has started, record the lap
  else if (started && lapStarted) {
    lapcounter += 1;
    resetLap();
    addLap();
    lapRecord.style.margin = "-1vh auto";
  }
  //if the time is not running reset the timer and change reset button to lap and resume to start
  else if (!started) {
    resetEverything();
    //left button to Start
    startButton();
    //right button to lap
    lapButton();
  }
});
//Timer function
const startTimer = function () {
  if (!stopInterval) {
    micro += 1;
    if (micro > 99) {
      micro %= 100;
      s += 1;
      if (s > 59) {
        s %= 60;
        min += 1;
        if (min > 59) {
          min %= 60;
          h += 1;
          hour.style.dispay = "block";
          hour.textContent = h.toString().padStart(2, "0");
        }
        minute.textContent = min.toString().padStart(2, "0");
      }
      second.textContent = s.toString().padStart(2, "0");
    }
    microsecond.textContent = micro.toString().padStart(2, "0");
    if (lapStarted) {
      lmicro += 1;
      if (lmicro > 99) {
        lmicro %= 100;
        ls += 1;
        if (ls > 59) {
          ls %= 60;
          lmin += 1;
          if (lmin > 59) {
            lmin %= 60;
            lh += 1;
            lhour.style.dispay = "block";
            lhour.textContent = lh.toString().padStart(2, "0");
          }
          lminute.textContent = lmin.toString().padStart(2, "0");
        }
        lsecond.textContent = ls.toString().padStart(2, "0");
      }
      lmicrosecond.textContent = lmicro.toString().padStart(2, "0");
    }
  }
};
const displayTables = function () {
  lapTime.style.display = "block";
  show.style.display = "table";
  let r = `<tr>
    <td>${lapcounter + 1}</td>
    <td>${hour.textContent}:${minute.textContent}:${second.textContent}.${
    microsecond.textContent
  }</td>
    <td>${hour.textContent}:${minute.textContent}:${second.textContent}.${
    microsecond.textContent
  }</td>
    </tr>`;
  record.innerHTML = r;
  recordNotRemoved.innerHTML = r;
};
const resetLap = function () {
  lapTime.style.display = "block";
  ls = -1;
  lmicro = 0;
  lmin = 0;
  lh = 0;
};
const addLap = function () {
  let r = `<tr>
    <td>${lapcounter + 1}</td>
    <td>${lhour.textContent}:${lminute.textContent}:${lsecond.textContent}.${
    lmicrosecond.textContent
  }</td>
    <td>${hour.textContent}:${minute.textContent}:${second.textContent}.${
    microsecond.textContent
  }</td>
    </tr>`;
  record.insertAdjacentHTML("afterbegin", r);
  if (record.children.length > 2) {
    record.removeChild(record.lastChild);
  }
  recordNotRemoved.innerHTML += r;
};

const lapButton = function () {
  rightButton.style.backgroundColor = "";
  rightButton.style.borderColor = "";
  rightButton.style.color = "";
  rightButton.textContent = "Lap";
};
const stopButton = function () {
  leftButton.style.backgroundColor = "#DD665F";
  leftButton.style.borderColor = "#8a3f3b";
  leftButton.style.color = "white";
  leftButton.textContent = "Stop";
};
const resumeButton = function () {
  leftButton.style.backgroundColor = "#e6ff50";
  leftButton.style.borderColor = "#babd25";
  leftButton.style.color = "";
  leftButton.textContent = "Resume";
};
const resetButton = function () {
  rightButton.style.backgroundColor = "#DD665F";
  rightButton.style.borderColor = "#8a3f3b";
  rightButton.style.color = "white";
  rightButton.textContent = "Reset";
};
const startButton = function () {
  leftButton.style.backgroundColor = "";
  leftButton.style.borderColor = "";
  leftButton.style.color = "";
  leftButton.textContent = "Start";
};
const resetEverything = function () {
  //reset the display counter
  microsecond.textContent =
    second.textContent =
    minute.textContent =
    hour.textContent =
      "".padStart(2, "0");
  lmicrosecond.textContent =
    lsecond.textContent =
    lminute.textContent =
    lhour.textContent =
      "".padStart(2, "0");

  //reset  the counters
  micro = s = h = min = 0;
  lmicro = ls = lh = lmin = lapcounter = 0;

  //disble the lap timer and record
  lapTime.style.display = "none";
  record.innerHTML = "";
  recordNotRemoved.innerHTML = "";

  lapStarted = false;
  lapRecord.style.margin = "2vh auto";
};
