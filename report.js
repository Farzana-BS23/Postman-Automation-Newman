const newman = require('newman');

newman.run({
    collection: require('./collection/customerCollection.json'), 
    environment: require('./collection/customerEnv.json'), 
    iterationCount: 1,
    delayRequest: 3000,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
        }
    }
}, function (err) {
if (err) { throw err; }
console.log('collection run complete!');
});