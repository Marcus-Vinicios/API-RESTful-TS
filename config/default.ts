const db = {
  User: process.env.DB_USER,
  Password: process.env.DB_PASSWORD,
}

export default {
  port: process.env.PORT,
  dbUri: `mongodb+srv://${db.User}:${db.Password}@cluster0.4inof8i.mongodb.net/?retryWrites=true&w=majority`
};