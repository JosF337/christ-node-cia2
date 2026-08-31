const task = process.argv[2];

if (!task) {
  console.log("Please provide a task.");
  process.exit();
}

console.log("Task:", task);

process.stdin.setEncoding("utf8");
console.log("Do you want to save this task? (y/n)");

process.stdin.on("data", (input) => {
  const answer = input.trim().toLowerCase();
  if (answer === "y") {
    console.log("Task saved successfully!");
  } else if (answer === "n") {
    console.log("Task not saved.");
  } else {
    console.log("Please enter y or n.");
  }
  process.exit();
});