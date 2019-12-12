const exec = require('child_process').exec;

exports.createVM = async function(){
    await exec('terraform apply  -auto-approve', (err, stdout, stderr) => {
        if (err) {
      
          console.error(err);
      
          return;
        }
      
        console.log(stdout)
      });
}

