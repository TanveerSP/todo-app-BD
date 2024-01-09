// import the model
const Todo = require("../models/Todo");

// define route handler
// ye wala code bhi fix hoga all time but kuch changes karna hoge
exports.createTodo = async(req,res) => { // req is a requist and res is response
    try{
        // extract title and description from request body
        const {title,description} = req.body;

        // create a new Todo Object and insert in DB
        const response = await Todo.create({title,description}); 

        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                massage:'Entery Created Successfullly'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json ({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}