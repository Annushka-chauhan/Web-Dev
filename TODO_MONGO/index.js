const express = require("express");
const jwt = require("jsonwebtoken");
const { userModel, todoModel } = require("./Models");
const { authMiddleWare } = require("./middleware");

const app = express();

app.use(express.json());

// Signup
app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await userModel.findOne({
        username: username
    });

    if (existingUser) {
        return res.status(403).json({
            message: "User already exists"
        });
    }

    const newUser = await userModel.create({
        username,
        password
    });

    res.json({
        id: newUser._id
    });
});

// Signin
app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExist = await userModel.findOne({
        username,
        password
    });

    if (!userExist) {
        return res.status(403).json({
            message: "Incorrect credentials"
        });
    }

    const token = jwt.sign(
        {
            userId: userExist._id
        },
        "secret123123"
    );

    res.json({
        token
    });
});

// Create Todo
app.post("/todo", authMiddleWare, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;

    const todo = await todoModel.create({
        title,
        description,
        userId
    });

    res.json({
        message: "Todo created successfully",
        todoId: todo._id
    });
});

// Delete Todo
app.delete("/todo/:todoId", authMiddleWare, async (req, res) => {
    const userId = req.userId;
    const todoId = req.params.todoId;

    const todo = await todoModel.findOne({
        _id: todoId,
        userId: userId
    });

    if (!todo) {
        return res.status(403).json({
            message: "Either todo doesn't exist or this is not your todo"
        });
    }

    await todoModel.deleteOne({
        _id: todoId
    });

    res.json({
        message: "Deleted"
    });
});

// Get Todos
app.get("/todos", authMiddleWare, async (req, res) => {
    const userId = req.userId;

    const todos = await todoModel.find({
        userId: userId
    });

    res.json({
        todos
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});