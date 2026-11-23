\# Playwright Login Tests



Automated login tests using Playwright and TypeScript.



\## Test Website



https://practicetestautomation.com/practice-test-login/



\## Test Scenarios



1\. \*\*Positive Login\*\*

&#x20;  - Enter valid credentials.

&#x20;  - Verify successful login.

&#x20;  - Verify the logout link is visible.



2\. \*\*Negative Login\*\*

&#x20;  - Enter an invalid password.

&#x20;  - Verify the error message.

&#x20;  - Verify the user remains on the login page.



\## Installation



```bash

npm install

npx playwright install chromium

```



\## Run Tests



```bash

npx playwright test login.spec.ts

```



\## Generate HTML Report



```bash

npx playwright test login.spec.ts --reporter=html

npx playwright show-report

```



\## Test Results



Both automated tests passed successfully (2/2 PASS).



\## Tools



\- Playwright

\- TypeScript

\- Node.js

\- EPAM ELITEA with Playwright MCP

