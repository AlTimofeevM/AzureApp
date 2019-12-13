const { exec, spawn } = require('child_process');


exports.createVM = function(id){
  let cmd = 'ansible-playbook createVM.yml --extra-vars "userID=' + id + '"'
  console.log(cmd)
  exec(cmd , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

exports.deleteVM = function(id){  
  let cmd = 'ansible-playbook deleteVM.yml --extra-vars "userID=' + id + '"'
  console.log(cmd)
  exec(cmd , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

