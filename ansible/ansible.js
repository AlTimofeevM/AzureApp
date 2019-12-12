const Ansible = require('node-ansible');

exports.createVM = function(){
  var playbook = new Ansible.Playbook().playbook('createVM');
  playbook.exec();
}