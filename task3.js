const fs = require("fs");

try {
  const data = fs.readFileSync("tasks.txt", "utf8");
  console.log("Tasks File Content:\n", data);
} catch (err) {
  console.error("Error reading file:", err);
}