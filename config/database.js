const mongoose = require("mongoose");

// dotnev fill are export to hier
require("dotenv").config(); // aager ye vale line ko yani .env file ko 
// export karne ke liya " npm i dotenv " ko Terminal me run karnna hoga

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then( () => console.log("DB Connection is Successful") )
        .catch((error) => {
            console.log('Issue in DB Connection');
            console.error(error.message);
            process.exit(1);
        }
        )
}

module.exports = dbConnect;

