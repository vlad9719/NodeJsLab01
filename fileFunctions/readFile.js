const fs = require('fs');

module.exports = function readFile(fileName) {
    const fileContent = fs.readFileSync(fileName, 'utf-8', function (err) {
        if (err) {
            console.error(err.message);
        }
    });

    console.log('The contents of \'' + fileName + '\' are:');
    console.log(fileContent);
};
