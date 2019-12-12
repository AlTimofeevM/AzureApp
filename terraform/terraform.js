const exec = require('child_process').exec;

exports.init = async function(res){
    await exec('terraform --version', (err, stdout, stderr) => {
        if (err) {
      
          console.error(err);
      
          return;
        }
      
        res.send(stdout)
      });
}

exports.createVM = async function(res){
    await exec('ansible --version', (err, stdout, stderr) => {
        if (err) {
      
          console.error(err);
      
          return;
        }
      
        res.send(stdout)
      });     
}
