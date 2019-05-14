const fs = require('fs');

module.exports = function writeFile(fileName, contentToWrite) {
    fs.appendFile(fileName, contentToWrite + '\n', function (err) {
        if (err) {
            console.error(err.message);
            return;
        }

        console.log('\'' + contentToWrite + '\' was written to \'' + fileName + '\'');
    });
};
