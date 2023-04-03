var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
__export(exports, {
  router: () => router
});
var import_koa_router = __toModule(require("koa-router"));
var import_koa_bodyparser = __toModule(require("koa-bodyparser"));
const router = new import_koa_router.default({ prefix: "/api/v1/articles" });
const articles = [
  { title: "hello article", fullText: "some text here to fill the body" },
  { title: "another article", fullText: "again here is some text here to fill" },
  { title: "coventry university", fullText: "some news about coventry university" },
  { title: "smart campus", fullText: "smart campus is coming to IVE" }
];
const getAll = async (ctx, next) => {
  ctx.body = articles;
  await next();
};
const getById = async (ctx, next) => {
  let id = ctx.params.id;
  if (id < articles.length + 1 && id > 0) {
    ctx.body = articles[id - 1];
  } else {
    ctx.status = 404;
  }
  await next();
};
const createArticle = async (ctx, next) => {
  let { title, fullText } = ctx.request.body;
  let newArticle = { title, fullText };
  articles.push(newArticle);
  ctx.status = 201;
  ctx.body = newArticle;
  await next();
};
const updateArticle = async (ctx, next) => {
};
const deleteArticle = async (ctx, next) => {
};
router.get("/", getAll);
router.post("/", (0, import_koa_bodyparser.default)(), createArticle);
router.get("/:id([0-9]{1,})", getById);
router.put("/:id([0-9]{1,})", updateArticle);
router.del("/:id([0-9]{1,})", deleteArticle);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  router
});
//# sourceMappingURL=articles.js.map
