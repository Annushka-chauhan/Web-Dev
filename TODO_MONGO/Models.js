const mongoose = require("mongoose")
//For every collection which we have in our database create the mongoose schema and model object 
//schema => how does the data looks like 
//using mongoose we need to describe schema 
mongoose.connect("mongodb+srv://anushkachauhanannu_db_user:Anushka7182@practicecluster.pshvkwj.mongodb.net/todo")
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})
const TodoSchema= new mongoose.Schema({
    title: String,
    description: String,
    userId :{
       type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
});
//Model lets us connect 
const userModel = mongoose.model("users",UserSchema);
const todoModel = mongoose.model("todos",TodoSchema);

module.exports={
    userModel: userModel,
    todoModel: todoModel,
}