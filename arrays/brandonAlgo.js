// Directions
// Given an array of workers example: [w1,w2,w3] and an array of tasks example: [t1,t2,t3,t4,t5,t6]. Please write a function to assign each worker a fair number of tasks.

// make an object sorted by worker number each with an array of tasks
// ex:
// {
//   w1: [t1,t4],
//   w2: [t2,t5],
//   w3: [t3,t6]
// }

// figure out the ratio of how many tasks for each worker
// determine if there are extra tasks for an uneven number

const taskAssigner = (workers, tasks) => {
  const taskRatio = Math.floor(tasks.length / workers.length);
  const extraTasks = tasks.length % workers.length;

  let assignedTasks = {};
  let taskIndex = 0;
  for(let i =0; i<workers.length;i++) {
    const numTasksToAssign = taskRatio + (i < extraTasks ? 1 : 0);
    const workerTasks = tasks.slice(taskIndex, taskIndex+numTasksToAssign);
    assignedTasks[workers[i]] = workerTasks
    taskIndex += numTasksToAssign
  }
  return assignedTasks
}

const workers = ["w1","w2","w3"]
const tasks = ["t1","t2","t3","t4","t5","t6","t7"]

console.log(taskAssigner(workers,tasks))