This is a base node js projrct template, which anyone can use as it is been prepared, by keeping some of the important code principles and projects management recommedations. Feel free to change anyting.


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You may want to make seprate folder for test)

Let's take a look inside the `src` folder

- `config`  -> congifuration means values that decide how your application runs without changing the code 
In this folder anything and everything regarding any configurations of setup of a library or module will be done. For example setting up `dotenv` so that we can use the env variables anywhere in a cleaner fashion, this is done in the `config-index.js` file.(Will add the logging library later that helps you to prepare meaningful logs)

- `routes`  -> In the routes folder, we register a route and the corresponding middleware and controllers to it.Here we actually try to modularize the the routes registration and controller bindings, making them mountable by using `express router` class

- `middleware`  -> they are just going to intercept the incoming requests where we can write our validiators, authenticators etc.

-`controllers` -> they are kind of the last middleware as post them we call the business layer to execute the business logic. In controllers we just receive the incoming requests and data then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

-`repositories` -> this folder contains all the logic using which we interect the DB by writing queries, all the raw quwries or ORM queries will go here.

-`services` -> contains the business logic and interect with repositories for data from the DB.
-(Technically services, repositories and models together will make our model layer of MVC)

-`utils` -> contains helpers methods, error classes etc.

### Setup the project 

- Download this template from github and open it in your fav. text editor.
- In the root directory create a `.env` file and add the following env. variables 
  ```
  PORT=<port no of your choice>
  ```
ex: 
```
    PORT=3000
```

### ORM :

- It is going to make surre that whenever we are going to write sql queries we don't write pain RAW sql queries and going to use object oriented code for it

- We will integrate the sequelize orm whoch will help to convert the RDBMS based sql queries to object oriented code

- Sequelize is like a object oriented layer sitting on top of DB 

- install it by `npm install sequelize` 

- Sequelize might need different kind of interfaces to interect with different different RDBMS in that case we need to install driver 

- this driver will automatically hepl the sequelize to automatically understand that this kind of DB is going to be connected(what coidng implementations it need it will directly fetch it from the drivers)

- We will install the driver : npm install mysql2

- When you will see the documentation of sequelize we have to do a lot of code impletations for sequelize

- Since i want to directly setup start my express project without going into clumpsy code setup (which is incase for sequelize)

- In the world of Rails and Django they actually do it ,a lot of things behind the scene automatically but not incase of node sequelize here we have to make a lot of effort 

- But but but , there is a package whihc is autually supported by sequwlize itself to make your life easy called `sequelize-cli`

- npm i sequelize-cli

- What sequwelize cli does is it it gives us a set of commands which is consistent with other framewokr as well (rails, djnago)

- Since our actual coding implementations is going to be inside src folder so there is a command that initializes a sequelize project: `npx sequelize init `
install it inside the src folder (cd src)

- It will give us some folders  1. config-> config.json
this json gives configuration for three  different environments for its individual purpose without provind the enc where end user interect :development, test, production.

- Inside the `src/config` folder create a file name as `config.json` and write the following code :
```
{
  "development": {
    "username": "root",
    "password": "mypassowrd",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

- If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

