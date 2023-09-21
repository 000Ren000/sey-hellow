var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: 'sey-hellow',
    description: 'The nodejs.org example web server.'
});

svc.on('uninstall',function(){
    console.log('Uninstall complete.');
    console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();