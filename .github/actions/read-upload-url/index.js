const core = require('@actions/core');
const fs = require('fs');

try {
  const fileName = core.getInput('file');
  console.log(`Trying ot read shit from file ${fileName}`);
  const data = fs.readFileSync(fileName);
  console.log(`Read data: ${data}`);
  core.setOutput('data', data);
  console.log('xd');
} catch (error) {
  core.setFailed(error.message);
}
