const fs = require('fs');
const getCurrentDateAndTimeString = require('./getCurrentDateAndTimeString');

module.exports = function combineFiles(files) {

    files.sort((fileA, fileB) => {
        const fileAStat = fs.statSync(fileA);
        const fileBStat = fs.statSync(fileB);

        const fileABirthtime = fileAStat.birthtime;
        const fileBBirthtime = fileBStat.birthtime;

        return fileABirthtime > fileBBirthtime;
    });

    let resultingContent = '';

    files.forEach(file => {
        const fileContent = fs.readFileSync(file, 'utf-8', function (error, fileContent) {
            if (error) {
                console.log(error.message);
            }
        });

        resultingContent += fileContent;
    });

    const combinedFilesFolder = 'combinedFiles';
    const fileName = `${combinedFilesFolder}/combined-${getCurrentDateAndTimeString()}.txt`;
    fs.writeFile(fileName, resultingContent, function (error) {
        if (error) {
            console.error(err.message);
            return;
        }

        console.log(`Result was written to file ${fileName}`);
    })
};