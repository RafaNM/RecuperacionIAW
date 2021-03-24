const connectDB = require('./config/db')

//Load config
dotenv.config({path: './config/config.env'})
connectDB()
