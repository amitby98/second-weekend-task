"use strict";
let task1 = {
  startedAt: new Date("2021-01-20:15:00"),
  finishedAt: new Date("2021-01-20:20:00"),
  tasksGiven: 24,
  tasksFinished: 20,
  topic: "HTML",
};

let task2 = {
  startedAt: new Date("2021-01-20:16:00"),
  finishedAt: new Date("2021-01-20:20:00"),
  tasksGiven: 28,
  tasksFinished: 18,
  topic: "CSS",
};

let task3 = {
  startedAt: new Date("2021-01-20:11:00"),
  finishedAt: new Date("2021-01-20:12:00"),
  tasksGiven: 25,
  tasksFinished: 20,
  topic: "GitHub",
};

let task4 = {
  startedAt: new Date("2021-01-20:09:00"),
  finishedAt: new Date("2021-01-20:16:00"),
  tasksGiven: 10,
  tasksFinished: 3,
  topic: "More HTML",
};

let task5 = {
  startedAt: new Date("2021-01-20:14:00"),
  finishedAt: new Date("2021-01-20:16:30"),
  tasksGiven: 25,
  tasksFinished: 25,
  topic: "JavaScript",
};

let task6 = {
  startedAt: new Date("2021-01-20:11:00"),
  finishedAt: new Date("2021-01-20:12:30"),
  tasksGiven: 16,
  tasksFinished: 8,
  topic: "Loops",
};

let task7 = {
  startedAt: new Date("2021-01-20:09:00"),
  finishedAt: new Date("2021-01-20:15:30"),
  tasksGiven: 24,
  tasksFinished: 0,
  topic: "Conditions",
};

let task8 = {
  startedAt: new Date("2021-01-20:10:00"),
  finishedAt: new Date("2021-01-20:12:00"),
  tasksGiven: 30,
  tasksFinished: 20,
  topic: "Arrays",
};

let task9 = {
  startedAt: new Date("2021-01-20:14:30"),
  finishedAt: new Date("2021-01-20:18:00"),
  tasksGiven: 20,
  tasksFinished: 15,
  topic: "Object",
};

let taskTable = [task1, task2, task3, task4, task5, task6, task7, task8, task9];

// add total time of work and finished percent  properties to each work
for (let task of taskTable) {
  task["totalTime"] = (task.finishedAt - task.startedAt) / 3600000;
  task["tasksFinishedPercent"] = Math.floor(
    (task.tasksFinished / task.tasksGiven) * 100
  );
  task.startedAt = task.startedAt.toLocaleTimeString();
  task.finishedAt = task.finishedAt.toLocaleTimeString();
}
let tableHead = [
  "Started At",
  "Finished At",
  "Total Time Spent",
  "Tasks Given",
  "Tasks Finished",
  "Tasks Finished %",
  "Topic",
];

document.write("<table class = 'tableS'>");
document.write("<tr class = 'rowS'>");
for (let head of tableHead) {
  document.write("<th class = 'header'>" + head + "</th>");
}
document.write("</tr>");

for (let task of taskTable) {
  document.write("<tr class = 'rowS'>");
  document.write("<td class = 'dataS'>" + task.startedAt + "</td>");
  document.write("<td class = 'dataS'>" + task.finishedAt + "</td>");
  if (task.totalTime <= 2) {
    let className = "totalTimeGood";
    document.write(
      `<td class="${className}"> ${task.totalTime + " Hours"} </td>`
    );
  }
  if (task.totalTime > 2 && task.totalTime <= 5) {
    let className = "totalTimeX";
    document.write(
      `<td class="${className}"> ${task.totalTime + " Hours"} </td>`
    );
  }
  if (task.totalTime > 5) {
    let className = "totalTimeEs";
    document.write(
      `<td class="${className}"> ${task.totalTime + " Hours"}</td>`
    );
  }
  document.write("<td class = 'dataS'>" + task.tasksGiven + "</td>");
  document.write("<td class = 'dataS'>" + task.tasksFinished + "</td>");

  if (task.tasksFinishedPercent < 50) {
    let className = "totalPerGood";
    document.write(
      `<td class="${className}" > ${task.tasksFinishedPercent + " %"} </td>`
    );
  }
  if (task.tasksFinishedPercent >= 50 && task.tasksFinishedPercent <= 75) {
    let className = "totalPerX";
    document.write(
      `<td class="${className}"> ${task.tasksFinishedPercent + " %"} </td>`
    );
  }
  if (task.tasksFinishedPercent > 75) {
    let className = "totalPerEs";
    document.write(
      `<td class="${className}"> ${task.tasksFinishedPercent + " %"}</td>`
    );
  }
  document.write("<td class = 'dataS'>" + task.topic + "</td>");

  document.write("</tr>");
}
document.write("</table>");
