# NodeJsLab01

This application allows to make, read, write, combine and delete files with command line interface.

### Installing

Step 1. Clone the repo
```
git clone https://github.com/vlad9719/NodeJsLab01

cd NodeJsLab01
```

Step 2. Install dependencies
```
npm install
```

## Getting Started

Step 1. Run this command a couple of times to create multiple files with different names
```
node index.js mkfile
node index.js mkfile
node index.js mkfile
//go on like that if you wish
```

Generated files are located  in ```generatedFiles``` folder with names like ```01-08-Uladzislau-14-4-2019-11:3:23.txt```

Step 2. Write some content to generated files using the commands below. Copy generated files' names from ```generatedFiles``` 
folder and paste it instead of ```<generated-file-N-name>``` below:

```
node index.js wrtfile generatedFiles/<generated-file-1-name> 'Hello everyone'
node index.js wrtfile generatedFiles/<generated-file-2-name> 'I'm CLI app'
node index.js wrtfile generatedFiles/<generated-file-3-name> 'Writing some text to files'
//and so on
```

You may now check corresponding files in ```generatedFiles``` folder to see the content written to the files.

Step 3. Read files' contents that you've written on step 2

```
node index.js rdfile generatedFiles/<generated-file-1-name>
node index.js rdfile generatedFiles/<generated-file-2-name>
node index.js rdfile generatedFiles/<generated-file-3-name>
```

Step 4. Combine a few files into one

```
node index.js cmbnfiles generatedFiles/<generated-file-1-name> generatedFiles/<generated-file-2-name> generatedFiles/<generated-file-3-name>
```

You may now see a new file in ```combinedFiles``` folder, which is a result of combination. 
Files' contents in resulting file are ordered by creation date of their files.

Step 5. Delete all the generated files
```
node index.js dltfiles
```
This command will clear ```generatedFiles``` folder.
