// import the model
const Todo = require("../models/Todo");

// define route handler
exports.getTodo = async (req, res) => { // req is a requist and res is response
    try {
        // fetch all todo items from database
        const todos = await Todo.find({});

        //response 
        res.status(200).json(
            {
                success: true,
                data: todos,
                massage: 'Entire Todo Data is fetched',
            });
    }
    catch (err) {
        console.error(err);
        onsole.log(err);

        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: "internal server error",
            })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        //  extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({
            _id:
                id
        })

        // data forgiven id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                massage: "No Data Found woth Given Id",
            })
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully feched`
        })

    }
    catch (err) {
        console.error(err);
        onsole.log(err);

        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: "internal server error",
            })
    }
}
