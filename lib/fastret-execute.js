const loadJsonFile = require('load-json-file');
const FastRet = require('fastret-framework');


const executeFastRet = async (args) => {

  try {

    if (!args || args.length === 0) {
      throw new Error('No test data json file path provided');
    }

    const path = args[0];
    const data = await loadJsonFile(path);

    // Initialize fastret-framework and execute input tests data
    const fastRetSuite = new FastRet(data);
    fastRetSuite.execute();

  } catch (err) {
    
    throw err;
  }
};


module.exports = executeFastRet;
