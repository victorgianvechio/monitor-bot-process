const ps = require('ps-node');

// A simple pid lookup
// command: 'node'
// pid: 12345
ps.lookup({ command: 'node' }, (err, resultList) => {
  if (err) {
    throw new Error(err);
  }

  console.log(resultList);
  const process = resultList[0];

  if (process) {
    console.log(
      'PID: %s, COMMAND: %s, ARGUMENTS: %s',
      process.pid,
      process.command,
      process.arguments
    );
  } else {
    console.log('No such process found!');
  }
});
