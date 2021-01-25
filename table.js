"use strict";
let task1 = {
  startedAt: new Date("2021-01-20:15:00"),
  finishedAt: new Date("2021-01-20:20:00"),
  totalTime: 0,
  tasksGiven: 24,
  tasksFinished: 20,
  tasksFinishedPercent: 0,
  topic: "HTML",
};

let task2 = {
  startedAt: new Date("2021-01-20:16:00"),
  finishedAt: new Date("2021-01-20:20:00"),
  totalTime: 0,
  tasksGiven: 28,
  tasksFinished: 18,
  tasksFinishedPercent: 0,
  topic: "CSS",
};

let task3 = {
  startedAt: new Date("2021-01-20:11:00"),
  finishedAt: new Date("2021-01-20:17:00"),
  totalTime: 0,
  tasksGiven: 25,
  tasksFinished: 20,
  tasksFinishedPercent: 0,
  topic: "GitHub",
};

let task4 = {
  startedAt: new Date("2021-01-20:12:00"),
  finishedAt: new Date("2021-01-20:16:00"),
  totalTime: 0,
  tasksGiven: 10,
  tasksFinished: 3,
  tasksFinishedPercent: 0,
  topic: "More HTML",
};

let task5 = {
  startedAt: new Date("2021-01-20:14:00"),
  finishedAt: new Date("2021-01-20:16:30"),
  totalTime: 0,
  tasksGiven: 25,
  tasksFinished: 25,
  tasksFinishedPercent: 0,
  topic: "JavaScript",
};

let task6 = {
  startedAt: new Date("2021-01-20:11:00"),
  finishedAt: new Date("2021-01-20:12:30"),
  totalTime: 0,
  tasksGiven: 16,
  tasksFinished: 8,
  tasksFinishedPercent: 0,
  topic: "Loops",
};

let task7 = {
  startedAt: new Date("2021-01-20:12:00"),
  finishedAt: new Date("2021-01-20:15:30"),
  totalTime: 0,
  tasksGiven: 24,
  tasksFinished: 0,
  tasksFinishedPercent: 0,
  topic: "Conditions",
};

let task8 = {
  startedAt: new Date("2021-01-20:10:00"),
  finishedAt: new Date("2021-01-20:12:00"),
  totalTime: 0,
  tasksGiven: 30,
  tasksFinished: 20,
  tasksFinishedPercent: 0,
  topic: "Arrays",
};

let task9 = {
  startedAt: new Date("2021-01-20:14:30"),
  finishedAt: new Date("2021-01-20:18:00"),
  totalTime: 0,
  tasksGiven: 20,
  tasksFinished: 15,
  tasksFinishedPercent: 0,
  topic: "Object",
};

let taskTable = [task1, task2, task3, task4, task5, task6, task7, task8, task9];

for (let task of taskTable) {
  task["totalTime"] = (task.finishedAt - task.startedAt) / 3600000;
  task["tasksFinishedPercent"] =
    Math.floor((task.tasksFinished / task.tasksGiven) * 100 + 0.5) + " %";
  task.startedAt = task.startedAt.toLocaleTimeString().replace(":00", "");
  task.finishedAt = task.finishedAt.toLocaleTimeString().replace(":00", "");
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

let table = document.createElement("table");
let headerow = document.createElement("tr");

for (let header in tableHead) {
  let headerName = document.createElement("th");
  headerName.textContent = tableHead[header];
  headerow.appendChild(headerName);
}

table.appendChild(headerow);
table.appendChild(tableData(taskTable[0]));
table.appendChild(tableData(taskTable[1]));
table.appendChild(tableData(taskTable[2]));
table.appendChild(tableData(taskTable[3]));
table.appendChild(tableData(taskTable[4]));
table.appendChild(tableData(taskTable[5]));
table.appendChild(tableData(taskTable[6]));
table.appendChild(tableData(taskTable[7]));
table.appendChild(tableData(taskTable[8]));
document.body.appendChild(table);

function tableData(obj) {
  let tableRow = document.createElement("tr");
  for (let tData in obj) {
    let tableD = document.createElement("td");
    tableD.textContent = obj[tData];
    tableRow.appendChild(tableD);
  }
  return tableRow;
}

// document.write("<table class = 'tableS'>");
// document.write("<tr class = 'rowS'>");
// for (let head of tableHead) {
//   document.write("<th class = 'header'>" + head + "</th>");
// }
// document.write("</tr>");

// for (let task of taskTable) {
//   document.write("<tr class = 'rowS'>");
//   document.write("<td class = 'dataS'>" + task.startedAt + "</td>");
//   document.write("<td class = 'dataS'>" + task.finishedAt + "</td>");
//   if (task.totalTime <= 2) {
//     let className = "totalTimeGood";
//     document.write(
//       `<td class="${className}"> ${task.totalTime + " Hours"} </td>`
//     );
//   }
//   if (task.totalTime > 2 && task.totalTime <= 5) {
//     let className = "totalTimeX";
//     document.write(
//       `<td class="${className}"> ${task.totalTime + " Hours"} </td>`
//     );
//   }
//   if (task.totalTime > 5) {
//     let className = "totalTimeEs";
//     document.write(
//       `<td class="${className}"> ${task.totalTime + " Hours"}</td>`
//     );
//   }
//   document.write("<td class = 'dataS'>" + task.tasksGiven + "</td>");
//   document.write("<td class = 'dataS'>" + task.tasksFinished + "</td>");

// if (task.tasksFinishedPercent < 50) {
//   let className = "totalPerGood";
//   document.write(
//     `<td class="${className}" > ${task.tasksFinishedPercent + " %"} </td>`
//   );
// }
// if (task.tasksFinishedPercent >= 50 && task.tasksFinishedPercent <= 75) {
//   let className = "totalPerX";
//   document.write(
//     `<td class="${className}"> ${task.tasksFinishedPercent + " %"} </td>`
//   );
// }
// if (task.tasksFinishedPercent > 75) {
//   let className = "totalPerEs";
//   document.write(
//     `<td class="${className}"> ${task.tasksFinishedPercent + " %"}</td>`
//   );
// }
//   document.write("<td class = 'dataS'>" + task.topic + "</td>");

//   document.write("</tr>");
// }
// document.write("</table>");
