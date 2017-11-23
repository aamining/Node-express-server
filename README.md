Making new directory 'express-server'

yarn init -y

yarn add express

```
expressjs.com -> getting started -> hello world

```
To update server automatically :

```
yarn add nodemon

```
package.json structure should be like this: scripts before dependencies

```
"name": "express-server",
"version": "1.0.0",
"main": "index.js",
"license": "MIT",

"scripts": {
  "start": "nodemon --exec node server.js"
},
"dependencies": {
  "ejs": "^2.5.7",
  "express": "^4.16.2",
  "nodemon": "^1.12.1"
}
}
```

to start the app no longer use node appname to Start the app

  ```
  yarn start

  ```
  creating 'server.js'

  from http://expressjs.com/ -> Getting Started -> and add

  '''

  const express = require('express')
  const app = express()

  app.get('/', (req, res) => res.send('Hello World!'))

  app.listen(3000, () => console.log('Example app listening on port 3000!'))

  '''

  add this two to above code:

  ```
  app.get('/', (req, res) => res.send('This is get'))

  app.post('/',(req, res) => res.send('This is a Post'))

  ```

  Yarn start. But just one line (fist line) run and stop. This is because of send request.

  to be able to use all root we need to add from http://expressjs.com/ -> Guide ->

  routing:

  note: secret word after slash removed.

  ```

  app.all('/', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

  ```
