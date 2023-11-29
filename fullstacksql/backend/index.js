import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import db from "./config/db.js";
import usersRouter from "./app/users/router.js";
import usersAuthRouter from "./app/usersAuth/router.js";
import productsRouter from "./app/products/router.js";
import roleUsersRouter from "./app/RoleUsers/router.js";
import roleProductsRouter from "./app/RoleProducts/router.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({ db });

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use(
  session({
    secret: `${process.env.SESS_SECRET}`,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto", // https ? true; https ? false http/https ? auto
    },
  })
);
app.use("/users", usersRouter);
app.use("/usersAuth", usersAuthRouter);
app.use("/products", productsRouter);
app.use("/roleUsers", roleUsersRouter);
app.use("/roleProducts", roleProductsRouter);

// store.sync();

app.get("/", (req, res) => {
  res.send("halo");
});

app.listen(3000, () => console.log(`Server running on port 3000`));
