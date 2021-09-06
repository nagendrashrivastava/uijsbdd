# pixelMatic

# How to run -

## On local -

- Run npm install at the root of assignment
- Run npm run test to open the cypress test runner
- select the only available spec.js file to run all the test cases
- If you wish to run only specific test case, mark it as 'it.only' in integration/pixelmatick.spec.js file

## On Jenkins/Command Line -

- Run npm install at the root of assignment
- Run npx cypress run to execute
- Run 'npx marge functionalTestReport/mochawesome.json --reportDir functionalTestReport' to generate report
- Report will be available in functionalTestReport folder

# How to write tests -

- Tests are present in integration folder as *.feature file
- Step definitions are available at same path of feature file in same folder with name same as feature file
- Common step definitions are available in support/commands.js file
