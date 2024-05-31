# Chai-Backend
Learning Project and Notes for Backend with Chai ☕

## Links: 
- [Model Link](https://app.eraser.io/workspace/71R8aofZoj3QF4f1JKdK) --> Made with Eraser.io

nodemon: This just restarts server automatically after file is saved
- it is dev dependency which means we can use this only in development environment.
link: [NodeMon](https://www.npmjs.com/package/nodemon)
```
npm i -D nodemon
```
in above D means Dev dependency
```
"scripts": {
    "dev": "nodemon src/index.js"
  },
```
command: 
```
touch app.js constants.js index.js
```

middleware:
if there is one request before server fulfill that request if we want to executed some logic suck as cookies. if a user is valid to use that information from server.

```
mkdir db middlewares models routes utils
```
ultils means utility such as file uplodad, mail, 


