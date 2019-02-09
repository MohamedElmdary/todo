process.env.dbUrl = process.env.PORT ? "" : "mongodb://localhost:27017/mydb";

process.env.PORT = process.env.PORT ? process.env.PORT : 3000;

process.env.jwtPassword = "my-awesome-password";