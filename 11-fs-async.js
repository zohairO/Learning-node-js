const { readFile, writeFile } = require('fs')

console.log('start');
readFile('./content/first.txt','utf8', (err,result) => {
  if(err) {
    return null;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err) {
      return null;
    }
    const second = result;
    writeFile(
    './content/result-async.txt', 
    `Here is the result : ${first}, ${second}`,
    (err, result) => {
      if(err) {
        console.log(err)
        return;
      }
      console.log('done with this task ');
    })
  })
})
console.log('starting next task');

// the asynchronous approach is when node offloads the task and moves on, so it can
// have multiple tasks running together