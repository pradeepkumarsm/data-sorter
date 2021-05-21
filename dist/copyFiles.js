var copyfiles = require('copyfiles');

const rootPath = require('path').resolve('./');

console.log('rootPath', rootPath);

copyfiles(['*.worker.js', '../../../out'], '-u 1', () => {
    console.log('Files copied');
});