let fs = require('fs');
fs.readdir('./secret-folder', (err, files) => {
   if(err) throw err;
   console.log('В папке находятся файлы:' + files);
});
