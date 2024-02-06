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
exports.id = "app/api/conversations/route";
exports.ids = ["app/api/conversations/route"];
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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2Froute&page=%2Fapi%2Fconversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2Froute.ts&appDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2Froute&page=%2Fapi%2Fconversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2Froute.ts&appDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var K_Code_playground_strayAid_Connect_Chat_App_chat_app_strayaidconnect_app_api_conversations_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/conversations/route.ts */ \"(rsc)/./app/api/conversations/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/conversations/route\",\n        pathname: \"/api/conversations\",\n        filename: \"route\",\n        bundlePath: \"app/api/conversations/route\"\n    },\n    resolvedPagePath: \"K:\\\\Code playground\\\\strayAid-Connect--Chat-App\\\\chat-app-strayaidconnect\\\\app\\\\api\\\\conversations\\\\route.ts\",\n    nextConfigOutput,\n    userland: K_Code_playground_strayAid_Connect_Chat_App_chat_app_strayaidconnect_app_api_conversations_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/conversations/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb252ZXJzYXRpb25zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb252ZXJzYXRpb25zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udmVyc2F0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj1LJTNBJTVDQ29kZSUyMHBsYXlncm91bmQlNUNzdHJheUFpZC1Db25uZWN0LS1DaGF0LUFwcCU1Q2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9SyUzQSU1Q0NvZGUlMjBwbGF5Z3JvdW5kJTVDc3RyYXlBaWQtQ29ubmVjdC0tQ2hhdC1BcHAlNUNjaGF0LWFwcC1zdHJheWFpZGNvbm5lY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEQ7QUFDekk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcC1zdHJheWFpZGNvbm5lY3QvP2Y4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiSzpcXFxcQ29kZSBwbGF5Z3JvdW5kXFxcXHN0cmF5QWlkLUNvbm5lY3QtLUNoYXQtQXBwXFxcXGNoYXQtYXBwLXN0cmF5YWlkY29ubmVjdFxcXFxhcHBcXFxcYXBpXFxcXGNvbnZlcnNhdGlvbnNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbnZlcnNhdGlvbnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb252ZXJzYXRpb25zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb252ZXJzYXRpb25zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiSzpcXFxcQ29kZSBwbGF5Z3JvdW5kXFxcXHN0cmF5QWlkLUNvbm5lY3QtLUNoYXQtQXBwXFxcXGNoYXQtYXBwLXN0cmF5YWlkY29ubmVjdFxcXFxhcHBcXFxcYXBpXFxcXGNvbnZlcnNhdGlvbnNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY29udmVyc2F0aW9ucy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2Froute&page=%2Fapi%2Fconversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2Froute.ts&appDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/actions/getCurrentUser.ts":
/*!***************************************!*\
  !*** ./app/actions/getCurrentUser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n/* harmony import */ var _getSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSession */ \"(rsc)/./app/actions/getSession.ts\");\n\n\nconst getCurrentUser = async ()=>{\n    try {\n        const session = await (0,_getSession__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        if (!session?.user?.email) {\n            return null;\n        }\n        const currentUser = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!currentUser) {\n            return null;\n        }\n        return currentUser;\n    } catch (error) {\n        return null;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYWN0aW9ucy9nZXRDdXJyZW50VXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFDSDtBQUV0QyxNQUFNRSxpQkFBaUI7SUFDckIsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUYsdURBQVVBO1FBRWhDLElBQUksQ0FBQ0UsU0FBU0MsTUFBTUMsT0FBTztZQUN6QixPQUFPO1FBQ1Q7UUFFQSxNQUFNQyxjQUFjLE1BQU1OLDBEQUFNQSxDQUFDSSxJQUFJLENBQUNHLFVBQVUsQ0FBQztZQUMvQ0MsT0FBTztnQkFDTEgsT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1lBQzNCO1FBQ0Y7UUFFQSxJQUFJLENBQUNDLGFBQWE7WUFDaEIsT0FBTztRQUNUO1FBRUEsT0FBT0E7SUFDVCxFQUFFLE9BQU9HLE9BQVk7UUFDbkIsT0FBTztJQUNUO0FBQ0Y7QUFFQSxpRUFBZVAsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdC8uL2FwcC9hY3Rpb25zL2dldEN1cnJlbnRVc2VyLnRzPzFlYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9wcmlzbWFkYlwiO1xyXG5pbXBvcnQgZ2V0U2Vzc2lvbiBmcm9tIFwiLi9nZXRTZXNzaW9uXCI7XHJcblxyXG5jb25zdCBnZXRDdXJyZW50VXNlciA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCBhcyBzdHJpbmdcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VycmVudFVzZXI7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJnZXRTZXNzaW9uIiwiZ2V0Q3VycmVudFVzZXIiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwiY3VycmVudFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/actions/getCurrentUser.ts\n");

/***/ }),

/***/ "(rsc)/./app/actions/getSession.ts":
/*!***********************************!*\
  !*** ./app/actions/getSession.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\nasync function getSession() {\n    return await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYWN0aW9ucy9nZXRTZXNzaW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFb0I7QUFFbEQsZUFBZUU7SUFDNUIsT0FBTyxNQUFNRiwyREFBZ0JBLENBQUNDLHFFQUFXQTtBQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdC8uL2FwcC9hY3Rpb25zL2dldFNlc3Npb24udHM/MzU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5cclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcclxuICByZXR1cm4gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImdldFNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/actions/getSession.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__.PrismaAdapter)(_app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDc0I7QUFDZ0I7QUFDVjtBQUNBO0FBQ0U7QUFFakI7QUFFakMsTUFBTU8sY0FBMkI7SUFDdENDLFNBQVNILHdFQUFhQSxDQUFDQywwREFBTUE7SUFDN0JHLFdBQVc7UUFDVE4sc0VBQWNBLENBQUM7WUFDYk8sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDekM7UUFDQVgsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDdENGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2hEO1FBQ0FmLDJFQUFtQkEsQ0FBQztZQUNsQmdCLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1wQiwwREFBTUEsQ0FBQ29CLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFDTFIsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDTSxRQUFRLENBQUNBLE1BQU1HLGdCQUFnQjtvQkFDbEMsTUFBTSxJQUFJSixNQUFNO2dCQUNsQjtnQkFFQSxNQUFNSyxvQkFBb0IsTUFBTTlCLHFEQUFjLENBQzVDbUIsWUFBWUksUUFBUSxFQUNwQkcsS0FBS0csY0FBYztnQkFHckIsSUFBSSxDQUFDQyxtQkFBbUI7b0JBQ3RCLE1BQU0sSUFBSUwsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBT0M7WUFDVDtRQUNGO0tBQ0Q7SUFDRE0sT0FBT3JCLGtCQUF5QjtJQUNoQ3NCLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFFBQVF4QixRQUFRQyxHQUFHLENBQUN3QixlQUFlO0FBQ3JDLEVBQUM7QUFFRCxNQUFNQyxVQUFVcEMsZ0RBQVFBLENBQUNNO0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHAtc3RyYXlhaWRjb25uZWN0Ly4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIlxyXG5pbXBvcnQgTmV4dEF1dGgsIHsgQXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXHJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiXHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2FwcC9saWJzL3ByaXNtYWRiXCJcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR2l0aHViUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lEIGFzIHN0cmluZyxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUIGFzIHN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIGFzIHN0cmluZyxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCBhcyBzdHJpbmdcclxuICAgIH0pLFxyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JyB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAncGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyPy5oYXNoZWRQYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICAgICB1c2VyLmhhc2hlZFBhc3N3b3JkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiYmNyeXB0IiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiaXNDb3JyZWN0UGFzc3dvcmQiLCJjb21wYXJlIiwiZGVidWciLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/conversations/route.ts":
/*!****************************************!*\
  !*** ./app/api/conversations/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/actions/getCurrentUser */ \"(rsc)/./app/actions/getCurrentUser.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n/* harmony import */ var _app_libs_pusher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/libs/pusher */ \"(rsc)/./app/libs/pusher.ts\");\n\n\n\n\nasync function POST(request) {\n    try {\n        const currentUser = await (0,_app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await request.json();\n        const { userId, isGroup, members, name } = body;\n        if (!currentUser?.id || !currentUser?.email) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Unauthorized\", {\n                status: 400\n            });\n        }\n        if (isGroup && (!members || members.length < 2 || !name)) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Invalid data\", {\n                status: 400\n            });\n        }\n        if (isGroup) {\n            const newConversation = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].conversation.create({\n                data: {\n                    name,\n                    isGroup,\n                    users: {\n                        connect: [\n                            ...members.map((member)=>({\n                                    id: member.value\n                                })),\n                            {\n                                id: currentUser.id\n                            }\n                        ]\n                    }\n                },\n                include: {\n                    users: true\n                }\n            });\n            // Update all connections with new conversation\n            newConversation.users.forEach((user)=>{\n                if (user.email) {\n                    _app_libs_pusher__WEBPACK_IMPORTED_MODULE_3__.pusherServer.trigger(user.email, \"conversation:new\", newConversation);\n                }\n            });\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json(newConversation);\n        }\n        const existingConversations = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].conversation.findMany({\n            where: {\n                OR: [\n                    {\n                        userIds: {\n                            equals: [\n                                currentUser.id,\n                                userId\n                            ]\n                        }\n                    },\n                    {\n                        userIds: {\n                            equals: [\n                                userId,\n                                currentUser.id\n                            ]\n                        }\n                    }\n                ]\n            }\n        });\n        const singleConversation = existingConversations[0];\n        if (singleConversation) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json(singleConversation);\n        }\n        const newConversation = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].conversation.create({\n            data: {\n                users: {\n                    connect: [\n                        {\n                            id: currentUser.id\n                        },\n                        {\n                            id: userId\n                        }\n                    ]\n                }\n            },\n            include: {\n                users: true\n            }\n        });\n        // Update all connections with new conversation\n        newConversation.users.map((user)=>{\n            if (user.email) {\n                _app_libs_pusher__WEBPACK_IMPORTED_MODULE_3__.pusherServer.trigger(user.email, \"conversation:new\", newConversation);\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json(newConversation);\n    } catch (error) {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Internal Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHAtc3RyYXlhaWRjb25uZWN0Ly4vYXBwL2FwaS9jb252ZXJzYXRpb25zL3JvdXRlLnRzPzA0OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEN1cnJlbnRVc2VyIGZyb20gXCJAL2FwcC9hY3Rpb25zL2dldEN1cnJlbnRVc2VyXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9wcmlzbWFkYlwiO1xyXG5pbXBvcnQgeyBwdXNoZXJTZXJ2ZXIgfSBmcm9tIFwiQC9hcHAvbGlicy9wdXNoZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJJZCxcclxuICAgICAgaXNHcm91cCxcclxuICAgICAgbWVtYmVycyxcclxuICAgICAgbmFtZVxyXG4gICAgfSA9IGJvZHk7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50VXNlcj8uaWQgfHwgIWN1cnJlbnRVc2VyPy5lbWFpbCkge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnVW5hdXRob3JpemVkJywgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNHcm91cCAmJiAoIW1lbWJlcnMgfHwgbWVtYmVycy5sZW5ndGggPCAyIHx8ICFuYW1lKSkge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnSW52YWxpZCBkYXRhJywgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNHcm91cCkge1xyXG4gICAgICBjb25zdCBuZXdDb252ZXJzYXRpb24gPSBhd2FpdCBwcmlzbWEuY29udmVyc2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIGlzR3JvdXAsXHJcbiAgICAgICAgICB1c2Vyczoge1xyXG4gICAgICAgICAgICBjb25uZWN0OiBbXHJcbiAgICAgICAgICAgICAgLi4ubWVtYmVycy5tYXAoKG1lbWJlcjogeyB2YWx1ZTogc3RyaW5nIH0pID0+ICh7ICBcclxuICAgICAgICAgICAgICAgIGlkOiBtZW1iZXIudmFsdWUgXHJcbiAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBjdXJyZW50VXNlci5pZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgdXNlcnM6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICAvLyBVcGRhdGUgYWxsIGNvbm5lY3Rpb25zIHdpdGggbmV3IGNvbnZlcnNhdGlvblxyXG4gICAgICBuZXdDb252ZXJzYXRpb24udXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgICBwdXNoZXJTZXJ2ZXIudHJpZ2dlcih1c2VyLmVtYWlsLCAnY29udmVyc2F0aW9uOm5ldycsIG5ld0NvbnZlcnNhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihuZXdDb252ZXJzYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nQ29udmVyc2F0aW9ucyA9IGF3YWl0IHByaXNtYS5jb252ZXJzYXRpb24uZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIE9SOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJJZHM6IHtcclxuICAgICAgICAgICAgICBlcXVhbHM6IFtjdXJyZW50VXNlci5pZCwgdXNlcklkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VySWRzOiB7XHJcbiAgICAgICAgICAgICAgZXF1YWxzOiBbdXNlcklkLCBjdXJyZW50VXNlci5pZF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2luZ2xlQ29udmVyc2F0aW9uID0gZXhpc3RpbmdDb252ZXJzYXRpb25zWzBdO1xyXG5cclxuICAgIGlmIChzaW5nbGVDb252ZXJzYXRpb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHNpbmdsZUNvbnZlcnNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3Q29udmVyc2F0aW9uID0gYXdhaXQgcHJpc21hLmNvbnZlcnNhdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcnM6IHtcclxuICAgICAgICAgIGNvbm5lY3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlkOiBjdXJyZW50VXNlci5pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgdXNlcnM6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBjb25uZWN0aW9ucyB3aXRoIG5ldyBjb252ZXJzYXRpb25cclxuICAgIG5ld0NvbnZlcnNhdGlvbi51c2Vycy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIuZW1haWwpIHtcclxuICAgICAgICBwdXNoZXJTZXJ2ZXIudHJpZ2dlcih1c2VyLmVtYWlsLCAnY29udmVyc2F0aW9uOm5ldycsIG5ld0NvbnZlcnNhdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihuZXdDb252ZXJzYXRpb24pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKCdJbnRlcm5hbCBFcnJvcicsIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG4gIFxyXG59Il0sIm5hbWVzIjpbImdldEN1cnJlbnRVc2VyIiwiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwicHVzaGVyU2VydmVyIiwiUE9TVCIsInJlcXVlc3QiLCJjdXJyZW50VXNlciIsImJvZHkiLCJqc29uIiwidXNlcklkIiwiaXNHcm91cCIsIm1lbWJlcnMiLCJuYW1lIiwiaWQiLCJlbWFpbCIsInN0YXR1cyIsImxlbmd0aCIsIm5ld0NvbnZlcnNhdGlvbiIsImNvbnZlcnNhdGlvbiIsImNyZWF0ZSIsImRhdGEiLCJ1c2VycyIsImNvbm5lY3QiLCJtYXAiLCJtZW1iZXIiLCJ2YWx1ZSIsImluY2x1ZGUiLCJmb3JFYWNoIiwidXNlciIsInRyaWdnZXIiLCJleGlzdGluZ0NvbnZlcnNhdGlvbnMiLCJmaW5kTWFueSIsIndoZXJlIiwiT1IiLCJ1c2VySWRzIiwiZXF1YWxzIiwic2luZ2xlQ29udmVyc2F0aW9uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/conversations/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/libs/prismadb.ts":
/*!******************************!*\
  !*** ./app/libs/prismadb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGlicy9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFNN0MsTUFBTUMsU0FBU0MsV0FBV0MsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUNwRCxJQUFJSSxJQUFxQyxFQUFFRixXQUFXQyxNQUFNLEdBQUdGO0FBRS9ELGlFQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHAtc3RyYXlhaWRjb25uZWN0Ly4vYXBwL2xpYnMvcHJpc21hZGIudHM/NzgyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBjbGllbnQgPSBnbG9iYWxUaGlzLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KClcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBjbGllbnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/libs/prismadb.ts\n");

/***/ }),

/***/ "(rsc)/./app/libs/pusher.ts":
/*!****************************!*\
  !*** ./app/libs/pusher.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pusherClient: () => (/* binding */ pusherClient),\n/* harmony export */   pusherServer: () => (/* binding */ pusherServer)\n/* harmony export */ });\n/* harmony import */ var pusher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pusher */ \"(rsc)/./node_modules/pusher/lib/pusher.js\");\n/* harmony import */ var pusher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pusher__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ \"(rsc)/./node_modules/pusher-js/dist/node/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst pusherServer = new (pusher__WEBPACK_IMPORTED_MODULE_0___default())({\n    appId: process.env.PUSHER_APP_ID,\n    key: \"aaef570abb1f4befb5e4\",\n    secret: process.env.PUSHER_SECRET,\n    cluster: \"eu\",\n    useTLS: true\n});\nconst pusherClient = new (pusher_js__WEBPACK_IMPORTED_MODULE_1___default())(\"aaef570abb1f4befb5e4\", {\n    channelAuthorization: {\n        endpoint: \"/api/pusher/auth\",\n        transport: \"ajax\"\n    },\n    cluster: \"eu\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGlicy9wdXNoZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ0c7QUFFN0IsTUFBTUUsZUFBZSxJQUFJRiwrQ0FBWUEsQ0FBQztJQUMzQ0csT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO0lBQ2hDQyxLQUFLSCxzQkFBc0M7SUFDM0NLLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssYUFBYTtJQUNqQ0MsU0FBUztJQUNUQyxRQUFRO0FBQ1YsR0FBRztBQUVJLE1BQU1DLGVBQWUsSUFBSVosa0RBQVlBLENBQzFDRyxzQkFBc0MsRUFDdEM7SUFDRVUsc0JBQXNCO1FBQ3BCQyxVQUFVO1FBQ1ZDLFdBQVc7SUFDYjtJQUNBTCxTQUFTO0FBQ1gsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLXN0cmF5YWlkY29ubmVjdC8uL2FwcC9saWJzL3B1c2hlci50cz9hYTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQdXNoZXJTZXJ2ZXIgZnJvbSAncHVzaGVyJ1xyXG5pbXBvcnQgUHVzaGVyQ2xpZW50IGZyb20gJ3B1c2hlci1qcydcclxuXHJcbmV4cG9ydCBjb25zdCBwdXNoZXJTZXJ2ZXIgPSBuZXcgUHVzaGVyU2VydmVyKHtcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9JRCEsXHJcbiAga2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QVVNIRVJfQVBQX0tFWSEsXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5QVVNIRVJfU0VDUkVUISxcclxuICBjbHVzdGVyOiAnZXUnLFxyXG4gIHVzZVRMUzogdHJ1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVzaGVyQ2xpZW50ID0gbmV3IFB1c2hlckNsaWVudChcclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QVVNIRVJfQVBQX0tFWSEsXHJcbiAge1xyXG4gICAgY2hhbm5lbEF1dGhvcml6YXRpb246IHtcclxuICAgICAgZW5kcG9pbnQ6ICcvYXBpL3B1c2hlci9hdXRoJyxcclxuICAgICAgdHJhbnNwb3J0OiAnYWpheCcsXHJcbiAgICB9LFxyXG4gICAgY2x1c3RlcjogJ2V1JyxcclxuICB9XHJcbik7XHJcbiJdLCJuYW1lcyI6WyJQdXNoZXJTZXJ2ZXIiLCJQdXNoZXJDbGllbnQiLCJwdXNoZXJTZXJ2ZXIiLCJhcHBJZCIsInByb2Nlc3MiLCJlbnYiLCJQVVNIRVJfQVBQX0lEIiwia2V5IiwiTkVYVF9QVUJMSUNfUFVTSEVSX0FQUF9LRVkiLCJzZWNyZXQiLCJQVVNIRVJfU0VDUkVUIiwiY2x1c3RlciIsInVzZVRMUyIsInB1c2hlckNsaWVudCIsImNoYW5uZWxBdXRob3JpemF0aW9uIiwiZW5kcG9pbnQiLCJ0cmFuc3BvcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/libs/pusher.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/pusher-js","vendor-chunks/tr46","vendor-chunks/tweetnacl","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/pusher","vendor-chunks/event-target-shim","vendor-chunks/webidl-conversions","vendor-chunks/abort-controller","vendor-chunks/tweetnacl-util","vendor-chunks/is-base64","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversations%2Froute&page=%2Fapi%2Fconversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversations%2Froute.ts&appDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=K%3A%5CCode%20playground%5CstrayAid-Connect--Chat-App%5Cchat-app-strayaidconnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();