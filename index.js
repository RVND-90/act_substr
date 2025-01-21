const core = require("@actions/core");
const github = require("@actions/github");

try {
  // Fetch the value of the input 'who-to-greet' specified in action.yml
  const valdata = core.getInput("valdata");
  let dataOut = valdata;
  console.log(`input: ${valdata}`);
  const varName = core.getInput("variable-name");
  const mode = core.getInput("mode");
  const dlength = core.getInput("length");
  if (mode == "head") {
    dataOut = valdata.substring(0, dlength);
  } else if (mode == "tail") {
    dataOut = valdata.substring(valdata.length - dlength);
  } else {
    throw new Error("mode should be head or tail");
  }
  console.log(`output: ${dataOut}`);

  // Record the time of greeting as an output
  core.setOutput("name", varName);
  core.setOutput("value", dataOut);
} catch (error) {
  // Handle errors and indicate failure
  core.setFailed(error.message);
}
