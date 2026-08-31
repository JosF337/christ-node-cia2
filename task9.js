const fs = require("fs");
let taskCount = 0;

fs.appendFile("tasks.txt", "Complete Node.js assignment\n", (err) => {
  if (err) {
    console.log("Failed to save task.");
  } else {
    taskCount++;
    console.log("Task saved successfully.");
  }
});

setTimeout(() => {
  console.log("Reminder: review your tasks");
}, 5000);

const interval = setInterval(() => {
  console.log("Tasks logged so far:", taskCount);
}, 3000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Task counter stopped.");
}, 15000);