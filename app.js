import express from "express";
import { shortenerRoutes } from "./routes/shortener.routes.js";
import { authRoutes } from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import {verifyAuthentication} from "./middlewares/verify-auth-middleware.js"
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(cookieParser())

app.use(
  session({ secret: "my-secret", resave: true, saveUninitialized: false })
);
app.use(flash());

app.use(verifyAuthentication)

app.use((req,res,next)=>{
  res.locals.user = req.user;
  return next();
})
// app.set("views", "./views")

//? In Express.js, a template engine is a tool that lets you embed dynamic content into HTML files and render them on the server before sending them to the client. It allows you to create reusable templates, making it easier to generate dynamic web pages with minimal code.

// express router
// app.use(router);
app.use(authRoutes)
app.use(shortenerRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 