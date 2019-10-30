import Koa from "koa";
import Router from "@koa/router"
import logger from "koa-logger"
import fs from "fs";
import path from "path"
const multer = require('@koa/multer');

const app: Koa = new Koa();
const router: Router = new Router();
const upload = multer();

const storagePath = path.join(__dirname, "../../storage")

if(!fs.existsSync(storagePath)) {
  fs.mkdirSync(storagePath)
}

app.use(logger())

router.post("/upload", upload.single('file'), (ctx: any) => {
  const { originalname, buffer } = ctx.request.file

  fs.writeFileSync(`${storagePath}/${originalname}`, buffer)

  ctx.status = 200
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000,  () => console.log("listening on port 4000"));
