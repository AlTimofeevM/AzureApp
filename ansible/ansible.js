const { exec, spawn } = require('child_process');


exports.createVM = function(id){  
  exec('ansible-playbook createVM.yml --extra-vars "' + id+ '"', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

exports.deleteVM = function(id){  
  exec('ansible-playbook deleteVM.yml --extra-vars "userID=' + id+ '"', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

