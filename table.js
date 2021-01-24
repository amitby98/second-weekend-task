let arr = [
  {
    startedAt: new Date("2021-01-20:15:00"),
    finishedAt: new Date("2021-01-20:20:00"),
    taskGiven: 24,
    taskFinished: 20,
    Topic: "HTML",
  },
  {
    startedAt: new Date("2021-01-20:16:00"),
    finishedAt: new Date("2021-01-20:20:00"),
    taskGiven: 28,
    taskFinished: 18,
    Topic: "CSS",
  },
  {
    startedAt: new Date("2021-01-20:11:00"),
    finishedAt: new Date("2021-01-20:12:00"),
    taskGiven: 25,
    taskFinished: 20,
    Topic: "GitHub",
  },
  {
    startedAt: new Date("2021-01-20:09:00"),
    finishedAt: new Date("2021-01-20:16:00"),
    taskGiven: 10,
    taskFinished: 3,
    Topic: "More HTML",
  },
  {
    startedAt: new Date("2021-01-20:14:00"),
    finishedAt: new Date("2021-01-20:16:30"),
    taskGiven: 25,
    taskFinished: 25,
    Topic: "JavaScript",
  },
  {
    startedAt: new Date("2021-01-20:11:00"),
    finishedAt: new Date("2021-01-20:12:30"),
    taskGiven: 16,
    taskFinished: 8,
    Topic: "Loops",
  },
  {
    startedAt: new Date("2021-01-20:09:00"),
    finishedAt: new Date("2021-01-20:15:30"),
    taskGiven: 24,
    taskFinished: 0,
    Topic: "Conditions",
  },
  {
    startedAt: new Date("2021-01-20:10:00"),
    finishedAt: new Date("2021-01-20:12:00"),
    taskGiven: 30,
    taskFinished: 20,
    Topic: "Arrays",
  },
  {
    startedAt: new Date("2021-01-20:14:30"),
    finishedAt: new Date("2021-01-20:18:00"),
    taskGiven: 20,
    taskFinished: 15,
    Topic: "Object",
  },
];

function tableCreate() {
  let table = document.createElement("table");
  for (let i = 0; i < arr.length + 1; i++) {
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    if (i === 0) {
      cell1.innerHTML = "Started At";
      cell2.innerHTML = "Finished At";
      cell3.innerHTML = "Total Time Spent";
      cell4.innerHTML = "Task Given";
      cell5.innerHTML = "Task Finished";
      cell6.innerHTML = "Task Finished %";
      cell7.innerHTML = "Topic";
      for (let j = 0; j < 7; j++)
        row.childNodes[j].style.backgroundColor = "MediumPurple";
    } else {
      let start =
        (arr[i - 1]["startedAt"].getHours() < 10 ? "0" : "") +
        arr[i - 1]["startedAt"].getHours() +
        ":" +
        (arr[i - 1]["startedAt"].getMinutes() < 10 ? "0" : "") +
        arr[i - 1]["startedAt"].getMinutes();
      let end =
        (arr[i - 1]["finishedAt"].getHours() < 10 ? "0" : "") +
        arr[i - 1]["finishedAt"].getHours() +
        ":" +
        (arr[i - 1]["finishedAt"].getMinutes() < 10 ? "0" : "") +
        arr[i - 1]["finishedAt"].getMinutes();

      let t1 = start.split(":");
      let t2 = end.split(":");
      let d1 = new Date(0, 0, 0, parseInt(t1[0], 10), parseInt(t1[1], 10));
      let d2 = new Date(0, 0, 0, parseInt(t2[0], 10), parseInt(t2[1], 10));
      let time =
        d2.getHours() +
        d2.getMinutes() / 60 -
        d1.getHours() +
        d1.getMinutes() / 60;

      let percent = parseInt(
        (arr[i - 1]["taskFinished"] * 100) / arr[i - 1]["taskGiven"],
        10
      );

      cell1.innerHTML = start;
      cell2.innerHTML = end;
      cell3.innerHTML = time;
      cell4.innerHTML = arr[i - 1]["taskGiven"];
      cell5.innerHTML = arr[i - 1]["taskFinished"];
      cell6.innerHTML = percent + "%";
      cell7.innerHTML = arr[i - 1]["Topic"];

      if (time < 2) row.childNodes[2].style.backgroundColor = "pink";
      else if (time >= 2 && time <= 5)
        row.childNodes[2].style.backgroundColor = "HotPink";
      if (time > 5) row.childNodes[2].style.backgroundColor = "PaleVioletRed";

      if (percent < 50) row.childNodes[5].style.backgroundColor = "PowderBlue";
      else if (percent >= 50 && percent <= 75)
        row.childNodes[5].style.backgroundColor = "SkyBlue";
      if (percent > 75) row.childNodes[5].style.backgroundColor = "SteelBlue";
    }
  }
  document.getElementsByTagName("body")[0].appendChild(table);
}
