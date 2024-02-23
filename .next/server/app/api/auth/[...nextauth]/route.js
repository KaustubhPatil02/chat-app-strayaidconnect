"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=K%3A%5CCode%20playground%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=K%3A%5CCode%20playground%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var K_Code_playground_chat_app_strayaidconnect_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"K:\\\\Code playground\\\\chat-app-strayaidconnect\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: K_Code_playground_chat_app_strayaidconnect_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1LJTNBJTVDQ29kZSUyMHBsYXlncm91bmQlNUNjaGF0LWFwcC1zdHJheWFpZGNvbm5lY3QlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUslM0ElNUNDb2RlJTIwcGxheWdyb3VuZCU1Q2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzQztBQUNuSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdC8/NzFlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJLOlxcXFxDb2RlIHBsYXlncm91bmRcXFxcY2hhdC1hcHAtc3RyYXlhaWRjb25uZWN0XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIks6XFxcXENvZGUgcGxheWdyb3VuZFxcXFxjaGF0LWFwcC1zdHJheWFpZGNvbm5lY3RcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=K%3A%5CCode%20playground%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__.PrismaAdapter)(_app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                // Check if email is in proper format\n                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n                if (!emailRegex.test(credentials.email)) {\n                    throw new Error(\"Invalid email format\");\n                }\n                const user = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDc0I7QUFDZ0I7QUFDVjtBQUNBO0FBQ0U7QUFFakI7QUFFakMsTUFBTU8sY0FBMkI7SUFDdENDLFNBQVNILHdFQUFhQSxDQUFDQywwREFBTUE7SUFDN0JHLFdBQVc7UUFDVE4sc0VBQWNBLENBQUM7WUFDYk8sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDekM7UUFDQVgsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDdENGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2hEO1FBQ0FmLDJFQUFtQkEsQ0FBQztZQUNsQmdCLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSxxQ0FBcUM7Z0JBQ3JDLE1BQU1DLGFBQWE7Z0JBQ25CLElBQUksQ0FBQ0EsV0FBV0MsSUFBSSxDQUFDUixZQUFZQyxLQUFLLEdBQUc7b0JBQ3ZDLE1BQU0sSUFBSUssTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTUcsT0FBTyxNQUFNdEIsMERBQU1BLENBQUNzQixJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQ0xWLE9BQU9ELFlBQVlDLEtBQUs7b0JBQzFCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ1EsUUFBUSxDQUFDQSxNQUFNRyxnQkFBZ0I7b0JBQ2xDLE1BQU0sSUFBSU4sTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTU8sb0JBQW9CLE1BQU1oQyxxREFBYyxDQUM1Q21CLFlBQVlJLFFBQVEsRUFDcEJLLEtBQUtHLGNBQWM7Z0JBR3JCLElBQUksQ0FBQ0MsbUJBQW1CO29CQUN0QixNQUFNLElBQUlQLE1BQU07Z0JBQ2xCO2dCQUVBLE9BQU9HO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RNLE9BQU92QixrQkFBeUI7SUFDaEN3QixTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFRMUIsUUFBUUMsR0FBRyxDQUFDMEIsZUFBZTtBQUNyQyxFQUFDO0FBRUQsTUFBTUMsVUFBVXRDLGdEQUFRQSxDQUFDTTtBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCJcbmltcG9ydCBOZXh0QXV0aCwgeyBBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiXG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvYXBwL2xpYnMvcHJpc21hZGJcIlxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgYXMgc3RyaW5nLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUIGFzIHN0cmluZ1xuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIGFzIHN0cmluZyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nXG4gICAgfSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ3Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIGVtYWlsIGlzIGluIHByb3BlciBmb3JtYXRcbiAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdChjcmVkZW50aWFscy5lbWFpbCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgZm9ybWF0Jyk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyPy5oYXNoZWRQYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLmhhc2hlZFBhc3N3b3JkXG4gICAgICAgICk7XG4gICAgICBcbiAgICAgICAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufVxuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiYmNyeXB0IiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwiZW1haWxSZWdleCIsInRlc3QiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc0NvcnJlY3RQYXNzd29yZCIsImNvbXBhcmUiLCJkZWJ1ZyIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/libs/prismadb.ts":
/*!******************************!*\
  !*** ./app/libs/prismadb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// import { PrismaClient } from \"@prisma/client\"\n// declare global {\n//   var prisma: PrismaClient | undefined\n// }\n// const client = globalThis.prisma || new PrismaClient()\n// if (process.env.NODE_ENV !== \"production\") globalThis.prisma = client\n// export default client\n// old code\n\nconst prisma = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prisma;\n// async function main() {\n//   await prisma.conversation.createMany({\n//     data: [\n//       { name: 'Chatroom 1', isGroup: true },\n//       { name: 'Chatroom 2', isGroup: true },\n//       { name: 'Chatroom 3', isGroup: true },\n//     ],\n//   })\n// }\nasync function main() {\n    const existingChatrooms = await prisma.conversation.findMany({\n        where: {\n            OR: [\n                {\n                    name: \"StrayAidConnect- Vasai-Virar\"\n                },\n                {\n                    name: \"StrayAidConnect- Mumbai\"\n                },\n                {\n                    name: \"StrayAidConnect- Thane\"\n                }\n            ]\n        }\n    });\n    if (existingChatrooms.length === 0) {\n        await prisma.conversation.createMany({\n            data: [\n                {\n                    name: \"StrayAidConnect- Vasai-Virar\",\n                    isGroup: true\n                },\n                {\n                    name: \"StrayAidConnect- Mumbai\",\n                    isGroup: true\n                },\n                {\n                    name: \"StrayAidConnect- Thane\",\n                    isGroup: true\n                }\n            ]\n        });\n    }\n}\nmain().catch((e)=>{\n    throw e;\n}).finally(async ()=>{\n    await prisma.$disconnect();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGlicy9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBZ0Q7QUFFaEQsbUJBQW1CO0FBQ25CLHlDQUF5QztBQUN6QyxJQUFJO0FBRUoseURBQXlEO0FBQ3pELHdFQUF3RTtBQUV4RSx3QkFBd0I7QUFDeEIsV0FBVztBQUVrQztBQU03QyxNQUFNQyxTQUFTQyxXQUFXRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBQ3BELElBQUlHLElBQXFDLEVBQUVELFdBQVdELE1BQU0sR0FBR0E7QUFFL0QsMEJBQTBCO0FBQzFCLDJDQUEyQztBQUMzQyxjQUFjO0FBQ2QsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsU0FBUztBQUNULE9BQU87QUFDUCxJQUFJO0FBQ0osZUFBZUc7SUFDYixNQUFNQyxvQkFBb0IsTUFBTUosT0FBT0ssWUFBWSxDQUFDQyxRQUFRLENBQUM7UUFDM0RDLE9BQU87WUFDTEMsSUFBSTtnQkFDRjtvQkFBRUMsTUFBTTtnQkFBK0I7Z0JBQ3ZDO29CQUFFQSxNQUFNO2dCQUEwQjtnQkFDbEM7b0JBQUVBLE1BQU07Z0JBQXlCO2FBQ2xDO1FBQ0g7SUFDRjtJQUVBLElBQUlMLGtCQUFrQk0sTUFBTSxLQUFLLEdBQUc7UUFDbEMsTUFBTVYsT0FBT0ssWUFBWSxDQUFDTSxVQUFVLENBQUM7WUFDbkNDLE1BQU07Z0JBQ0o7b0JBQUVILE1BQU07b0JBQWdDSSxTQUFTO2dCQUFLO2dCQUN0RDtvQkFBRUosTUFBTTtvQkFBMkJJLFNBQVM7Z0JBQUs7Z0JBQ2pEO29CQUFFSixNQUFNO29CQUEwQkksU0FBUztnQkFBSzthQUNqRDtRQUNIO0lBQ0Y7QUFDRjtBQUNBVixPQUNHVyxLQUFLLENBQUNDLENBQUFBO0lBQ0wsTUFBTUE7QUFDUixHQUNDQyxPQUFPLENBQUM7SUFDUCxNQUFNaEIsT0FBT2lCLFdBQVc7QUFDMUI7QUFFRixpRUFBZWpCLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC1zdHJheWFpZGNvbm5lY3QvLi9hcHAvbGlicy9wcmlzbWFkYi50cz83ODJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG4vLyB9XG5cbi8vIGNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBjbGllbnRcblxuLy8gZXhwb3J0IGRlZmF1bHQgY2xpZW50XG4vLyBvbGQgY29kZVxuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxUaGlzLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KClcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbFRoaXMucHJpc21hID0gcHJpc21hXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4vLyAgIGF3YWl0IHByaXNtYS5jb252ZXJzYXRpb24uY3JlYXRlTWFueSh7XG4vLyAgICAgZGF0YTogW1xuLy8gICAgICAgeyBuYW1lOiAnQ2hhdHJvb20gMScsIGlzR3JvdXA6IHRydWUgfSxcbi8vICAgICAgIHsgbmFtZTogJ0NoYXRyb29tIDInLCBpc0dyb3VwOiB0cnVlIH0sXG4vLyAgICAgICB7IG5hbWU6ICdDaGF0cm9vbSAzJywgaXNHcm91cDogdHJ1ZSB9LFxuLy8gICAgIF0sXG4vLyAgIH0pXG4vLyB9XG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBleGlzdGluZ0NoYXRyb29tcyA9IGF3YWl0IHByaXNtYS5jb252ZXJzYXRpb24uZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBPUjogW1xuICAgICAgICB7IG5hbWU6ICdTdHJheUFpZENvbm5lY3QtIFZhc2FpLVZpcmFyJyB9LFxuICAgICAgICB7IG5hbWU6ICdTdHJheUFpZENvbm5lY3QtIE11bWJhaScgfSxcbiAgICAgICAgeyBuYW1lOiAnU3RyYXlBaWRDb25uZWN0LSBUaGFuZScgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKGV4aXN0aW5nQ2hhdHJvb21zLmxlbmd0aCA9PT0gMCkge1xuICAgIGF3YWl0IHByaXNtYS5jb252ZXJzYXRpb24uY3JlYXRlTWFueSh7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIHsgbmFtZTogJ1N0cmF5QWlkQ29ubmVjdC0gVmFzYWktVmlyYXInLCBpc0dyb3VwOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ1N0cmF5QWlkQ29ubmVjdC0gTXVtYmFpJywgaXNHcm91cDogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWU6ICdTdHJheUFpZENvbm5lY3QtIFRoYW5lJywgaXNHcm91cDogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxufVxubWFpbigpXG4gIC5jYXRjaChlID0+IHtcbiAgICB0aHJvdyBlXG4gIH0pXG4gIC5maW5hbGx5KGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsVGhpcyIsInByb2Nlc3MiLCJtYWluIiwiZXhpc3RpbmdDaGF0cm9vbXMiLCJjb252ZXJzYXRpb24iLCJmaW5kTWFueSIsIndoZXJlIiwiT1IiLCJuYW1lIiwibGVuZ3RoIiwiY3JlYXRlTWFueSIsImRhdGEiLCJpc0dyb3VwIiwiY2F0Y2giLCJlIiwiZmluYWxseSIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/libs/prismadb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=K%3A%5CCode%20playground%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();