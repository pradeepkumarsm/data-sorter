var copyfiles = require('copyfiles');

const rootPath = require('path').resolve('./');

console.log('rootPath', rootPath);

copyfiles(['dist/*.worker.js', `${rootPath}/out`], '-u 1', () => {
    console.log('Files copied');
});