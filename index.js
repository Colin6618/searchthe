#!/usr/bin/env node
var Task = require('./lib/task');

var fromIndex = process.argv.findIndex((ele) => {
    return ele == 'from';
})
if(process.argv.length < 5) {
  console.log('Missing arguments');
  return;
}
var fileType = '*.*';
var desiredString = process.argv[fromIndex - 1];

if (process.argv[fromIndex + 1].toLowerCase() == 'all') {
    fileType = '*.*';
} else {
    fileType = '*.' + process.argv[fromIndex + 1];
}

var shellStr = 'find . -name \"' + fileType + '\" -exec grep -in -H \"' + desiredString + '\" {} \;'

new Task(shellStr).run(function(err, next) {
    if (err) {
        console.log(err);
    }
});
