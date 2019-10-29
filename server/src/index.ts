import Koa, { Context } from "koa";
const multer = require('@koa/multer');

const app: Koa = new Koa();
const upload = multer();

app.use(upload.single('profile'))

app.use((ctx: Context) => {
  ctx.status = 201;
});

app.listen(8080);
console.log("listening on port 8080");
