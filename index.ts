import Koa from "koa";
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
const app: Koa = new Koa();
const router: Router = new Router();
const welcomeAPI = async (ctx: RouterContext, next: any) => {
 ctx.body = {
 message: "Welcome to the blog API!"
 };
 await next();
}
router.get('/', welcomeAPI);
app.use(logger());
app.use(json());
app.use(router.routes());
app.listen(10888);