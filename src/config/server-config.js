// congifuration means values that decide how your application runs without changing the code 

const dotenv = require ('dotenv');    // returns dotenv object 

dotenv.config();    // on that obj we need to call that paticular function to read the .env file and and loads
                     // it's values into process.env

// console.log (process.env)
module.exports = {
      PORT: process.env.PORT
}