const { exec } = require('child_process')
exec('git pull https://github.com/Yumiro/atom69', {
cwd: __dirname
}, (err, stdout, stderr) => {
if (err) return reject(err)
console.log(stdout);
})
