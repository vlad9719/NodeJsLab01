const fs = require('fs');
const path = require('path');

module.exports = function deleteFiles() {
    const fileDirectory = 'generatedFiles';
    fs.readdir(fileDirectory, (error, files) => {
        if (error) {
            console.error(err.message);
            return;
        }

        for (let file of files) {
            fs.unlink(path.join(fileDirectory, file), error => {
                if (error) {
                    console.error(err.message);
                    return;
                }

                console.log('File \'' + file + '\' was deleted');
            });
        }
    })
};
