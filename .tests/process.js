import fs from 'fs';

// Read the payload.json file
const payload = JSON.parse(fs.readFileSync('.tests/payload.json', 'utf8'));

// Create simplified test results
const simplifiedResults = payload.testResults[0].assertionResults.map(test => {
    // Extract test number from the fullName (assuming format includes number at start)
    const testNumber = test.fullName.match(/\d+/)[0];
    
    return {
        testNumber: parseInt(testNumber),
        status: test.status
    };
});

// Write to test-results.json
fs.writeFileSync('.tests/test-results.json', JSON.stringify(simplifiedResults, null, 2));