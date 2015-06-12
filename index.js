var yaml = require('js-yaml');
var fs   = require('fs');
var exec = require('ssh-exec');

try{
    var doc = yaml.safeLoad(fs.readFileSync('./conf/vagrant.yaml', 'utf-8'));
}catch( e ){
    console.log( e );
}

var clc = function(){
    exec('ls -s',  doc.vagrant.connect ).pipe(process.stdout);
};
clc();
