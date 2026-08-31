const fs = require("fs");

function saveTaskPromise(task) {
  return fs.promises.appendFile("tasks.txt", task + "\n");
}

saveTaskPromise("Complete Node.js assignment")
  .then(() => {
    console.log("Task saved successfully.");
  })
  .catch(() => {
    console.log("Failed to save task.");
  });