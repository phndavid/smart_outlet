var mqtt = require('mqtt')
 
client = mqtt.connect('localhost:1883');
 
client.subscribe('presence');
 
console.log('Client publishing.. ');
client.publish('presence', 'Client 1 is alive.. Test Ping! ' + Date());
 
client.end();