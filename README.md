# loghour

[![Join the chat at https://gitter.im/99xt/loghour](https://badges.gitter.im/99xt/loghour.svg)](https://gitter.im/99xt/loghour?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Time Tracker hub for Geeks.

## Setup Project
Go to project root folder and execute the following commands

* Intall Project NPM dependencies
```
npm install
```

* Install Global NPM Dependencies
```
npm install serverless@1.0 webpack webpack-dev-server -g
```

* Initialize Serverless Project

1) Create a AWS User with Credentials and Grant Administrator Access Policy
http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

2) Set Up the AWS Command Line Interface
http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-set-up.html

3) Go to the project root folder and execute the following command
```
gulp deploy-api dev
```
Note:- Here 'dev' is the Stage and You can use a different Stage also
