const fs = require('fs');

const content = 'Welcome to Node.js\n';

fs.writeFile('output.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    throw err;
  }
  console.log('File has been successfully created and content written to output.txt!');
});
