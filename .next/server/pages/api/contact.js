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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email , name , message  } = req.body;\n        if (!email || !email.includes(\"@\") || !name || name.trim() === \"\" || !message || message.trim() === \"\") {\n            res.status(422).json({\n                message: \"Invalid input.\"\n            });\n            return;\n        }\n        const newMessage = {\n            email,\n            name,\n            message\n        };\n        let client;\n        try {\n            client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://Douglas:Christ137@cluster0.pwd0s.mongodb.net/my-site?retryWrites=true&w=majority\");\n        } catch (error) {\n            res.status(500).json({\n                message: error.message || \"Connection failed.\"\n            });\n            return;\n        }\n        const db = client.db();\n        try {\n            const result = await db.collection(\"messages\").insertOne(newMessage);\n            newMessage._id = result.insertedId;\n        } catch (error) {\n            client.close();\n            res.status(500).json({\n                message: \"Storing message failed.\"\n            });\n            return;\n        }\n        client.close();\n        res.status(201).json({\n            message: \"Successfully stored message\",\n            file: newMessage\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFekMsSUFDRSxDQUFDSCxTQUNELENBQUNBLE1BQU1JLFFBQVEsQ0FBQyxRQUNoQixDQUFDSCxRQUNEQSxLQUFLSSxJQUFJLE9BQU8sTUFDaEIsQ0FBQ0gsV0FDREEsUUFBUUcsSUFBSSxPQUFPLElBQ25CO1lBQ0FQLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVMLFNBQVM7WUFBaUI7WUFDakQ7UUFDRixDQUFDO1FBRUQsTUFBTU0sYUFBYTtZQUNqQlI7WUFDQUM7WUFDQUM7UUFDRjtRQUVBLElBQUlPO1FBRUosSUFBSTtZQUNGQSxTQUFTLE1BQU1kLHdEQUFtQixDQUNoQztRQUVKLEVBQUUsT0FBT2dCLE9BQU87WUFDZGIsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUwsU0FBU1MsTUFBTVQsT0FBTyxJQUFJO1lBQXFCO1lBQ3RFO1FBQ0Y7UUFFQSxNQUFNVSxLQUFLSCxPQUFPRyxFQUFFO1FBRXBCLElBQUk7WUFDRixNQUFNQyxTQUFTLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyxZQUFZQyxTQUFTLENBQUNQO1lBQ3pEQSxXQUFXUSxHQUFHLEdBQUdILE9BQU9JLFVBQVU7UUFDcEMsRUFBRSxPQUFPTixPQUFPO1lBQ2RGLE9BQU9TLEtBQUs7WUFDWnBCLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVMLFNBQVM7WUFBMEI7WUFDMUQ7UUFDRjtRQUVBTyxPQUFPUyxLQUFLO1FBRVpwQixJQUNHUSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQUVMLFNBQVM7WUFBK0JpQixNQUFNWDtRQUFXO0lBQ3JFLENBQUM7QUFDSDtBQUVBLGlFQUFlWixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9jb250YWN0LmpzPzM0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgZW1haWwsIG5hbWUsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKFxuICAgICAgIWVtYWlsIHx8XG4gICAgICAhZW1haWwuaW5jbHVkZXMoXCJAXCIpIHx8XG4gICAgICAhbmFtZSB8fFxuICAgICAgbmFtZS50cmltKCkgPT09IFwiXCIgfHxcbiAgICAgICFtZXNzYWdlIHx8XG4gICAgICBtZXNzYWdlLnRyaW0oKSA9PT0gXCJcIlxuICAgICkge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgaW5wdXQuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgIGVtYWlsLFxuICAgICAgbmFtZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcblxuICAgIGxldCBjbGllbnQ7XG5cbiAgICB0cnkge1xuICAgICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgICAgXCJtb25nb2RiK3NydjovL0RvdWdsYXM6Q2hyaXN0MTM3QGNsdXN0ZXIwLnB3ZDBzLm1vbmdvZGIubmV0L215LXNpdGU/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkNvbm5lY3Rpb24gZmFpbGVkLlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpLmluc2VydE9uZShuZXdNZXNzYWdlKTtcbiAgICAgIG5ld01lc3NhZ2UuX2lkID0gcmVzdWx0Lmluc2VydGVkSWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIlN0b3JpbmcgbWVzc2FnZSBmYWlsZWQuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXNcbiAgICAgIC5zdGF0dXMoMjAxKVxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIlN1Y2Nlc3NmdWxseSBzdG9yZWQgbWVzc2FnZVwiLCBmaWxlOiBuZXdNZXNzYWdlIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJuYW1lIiwibWVzc2FnZSIsImJvZHkiLCJpbmNsdWRlcyIsInRyaW0iLCJzdGF0dXMiLCJqc29uIiwibmV3TWVzc2FnZSIsImNsaWVudCIsImNvbm5lY3QiLCJlcnJvciIsImRiIiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsIl9pZCIsImluc2VydGVkSWQiLCJjbG9zZSIsImZpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();