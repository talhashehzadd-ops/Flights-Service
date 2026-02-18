This is a base node js projrct template, which anyone can use as it is been prepared, by keeping some of the important code principles and projects management recommedations. Feel free to change anyting.


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of text. (You may want to make seprate folder for test)

Let's take a look inside the `src` folder

- `config`  -> In this folder anything and everything regarding any configurations of setup of a library or module will be done. For example setting up `dotenv` so that we can use the env variables anywhere in a cleaner fashion this is done in the` index.js `file.(Will add the logging library later that helps you to prepare meaningful logs)

- `routes`  -> In the routes folder, we register a route and the corresponding middleware and controllers to it.Here we actually try to modularize the the routes registration and controller bondings, making them mountable.