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
### 6. cookie-parser
### 7. CORS

```
npm i mongoose express dotenv
```
## DB Connection:
MongoDB Atlas is used here.

Some best pratices listed below:

- "Database is always in another continent"😁. 
below are the mandatory things to do while connecting to db.
- while connecting to databse there are chances of errors so always wrap in ```try catch block or promise```.
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

3. most of the middlewares are used using app.use() or for any configuration settings.
```
npm i cookie-parser cors
```
4. multer is used for file uploading
5. data from url- url may add some special characters( by url encoder) in between data like google.com/apple%20pie.
6. cookie-parser: to access user's browerser's cookies from server and set its cookies(basically CURD operation). we can store secure cookies in user's browser. Those secure cookies only server can read and delete

Higner order functions: which accepts functions as a parameter or return it. basically they treat functions as variable.

## Node js api error: https://nodejs.org/api/errors.html#class-error
To handle errors for promise/try catch to make it uniform that centain properties will be sent in response. 
need class, inheretance, 

## Modeling
 for user id,when mongodb saves user it will generate ID with will be in bson data 
 - https://www.mongodb.com/resources/basics/json-and-bson
 







