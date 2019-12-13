const { exec, spawn } = require('child_process');


exports.createVM = function(){  
  exec('ansible-playbook createVM.yml --extra-vars "userID=12345"', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

exports.deleteVM = function(){  
  exec('ansible-playbook deleteVM.yml --extra-vars "userID=12345"', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

