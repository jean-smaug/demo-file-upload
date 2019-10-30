import Koa from "koa";
import Router from "@koa/router"
import logger from "koa-logger"
const multer = require('@koa/multer');

const app: Koa = new Koa();
const router: Router = new Router();
const upload = multer();

app.use(logger())

router.post("/upload", upload.single('profile'), (ctx: any) => {
  ctx.status = 200
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000,  () => console.log("listening on port 4000"));
