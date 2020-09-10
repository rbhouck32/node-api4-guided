require("dotenv").config();
const server = require("./api/server.js");

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Notes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
//phases of devOps

//  development, testing, staging, production
// the idea of devops is the ability to automate all these phases

// development environment for example, Your Computer
// Testing environment : if tests pass then via automation they will be moved to staging environment
// Staging Environment : Once in staging needs be be manually tested and looked over before approval for deployment
// Deployment/ Production Environment : Code is Live and Public

// set environment variable by using syntax such ass PORT=4004 then
//  export PORT=4004
// env || sort

// delete variable by using unset command

// twelve factor app methodology www.12factor.net
