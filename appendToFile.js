const fs = require('fs');

const additionalContent = '\nThis line was appended using fs.appendFile() method.\nAppending content is useful for logs and data collection!';

fs.appendFile('output.txt', additionalContent, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    throw err;
  }
  console.log('Content has been successfully appended to output.txt!');
});
