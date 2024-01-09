const Todo = require("../models/Todo");

// define route handler
exports.deleteTodo = async (req, res) => {
    try {
       const {id} = req.params;

       await Todo.findByIdAndDelete(id);

       res.json({
        success:ture,
        message:"Todo Deleted",
       })
    }
    catch (err) {
        console.error(err);
        onsole.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server Error',
        });
        
    }
}