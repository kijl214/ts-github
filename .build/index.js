var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_koa = __toModule(require("koa"));
var import_koa_router = __toModule(require("koa-router"));
var import_koa_logger = __toModule(require("koa-logger"));
var import_koa_json = __toModule(require("koa-json"));
const app = new import_koa.default();
const router = new import_koa_router.default();
const welcomeAPI = async (ctx, next) => {
  ctx.body = {
    message: "Welcome to the blog API!"
  };
  await next();
};
router.get("/", welcomeAPI);
app.use((0, import_koa_logger.default)());
app.use((0, import_koa_json.default)());
app.use(router.routes());
app.listen(10888);
//# sourceMappingURL=index.js.map
