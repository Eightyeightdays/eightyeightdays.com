(() => {
var exports = {};
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 5031:
/***/ ((module) => {

// Exports
module.exports = {
	"richTextImage": "Project_richTextImage__7zCbA",
	"image": "Project_image__orJC9"
};


/***/ }),

/***/ 6736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(374);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1571);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var _styles_Project_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5031);
/* harmony import */ var _styles_Project_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Project_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5564);
/* harmony import */ var next_image_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image_js__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_2__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






async function getStaticPaths() {
    // const projects = await fetchDataForProps("projects")
    const projects = await (0,_utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("projects?&filters[type][$eq]=catastrophe-and-the-curator");
    const paths = projects.map((obj)=>({
            params: {
                slug: obj.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const apiUrl = `projects?populate=*&filters[slug][$eq]=${params.slug}`;
    const data = await (0,_utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(apiUrl);
    return {
        props: {
            data
        }
    };
}
function Project({ data  }) {
    const project = data[0];
    const htmlString = project.content;
    const content = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(htmlString);
    console.log(data);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head_js__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: project.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: project.metaDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Project_module_css__WEBPACK_IMPORTED_MODULE_5___default().main_container),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Project_module_css__WEBPACK_IMPORTED_MODULE_5___default().project_container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_Project_module_css__WEBPACK_IMPORTED_MODULE_5___default().project_title),
                            children: project.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Project_module_css__WEBPACK_IMPORTED_MODULE_5___default().project_content),
                            children: content
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `http://localhost:1337${project.images.data[0].attributes.url}`,
                            alt: project.images.data[0].attributes.alternativeText
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ fetchDataForProps)
});

;// CONCATENATED MODULE: ./utils/simplifyStrapiStructure.js
/*  SIMPLIFY THE COMPLEX OBJECT RETURNED BY THE STRAPI API
    take obj, 
    obj.data is an array of objects
    obj.data[0] is an object
    obj.data[0].attributes is an object that contains what we want
*/ function simplifyStrapiStructure(obj) {
    let simpleArray = [];
    obj.data.forEach((el)=>{
        el.attributes.id = el.id;
        simpleArray.push(el.attributes);
    });
    return simpleArray;
}

;// CONCATENATED MODULE: ./utils/fetchDataForProps.js

async function fetchDataForProps(content) {
    const url = `http://localhost:1337/api/${content}`;
    const res = await fetch(url);
    const json = await res.json();
    const data = simplifyStrapiStructure(json);
    return data;
}


/***/ }),

/***/ 1571:
/***/ ((module) => {

"use strict";
module.exports = require("next/head.js");

/***/ }),

/***/ 5564:
/***/ ((module) => {

"use strict";
module.exports = require("next/image.js");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6736));
module.exports = __webpack_exports__;

})();