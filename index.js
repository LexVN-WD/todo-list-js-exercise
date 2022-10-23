// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = []; // => new array that lists task description

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {

  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    // added logTaskState as a method of this object

    markCompleted: function() {
      this.complete = true;
    }
    // added completeTask as a method of this object
  };
  return task;
  // taskTitles.push(title);
  // taskDescriptions.push(description); // => add description to description array
  // taskComplete.push(false);
}

// // PRINTS OUT THE PROVIDED TASKS'S DETAILS - NEW
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }


// // MARKS THE PROVIDED TASK AS COMPLETED - NEW
// function completeTask(task) {
//   task.complete = true;
// }


// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

/*------------------------------------------------------------------------------------------------------------------------- */

/*DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed*/

/*------------------------------------------------------------------- ------------------------------------------------------ */

/* DRIVER CODE 2
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
console.log(tasks); */

/*------------------------------------------------------------------------------------------------------------------------- */

/* DRIVER CODE 3 - REFACTORING CODE
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks); */

/*------------------------------------------------------------------------------------------------------------------------- */

/* DRIVER CODE 4 - Adding Functions as methods for the object */
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed