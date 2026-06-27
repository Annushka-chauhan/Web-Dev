const express = require("express");
const jwt = require("jsonwebtoken");
const { authMiddleWare } = require("./middleware");

const app = express();
app.use(express.json());

let CURRENT_USER_ID = 1;
let CURRENT_TODO_ID = 1;

const USERS = [];
const TODOS = [];

// Signup
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find(
        u => u.username === username
    );

    if (existingUser) {
        return res.status(403).json({
            message: "User already exists"
        });
    }

    USERS.push({
        id: CURRENT_USER_ID++,
        username,
        password
    });

    res.json({
        message: "User created successfully",
        id: CURRENT_USER_ID - 1
    });
});

// Signin
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExist = USERS.find(
        u => u.username === username && u.password === password
    );

    if (!userExist) {
        return res.status(403).json({
            message: "Incorrect credentials"
        });
    }

    const token = jwt.sign(
        {
            userId: userExist.id
        },
        "secret123123"
    );

    res.json({
        token
    });
});

// Create Todo
app.post("/todo", authMiddleWare, (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;

    TODOS.push({
        id: CURRENT_TODO_ID++,
        title,
        description,
        userId
    });

    res.json({
        message: "Todo created successfully",
        todoId: CURRENT_TODO_ID - 1
    });
});


app.delete("/todo/:todoId", authMiddleware, (req, res) => {
    const userId = req.userId;
    const todoId = Number(req.params.todoId);

    const doesUserOwnTodo = TODOS.find(
        t => t.id === todoId && t.userId === userId
    );

    if (doesUserOwnTodo) {
        TODOS = TODOS.filter(t => t.id !== todoId);

        res.json({
            message: "Deleted"
        });
    } else {
        res.status(411).json({
            message: "Either todo doesn't exist or this is not your todo"
        });
    }
});
// Get Todos
app.get("/todos", authMiddleWare, (req, res) => {
    const userId = req.userId;

    const userTodos = TODOS.filter(
        todo => todo.userId === userId
    );

    res.json({
        todos: userTodos
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
