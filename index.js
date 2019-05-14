const makeFile = require('./fileFunctions/makeFile');
const readFile = require('./fileFunctions/readFile');
const writeFile = require('./fileFunctions/writeFile');
const deleteFiles = require('./fileFunctions/deleteFiles');
const combineFiles = require('./fileFunctions/combineFiles');

const commandLineArguments = process.argv;

const action = commandLineArguments[2];
const fileName = commandLineArguments[3];
const contentToWrite = commandLineArguments[4];

switch (action) {
    case 'mkfile':
        makeFile();
        break;
    case 'rdfile':
        if (!fileName) {
            console.error('Please provide a file name after \'rdfile\'');
            break;
        }
        readFile(fileName);
        break;
    case 'wrtfile':
        if (!fileName) {
            console.error('Please provide a file name after \'wrtfile\'');
            break;
        }

        if (!contentToWrite) {
            console.error('Please provide content to write after file name');
            break;
        }
        writeFile(fileName, contentToWrite);
        break;
    case 'dltfiles':
        deleteFiles();
        break;
    case 'cmbnfiles':
        if (!fileName) {
            console.error('Please provide at least one file name after \'cmbnfile\'');
            break;
        }
        combineFiles(commandLineArguments.slice(3));
        break;
    default:
        console.log('Command \'' + action + '\' is not supported');
        break;
}
