const Ansible = require('node-ansible');

exports.createRG = function(){
    const playbook = new Ansible.Playbook().playbook('rg')
    playbook.exec()
}