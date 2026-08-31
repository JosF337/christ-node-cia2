const fs = require("fs");

console.log("Task Logger Started");

fs.readFile("tasks.txt", "utf8", (err, data) => {
  if (err) {
    console.log("File not found or unable to read.");
    return;
  }
  console.log("File contents:", data);
});

console.log("This message prints immediately after triggering readFile, before the file contents are logged.");