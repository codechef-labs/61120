#!/bin/bash
# cd /home/chef/workspace
node node_modules/vitest/vitest.mjs run --config=.tests/config.js --reporter=json --outputFile=.tests/payload.json
node .tests/process.js