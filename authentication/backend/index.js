import express from "express";
import cors from "cors";
import session from "express-session";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import "dotenv/config";

const app = express();

// (async () => {
//   await db.sync();
// })();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({ db });

app.use(
  session({
    secret: `${process.env.SESS_SECRET}`,
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
      secure: "auto", // jika https ? true : false
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: `http://localhost:5173`,
  })
);
app.use(express.json());

app.use(AuthRoute);
app.use(UserRoute);
app.use(ProductRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => console.log(`Server is running on port ${process.env.APP_PORT}`));
