import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "LearnsqEL3",
  database: "expensedb",
});

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.json("Hello, this is the backend");
});

app.post("/api/v1/register", (request, response) => {
  const q =
    "INSERT INTO user (`email`, `password`, `first_name`, `last_name`) VALUES (?)";
  const values = [
    request.body.email,
    request.body.password,
    request.body.firstname,
    request.body.lastname,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error("Database error: ", err);
      return response.status(500).json({ error: "Internal Server Error " });
    } else {
      return response.status(200).json("User has been registered successfully");
    }
  });
});

app.post("/api/v1/login", (request, response) => {
  const q = "SELECT * FROM user WHERE `email` = ? AND `password` = ?";

  db.query(q, [request.body.email, request.body.password], (err, data) => {
    if (err) {
      return response.status(500).json(err);
    } else {
      // return response.status(200).json("User has been signed in successfully");
      return response.status(200).json(data);
    }
  });
});

app.post("/api/v1/forgot_password", (request, response) => {
  const q = "UPDATE user SET `password` = ? WHERE `email` = ?";
  // const values = [request.body.password, request.body.email];

  db.query(q, [request.body.password, request.body.email], (err, data) => {
    if (err) {
      return response.status(500).json(err);
    } else {
      return response.status(200).json(data);
    }
  });
});

app.get("/api/v1/user/:id", (request, response) => {
  const userId = request.params.id;
  const q = "SELECT * FROM user WHERE `user_id` = ?";

  db.query(q, [userId], (err, data) => {
    if (err) {
      return response.status(500).json(err);
    } else {
      return response.status(200).json(data);
    }
  });
});

app.post("/api/v1/addExpenseFolder", (request, response) => {
  const q = "INSERT INTO expense_folder (`user_id`, `name`) VALUES (?)";
  const values = [request.body.userId, request.body.folderName];

  db.query(q, [values], (err, data) => {
    if (err) {
      return response.status(500).json(err);
    } else {
      return response.status(200).json(data);
    }
  });
});

app.get("/api/v1/expenseFolder/:id", (request, response) => {
  const userId = request.params.id;
  const q = "SELECT * FROM expense_folder WHERE `user_id` = ?";

  db.query(q, [userId], (err, data) => {
    if (err) {
      return response.status(500).json(err);
    } else {
      return response.status(200).json(data);
    }
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
