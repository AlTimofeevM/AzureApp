const exec = require('child_process').exec;

module.exports.init = function(){
    exec('terraform init', (err, stdout, stderr) => {
        if (err) {
      
          console.error(err);
      
          return;
        }
      
        console.log(stdout);
      });
}

module.exports.createVM = function(){
    exec('terraform apply -auto-approve', (err, stdout, stderr) => {
        if (err) {
      
          console.error(err);
      
          return;
        }
      
        console.log(stdout);
      });
      
      
}

