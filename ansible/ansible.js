const Ansible = require('node-ansible');
const playbook = new Ansible.Playbook().playbook('rg')
playbook.exec()