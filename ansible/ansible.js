const { exec, spawn } = require('child_process');


exports.createVM = function(id){
  exec('ansible-playbook createVM.yml --extra-vars "userID=' + id + '"', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

exports.deleteVM = function(id){  
  exec('ansible-playbook deleteVM.yml --extra-vars "userID=' + id + '"' , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

exports.stopVM = function(id){
  exec('ansible-playbook stopVM.yml --extra-vars "userID=' + id + '"' , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

exports.startVM = function(id){
  exec('ansible-playbook startVM.yml --extra-vars "userID=' + id + '"' , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

