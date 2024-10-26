const app = require('./app');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});