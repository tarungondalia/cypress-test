System requirements
Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

macOS 10.9 and above (64-bit only)
Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
Windows 7 and above

If using npm to install Cypress, we support:

Node.js 8 and above
Installing
 `npm install`

Install Cypress via npm:

Navigate to your project path: `cd /your/project/path`
Run command: `$npm install cypress --save-dev`, This will install Cypress locally as a dev dependency for your project.

Installing Cypress via yarn:

Navigate to your project path: `cd /your/project/path`
Run command: `$yarn add cypress --dev`, This will also install Cypress locally as a dev dependency for your project.


### 1. Fork this repo

If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress

## cd into the cloned repo
cd cypress

## install the node_modules
npm install

## start the local webserver
npm start
```
You should see the Kitchen Sink App up and running. We are now ready to run Cypress tests.

```bash
## launch the cypress test runner
npm run cy:open
```

**shortcut:** you can use command `npm run local:open` that uses [start-server-and-test](https://github.com/bahmutov/start-server-and-test) to start local server and open Cypress. When you close Cypress, the local server is stopped automatically. Similarly you can use `npm run local:run` to start the server, run Cypress tests headlessly and close the server.

### 2. Install & write tests in Cypress

[Follow these instructions to install and write tests in Cypress.](https://on.cypress.io/installing-cypress)

## Contributing

Check out the [Contributing Guideline](/CONTRIBUTING.md).
