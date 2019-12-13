const { exec, spawn } = require('child_process');


exports.createVM = function(id){  
  exec('ansible-playbook createVM.yml --extra-vars "' + userId+ '"', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

exports.deleteVM = function(id){  
  exec('ansible-playbook deleteVM.yml --extra-vars "userID=' + userId+ '"', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

