"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/post-content.js":
/*!******************************************************!*\
  !*** ./components/posts/post-detail/post-content.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n// import { ReactMarkdown } from \"react-markdown/lib/react-markdown\";\nfunction PostContent(props) {\n    const { post  } = props;\n    const imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n    const customRenderers = {\n        // img(image) {\n        //   return (\n        //     <Image\n        //       src={`/images/posts/${post.slug}/${image.src}`}\n        //       alt={image.alt}\n        //       width={600}\n        //       height={300}\n        //     />\n        //   );\n        // },\n        p (paragraph) {\n            const { node  } = paragraph;\n            if (node.children[0].tagName === \"img\") {\n                const image = node.children[0];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.properties.src),\n                        alt: image.properties.title,\n                        width: 600,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"/Users/DouglasLeung/Library/Mobile Documents/com~apple~CloudDocs/Projects/Udemy Next JS Course with Max M/section 11 Blog project/components/posts/post-detail/post-content.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/DouglasLeung/Library/Mobile Documents/com~apple~CloudDocs/Projects/Udemy Next JS Course with Max M/section 11 Blog project/components/posts/post-detail/post-content.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: paragraph.children\n            }, void 0, false, {\n                fileName: \"/Users/DouglasLeung/Library/Mobile Documents/com~apple~CloudDocs/Projects/Udemy Next JS Course with Max M/section 11 Blog project/components/posts/post-detail/post-content.js\",\n                lineNumber: 41,\n                columnNumber: 14\n            }, this);\n        },\n        code (code) {\n            const { className , children  } = code;\n            const language = className.split(\"-\")[1];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Prism, {\n                style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__.atomDark,\n                language: language,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/DouglasLeung/Library/Mobile Documents/com~apple~CloudDocs/Projects/Udemy Next JS Course with Max M/section 11 Blog project/components/posts/post-detail/post-content.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: post.title,\n                image: imagePath\n            }, void 0, false, {\n                fileName: \"/Users/DouglasLeung/Library/Mobile Documents/com~apple~CloudDocs/Projects/Udemy Next JS Course with Max M/section 11 Blog project/components/posts/post-detail/post-content.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                components: customRenderers,\n                children: post.content\n            }, void 0, false, {\n                fileName: \"/Users/DouglasLeung/Library/Mobile Documents/com~apple~CloudDocs/Projects/Udemy Next JS Course with Max M/section 11 Blog project/components/posts/post-detail/post-content.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/DouglasLeung/Library/Mobile Documents/com~apple~CloudDocs/Projects/Udemy Next JS Course with Max M/section 11 Blog project/components/posts/post-detail/post-content.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c = PostContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostContent);\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtY29udGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkM7QUFDMkI7QUFDSTtBQUMzQztBQUNRO0FBQ1M7QUFDaEQscUVBQXFFO0FBRXJFLFNBQVNPLFlBQVlDLEtBQUssRUFBRTtJQUMxQixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRDtJQUVqQixNQUFNRSxZQUFZLGlCQUE4QkQsT0FBYkEsS0FBS0UsSUFBSSxFQUFDLEtBQWMsT0FBWEYsS0FBS0csS0FBSztJQUUxRCxNQUFNQyxrQkFBa0I7UUFDdEIsZUFBZTtRQUNmLGFBQWE7UUFDYixhQUFhO1FBQ2Isd0RBQXdEO1FBQ3hELHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsS0FBSztRQUNMQyxHQUFFQyxTQUFTLEVBQUU7WUFDWCxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRDtZQUVqQixJQUFJQyxLQUFLQyxRQUFRLENBQUMsRUFBRSxDQUFDQyxPQUFPLEtBQUssT0FBTztnQkFDdEMsTUFBTU4sUUFBUUksS0FBS0MsUUFBUSxDQUFDLEVBQUU7Z0JBQzlCLHFCQUNFLDhEQUFDRTtvQkFBSUMsV0FBV2QsdUVBQWE7OEJBQzNCLDRFQUFDRixtREFBS0E7d0JBQ0ppQixLQUFLLGlCQUE4QlQsT0FBYkgsS0FBS0UsSUFBSSxFQUFDLEtBQXdCLE9BQXJCQyxNQUFNVSxVQUFVLENBQUNELEdBQUc7d0JBQ3ZERSxLQUFLWCxNQUFNVSxVQUFVLENBQUNFLEtBQUs7d0JBQzNCQyxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7Ozs7OztZQUloQixDQUFDO1lBQ0QscUJBQU8sOERBQUNaOzBCQUFHQyxVQUFVRSxRQUFROzs7Ozs7UUFDL0I7UUFFQVUsTUFBS0EsSUFBSSxFQUFFO1lBQ1QsTUFBTSxFQUFFUCxVQUFTLEVBQUVILFNBQVEsRUFBRSxHQUFHVTtZQUNoQyxNQUFNQyxXQUFXUixVQUFVUyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMscUJBQ0UsOERBQUMzQiwyREFBaUJBO2dCQUNoQjRCLE9BQU8zQixvRkFBUUE7Z0JBQ2Z5QixVQUFVQTtnQkFDVlgsVUFBVUE7Ozs7OztRQUdoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO1FBQVFYLFdBQVdkLHlFQUFlOzswQkFDakMsOERBQUNELG9EQUFVQTtnQkFBQ21CLE9BQU9mLEtBQUtlLEtBQUs7Z0JBQUVaLE9BQU9GOzs7Ozs7MEJBQ3RDLDhEQUFDVixzREFBYUE7Z0JBQUNpQyxZQUFZcEI7MEJBQWtCSixLQUFLdUIsT0FBTzs7Ozs7Ozs7Ozs7O0FBRy9EO0tBdERTekI7QUF3RFQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWNvbnRlbnQuanM/ZDhiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgYXRvbURhcmsgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi9wb3N0LWhlYWRlclwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcG9zdC1jb250ZW50Lm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCB7IFJlYWN0TWFya2Rvd24gfSBmcm9tIFwicmVhY3QtbWFya2Rvd24vbGliL3JlYWN0LW1hcmtkb3duXCI7XG5cbmZ1bmN0aW9uIFBvc3RDb250ZW50KHByb3BzKSB7XG4gIGNvbnN0IHsgcG9zdCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaW1hZ2VQYXRoID0gYC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7cG9zdC5pbWFnZX1gO1xuXG4gIGNvbnN0IGN1c3RvbVJlbmRlcmVycyA9IHtcbiAgICAvLyBpbWcoaW1hZ2UpIHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxJbWFnZVxuICAgIC8vICAgICAgIHNyYz17YC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7aW1hZ2Uuc3JjfWB9XG4gICAgLy8gICAgICAgYWx0PXtpbWFnZS5hbHR9XG4gICAgLy8gICAgICAgd2lkdGg9ezYwMH1cbiAgICAvLyAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAvLyAgICAgLz5cbiAgICAvLyAgICk7XG4gICAgLy8gfSxcbiAgICBwKHBhcmFncmFwaCkge1xuICAgICAgY29uc3QgeyBub2RlIH0gPSBwYXJhZ3JhcGg7XG5cbiAgICAgIGlmIChub2RlLmNoaWxkcmVuWzBdLnRhZ05hbWUgPT09IFwiaW1nXCIpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3Bvc3RzLyR7cG9zdC5zbHVnfS8ke2ltYWdlLnByb3BlcnRpZXMuc3JjfWB9XG4gICAgICAgICAgICAgIGFsdD17aW1hZ2UucHJvcGVydGllcy50aXRsZX1cbiAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDxwPntwYXJhZ3JhcGguY2hpbGRyZW59PC9wPjtcbiAgICB9LFxuXG4gICAgY29kZShjb2RlKSB7XG4gICAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IGNvZGU7XG4gICAgICBjb25zdCBsYW5ndWFnZSA9IGNsYXNzTmFtZS5zcGxpdCgnLScpWzFdO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXG4gICAgICAgICAgc3R5bGU9e2F0b21EYXJrfVxuICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICA8UG9zdEhlYWRlciB0aXRsZT17cG9zdC50aXRsZX0gaW1hZ2U9e2ltYWdlUGF0aH0gLz5cbiAgICAgIDxSZWFjdE1hcmtkb3duIGNvbXBvbmVudHM9e2N1c3RvbVJlbmRlcmVyc30+e3Bvc3QuY29udGVudH08L1JlYWN0TWFya2Rvd24+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29udGVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdE1hcmtkb3duIiwiUHJpc20iLCJTeW50YXhIaWdobGlnaHRlciIsImF0b21EYXJrIiwiSW1hZ2UiLCJQb3N0SGVhZGVyIiwiY2xhc3NlcyIsIlBvc3RDb250ZW50IiwicHJvcHMiLCJwb3N0IiwiaW1hZ2VQYXRoIiwic2x1ZyIsImltYWdlIiwiY3VzdG9tUmVuZGVyZXJzIiwicCIsInBhcmFncmFwaCIsIm5vZGUiLCJjaGlsZHJlbiIsInRhZ05hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJwcm9wZXJ0aWVzIiwiYWx0IiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImNvZGUiLCJsYW5ndWFnZSIsInNwbGl0Iiwic3R5bGUiLCJhcnRpY2xlIiwiY29udGVudCIsImNvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n"));

/***/ })

});