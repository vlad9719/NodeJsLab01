const fs = require('fs');
const getCurrentDateAndTimeString = require('./getCurrentDateAndTimeString');

module.exports = function makeFile() {
    const fileDirectory = 'generatedFiles';

    const labNumber = '01';
    const variantNumber = '08';
    const name = 'Uladzislau';

    const currentDateAndTimeString = getCurrentDateAndTimeString();

    const fileName = `${fileDirectory}/${labNumber}-${variantNumber}-${name}-${currentDateAndTimeString}.txt`;
    fs.writeFile(fileName, '', function (err) {
        if (err) {
            console.error(err.message);
            return;
        }

        console.log('The file \'' + fileName + '\' was created');
    });
};
