# Chai-Backend
Learning Project and Notes for Backend with Chai ☕

## Links: 
- [Model Link](https://app.eraser.io/workspace/71R8aofZoj3QF4f1JKdK) --> Made with Eraser.io

- generate gitignore: [Link](https://mrkandreev.name/snippets/gitignore-generator/#Node)

## Packages:

### 1. nodemon: This just restarts server automatically after file is saved
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
just extra thing learned 😊:
command: 
```
touch app.js constants.js index.js
```

middleware:
if there is one request before server fulfill that request if we want to executed some logic suck as cookies. if a user is valid to use that information from server.

```
mkdir db middlewares models routes utils
```
ultils means utility such as file uplodad, mail. 

### 2. Npm Prettier: [Link](https://www.npmjs.com/package/prettier)
to make consistency throughout project its best while working in team.
its a dev dependency
```
npm i -D prettier
```
### 3. DotENV
### 4. Express
### 5. Mongoose
```
npm i mongoose express dotenv
```
## DB Connection:
MongoDB Atlas is used here.

Some best pratices listed below:

- while connecting to databse there are chances of errors so always wrap in ```try catch block or promise```.
- "Database is always in another continent"😁. 
- which means when ever communicating with database it takes time.so add ```async await```. 

## async await:
```
;(async()=>{})() //semicolon is goo to have to 
```
below code to allow experminatal feature
```
"scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  },
```
## Express
1. Request:<br/>
To handle data recieved.
some most used here will be:<br/>
req.params(data from URL), <br/>
req.body(here body-parser is used which will be implicilty given by express no need seperate package).
req.cookies()
2. Response
To handle how to response






