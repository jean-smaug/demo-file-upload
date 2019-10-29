import Koa, { Context } from "koa";

const app: Koa = new Koa();

app.use((ctx: Context) => {
  ctx.body = "Jon Snow meurt saison 5 épisode 10";
});

app.listen(8080);
console.log("listening on port 8080");
