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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var K_Code_playground_strayAid_Connect_Chat_App_chat_app_strayaidconnect_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"K:\\\\Code playground\\\\strayAid-Connect--Chat-App\\\\chat-app-strayaidconnect\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: K_Code_playground_strayAid_Connect_Chat_App_chat_app_strayaidconnect_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1LJTNBJTVDQ29kZSUyMHBsYXlncm91bmQlNUNzdHJheUFpZC1Db25uZWN0LS1DaGF0LUFwcCU1Q2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9SyUzQSU1Q0NvZGUlMjBwbGF5Z3JvdW5kJTVDc3RyYXlBaWQtQ29ubmVjdC0tQ2hhdC1BcHAlNUNjaGF0LWFwcC1zdHJheWFpZGNvbm5lY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDa0U7QUFDL0k7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC1zdHJheWFpZGNvbm5lY3QvPzg1ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiSzpcXFxcQ29kZSBwbGF5Z3JvdW5kXFxcXHN0cmF5QWlkLUNvbm5lY3QtLUNoYXQtQXBwXFxcXGNoYXQtYXBwLXN0cmF5YWlkY29ubmVjdFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJLOlxcXFxDb2RlIHBsYXlncm91bmRcXFxcc3RyYXlBaWQtQ29ubmVjdC0tQ2hhdC1BcHBcXFxcY2hhdC1hcHAtc3RyYXlhaWRjb25uZWN0XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__.PrismaAdapter)(_app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                // Check if email is in proper format\n                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n                if (!emailRegex.test(credentials.email)) {\n                    throw new Error(\"Invalid email format\");\n                }\n                const user = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDc0I7QUFDZ0I7QUFDVjtBQUNBO0FBQ0U7QUFFakI7QUFFakMsTUFBTU8sY0FBMkI7SUFDdENDLFNBQVNILHdFQUFhQSxDQUFDQywwREFBTUE7SUFDN0JHLFdBQVc7UUFDVE4sc0VBQWNBLENBQUM7WUFDYk8sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDekM7UUFDQVgsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDdENGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2hEO1FBQ0FmLDJFQUFtQkEsQ0FBQztZQUNsQmdCLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSxxQ0FBcUM7Z0JBQ3JDLE1BQU1DLGFBQWE7Z0JBQ25CLElBQUksQ0FBQ0EsV0FBV0MsSUFBSSxDQUFDUixZQUFZQyxLQUFLLEdBQUc7b0JBQ3ZDLE1BQU0sSUFBSUssTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTUcsT0FBTyxNQUFNdEIsMERBQU1BLENBQUNzQixJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQ0xWLE9BQU9ELFlBQVlDLEtBQUs7b0JBQzFCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ1EsUUFBUSxDQUFDQSxNQUFNRyxnQkFBZ0I7b0JBQ2xDLE1BQU0sSUFBSU4sTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTU8sb0JBQW9CLE1BQU1oQyxxREFBYyxDQUM1Q21CLFlBQVlJLFFBQVEsRUFDcEJLLEtBQUtHLGNBQWM7Z0JBR3JCLElBQUksQ0FBQ0MsbUJBQW1CO29CQUN0QixNQUFNLElBQUlQLE1BQU07Z0JBQ2xCO2dCQUVBLE9BQU9HO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RNLE9BQU92QixrQkFBeUI7SUFDaEN3QixTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFRMUIsUUFBUUMsR0FBRyxDQUFDMEIsZUFBZTtBQUNyQyxFQUFDO0FBRUQsTUFBTUMsVUFBVXRDLGdEQUFRQSxDQUFDTTtBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCJcclxuaW1wb3J0IE5leHRBdXRoLCB7IEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9wcmlzbWFkYlwiXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xyXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCBhcyBzdHJpbmdcclxuICAgIH0pLFxyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nXHJcbiAgICB9KSxcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnZW1haWwnLCB0eXBlOiAndGV4dCcgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ3Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgZW1haWwgaXMgaW4gcHJvcGVyIGZvcm1hdFxyXG4gICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcclxuICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdChjcmVkZW50aWFscy5lbWFpbCkpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbWFpbCBmb3JtYXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXI/Lmhhc2hlZFBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXHJcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcclxuICAgICAgICAgIHVzZXIuaGFzaGVkUGFzc3dvcmRcclxuICAgICAgICApO1xyXG4gICAgICBcclxuICAgICAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJlbWFpbFJlZ2V4IiwidGVzdCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJoYXNoZWRQYXNzd29yZCIsImlzQ29ycmVjdFBhc3N3b3JkIiwiY29tcGFyZSIsImRlYnVnIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/libs/prismadb.ts":
/*!******************************!*\
  !*** ./app/libs/prismadb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// import { PrismaClient } from \"@prisma/client\"\n// declare global {\n//   var prisma: PrismaClient | undefined\n// }\n// const client = globalThis.prisma || new PrismaClient()\n// if (process.env.NODE_ENV !== \"production\") globalThis.prisma = client\n// export default client\n// old code\n\nconst prisma = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prisma;\n// async function main() {\n//   await prisma.conversation.createMany({\n//     data: [\n//       { name: 'Chatroom 1', isGroup: true },\n//       { name: 'Chatroom 2', isGroup: true },\n//       { name: 'Chatroom 3', isGroup: true },\n//     ],\n//   })\n// }\nasync function main() {\n    const existingChatrooms = await prisma.conversation.findMany({\n        where: {\n            OR: [\n                {\n                    name: \"StrayAidConnect- Vasai-Virar\"\n                },\n                {\n                    name: \"StrayAidConnect- Mumbai\"\n                },\n                {\n                    name: \"StrayAidConnect- Thane\"\n                }\n            ]\n        }\n    });\n    if (existingChatrooms.length === 0) {\n        await prisma.conversation.createMany({\n            data: [\n                {\n                    name: \"StrayAidConnect- Vasai-Virar\",\n                    isGroup: true\n                },\n                {\n                    name: \"StrayAidConnect- Mumbai\",\n                    isGroup: true\n                },\n                {\n                    name: \"StrayAidConnect- Thane\",\n                    isGroup: true\n                }\n            ]\n        });\n    }\n}\nmain().catch((e)=>{\n    throw e;\n}).finally(async ()=>{\n    await prisma.$disconnect();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGlicy9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBZ0Q7QUFFaEQsbUJBQW1CO0FBQ25CLHlDQUF5QztBQUN6QyxJQUFJO0FBRUoseURBQXlEO0FBQ3pELHdFQUF3RTtBQUV4RSx3QkFBd0I7QUFDeEIsV0FBVztBQUVrQztBQU03QyxNQUFNQyxTQUFTQyxXQUFXRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBQ3BELElBQUlHLElBQXFDLEVBQUVELFdBQVdELE1BQU0sR0FBR0E7QUFFL0QsMEJBQTBCO0FBQzFCLDJDQUEyQztBQUMzQyxjQUFjO0FBQ2QsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsU0FBUztBQUNULE9BQU87QUFDUCxJQUFJO0FBQ0osZUFBZUc7SUFDYixNQUFNQyxvQkFBb0IsTUFBTUosT0FBT0ssWUFBWSxDQUFDQyxRQUFRLENBQUM7UUFDM0RDLE9BQU87WUFDTEMsSUFBSTtnQkFDRjtvQkFBRUMsTUFBTTtnQkFBK0I7Z0JBQ3ZDO29CQUFFQSxNQUFNO2dCQUEwQjtnQkFDbEM7b0JBQUVBLE1BQU07Z0JBQXlCO2FBQ2xDO1FBQ0g7SUFDRjtJQUVBLElBQUlMLGtCQUFrQk0sTUFBTSxLQUFLLEdBQUc7UUFDbEMsTUFBTVYsT0FBT0ssWUFBWSxDQUFDTSxVQUFVLENBQUM7WUFDbkNDLE1BQU07Z0JBQ0o7b0JBQUVILE1BQU07b0JBQWdDSSxTQUFTO2dCQUFLO2dCQUN0RDtvQkFBRUosTUFBTTtvQkFBMkJJLFNBQVM7Z0JBQUs7Z0JBQ2pEO29CQUFFSixNQUFNO29CQUEwQkksU0FBUztnQkFBSzthQUNqRDtRQUNIO0lBQ0Y7QUFDRjtBQUNBVixPQUNHVyxLQUFLLENBQUNDLENBQUFBO0lBQ0wsTUFBTUE7QUFDUixHQUNDQyxPQUFPLENBQUM7SUFDUCxNQUFNaEIsT0FBT2lCLFdBQVc7QUFDMUI7QUFFRixpRUFBZWpCLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC1zdHJheWFpZGNvbm5lY3QvLi9hcHAvbGlicy9wcmlzbWFkYi50cz83ODJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcblxyXG4vLyBkZWNsYXJlIGdsb2JhbCB7XHJcbi8vICAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxyXG4vLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxUaGlzLnByaXNtYSA9IGNsaWVudFxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xpZW50XHJcbi8vIG9sZCBjb2RlXHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxUaGlzLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KClcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWFcclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcbi8vICAgYXdhaXQgcHJpc21hLmNvbnZlcnNhdGlvbi5jcmVhdGVNYW55KHtcclxuLy8gICAgIGRhdGE6IFtcclxuLy8gICAgICAgeyBuYW1lOiAnQ2hhdHJvb20gMScsIGlzR3JvdXA6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAnQ2hhdHJvb20gMicsIGlzR3JvdXA6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAnQ2hhdHJvb20gMycsIGlzR3JvdXA6IHRydWUgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSlcclxuLy8gfVxyXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnN0IGV4aXN0aW5nQ2hhdHJvb21zID0gYXdhaXQgcHJpc21hLmNvbnZlcnNhdGlvbi5maW5kTWFueSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBPUjogW1xyXG4gICAgICAgIHsgbmFtZTogJ1N0cmF5QWlkQ29ubmVjdC0gVmFzYWktVmlyYXInIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnU3RyYXlBaWRDb25uZWN0LSBNdW1iYWknIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnU3RyYXlBaWRDb25uZWN0LSBUaGFuZScgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChleGlzdGluZ0NoYXRyb29tcy5sZW5ndGggPT09IDApIHtcclxuICAgIGF3YWl0IHByaXNtYS5jb252ZXJzYXRpb24uY3JlYXRlTWFueSh7XHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7IG5hbWU6ICdTdHJheUFpZENvbm5lY3QtIFZhc2FpLVZpcmFyJywgaXNHcm91cDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1N0cmF5QWlkQ29ubmVjdC0gTXVtYmFpJywgaXNHcm91cDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1N0cmF5QWlkQ29ubmVjdC0gVGhhbmUnLCBpc0dyb3VwOiB0cnVlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxubWFpbigpXHJcbiAgLmNhdGNoKGUgPT4ge1xyXG4gICAgdGhyb3cgZVxyXG4gIH0pXHJcbiAgLmZpbmFsbHkoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcclxuICB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcm9jZXNzIiwibWFpbiIsImV4aXN0aW5nQ2hhdHJvb21zIiwiY29udmVyc2F0aW9uIiwiZmluZE1hbnkiLCJ3aGVyZSIsIk9SIiwibmFtZSIsImxlbmd0aCIsImNyZWF0ZU1hbnkiLCJkYXRhIiwiaXNHcm91cCIsImNhdGNoIiwiZSIsImZpbmFsbHkiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/libs/prismadb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();