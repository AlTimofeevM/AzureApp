const { exec, spawn } = require('child_process');
const db= require('../controller/dbController')
const fs = require("fs");

exports.createAndStopVM = function(id){
  exec('ansible-playbook createVM.yml --extra-vars "userID=' + id + '"', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    let preIP = stdout.substr(stdout.indexOf("The public IP is") + 17,17)
    let IP = preIP.substr(0,preIP.indexOf('"')-1)
    fs.writeFileSync('hosts.' + id, '[dev]\n' + IP + '\n\n[dev:vars]\nansible_user=azureuser\nansible_ssh_common_args="-o StrictHostKeyChecking=no"\nansible_ssh_private_key_file=/home/site/repository/.ssh/id_rsa"')
    console.log(stdout);
    exec('ansible-playbook stopVM.yml --extra-vars "userID=' + id + '"' , (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
        db.availableBut(id)
      });
  });
}

exports.startAndRunVM  = function(id){
  exec('ansible-playbook startVM.yml --extra-vars "userID=' + id + '"' , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
      exec('ansible-playbook runVM.yml --extra-vars "userID=' + id + '" -i hosts.' + id, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
        exec('ansible-playbook stopVM.yml --extra-vars "userID=' + id + '"' , (err, stdout, stderr) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      });
  });
}

// exports.deleteVM = function(id){  
//   exec('ansible-playbook deleteVM.yml --extra-vars "userID=' + id + '"' , (err, stdout, stderr) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(stdout);
//   });
// }



