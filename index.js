// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
    },
    markCompleted: function() {this.complete = true}
  }
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


//DRIVER CODE BELOW

console.log(task1.title);
task1.markCompleted();
task1.logState();
