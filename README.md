# AdTestingWithCypress

Hi,

Here is my automation testing using Cypress.

I did not know whether you are working with Cucumber or not, so I created 2 different tests:
- 'cypress\integration\automationTest.js' is a simple js file and runs my automation test
- 'cypress\integration\Cucumber\testWithCucumber.feature' is a feature file working with Cucumber and BDD syntax.

What do you need in order to run the test:
- Visual Studio code is not necessary but it would be easier
- Node.js

How to run the tests with the TestRunner:
- In Visual Studio Code, open a new terminal (In the menu bar > 'Terminal' > 'New Terminal')
- Type 'npx cypress open'
- Click on 'automationTest.js' or 'testWithCucumber.feature'

How to run the tests with a command line:
- Still from the terminal, type 'npx cypress run'

Where are the reports?
For the simple .js file, you will find the 'mochawesome-report\mochawesome.html'. Simply open it in your explorer.
For the .feature file, in the terminal, type 'node cypress\cucumber-html-report.js'. A html page will open in your browser.

Screenshots and video on test failures:
If one of the test fails, a screenshot and a video a automatically taken and saved. You'll find the screenshot and the video in 'cypress\screenshots' and 'cypress\videos' folders respectively.

About the test:
The framework is not using the Page Object Model. I did not find it usefull in this case, mostly because the test is very short.
Also, you will find that I divide all test into small blocks of code ("it" blocks in .js file. Several scenarios in .feature file).
This is because I want all my tests to be independant from one another. That way, I am certain that all tests are isolated and do not affect the behavior of others.

Looking forward to hearing from you,
Best,
Nicolas


