(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 176:
/***/ ((module) => {

// Exports
module.exports = {
	"preview_card": "Article_Preview_preview_card__wX6lu",
	"preview_card_title": "Article_Preview_preview_card_title__H5nY5",
	"preview_card_description": "Article_Preview_preview_card_description__kRZmV",
	"preview_card_preview": "Article_Preview_preview_card_preview__U1eSh",
	"symbol_container": "Article_Preview_symbol_container__J0lJs"
};


/***/ }),

/***/ 4237:
/***/ ((module) => {

// Exports
module.exports = {
	"category_container": "Human-Writes_category_container__5GPNe",
	"category_card": "Human-Writes_category_card__OlzpK",
	"category_card_img": "Human-Writes_category_card_img__qioXJ",
	"category_card_title": "Human-Writes_category_card_title__rEGb_",
	"preview_card_title": "Human-Writes_preview_card_title__2PcSz",
	"category_card_details": "Human-Writes_category_card_details__SM_hH",
	"preview_card_description": "Human-Writes_preview_card_description__VXNQl",
	"preview_card": "Human-Writes_preview_card__4o_uf",
	"preview_card_img": "Human-Writes_preview_card_img__wxBd_",
	"category_button_container": "Human-Writes_category_button_container__DkMLe",
	"category_button": "Human-Writes_category_button__BDRgg",
	"category_button_hidden": "Human-Writes_category_button_hidden__aQjWk",
	"divider_container": "Human-Writes_divider_container__VsFC5",
	"divider": "Human-Writes_divider__Y7EG3",
	"preview_container": "Human-Writes_preview_container__CPh0v"
};


/***/ }),

/***/ 5516:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArticlePreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(176);
/* harmony import */ var _styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_2__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ArticlePreview({ data  }) {
    let date = new Date(data.createdAt).toString().substring(0, 15);
    let htmlString = data.content.substring(0, 150);
    const preview = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(htmlString);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/human-writes/${data.slug}`,
        className: (_styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview_card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview_card_title),
                children: data.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview_card_description),
                children: data.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview_card_preview),
                children: preview
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().symbol_container),
                children: "♦"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Article_Preview_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview_card_date),
                children: [
                    "Posted ",
                    date
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category),
/* harmony export */   "default": () => (/* binding */ Writing),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(374);
/* harmony import */ var _components_ArticlePreview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5516);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1571);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4237);
/* harmony import */ var _styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ArticlePreview_js__WEBPACK_IMPORTED_MODULE_1__]);
_components_ArticlePreview_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






async function getStaticProps() {
    let data = await (0,_utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("articles?populate=*");
    data.sort((a, b)=>a.createdAt > b.createdAt ? -1 : 1);
    const test = await fetch("http://localhost:1337/api/category-preview-images?populate=*");
    const json = await test.json();
    const categories = await (0,_utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("categories?populate=*");
    return {
        props: {
            articles: data,
            images: json,
            categories: categories
        }
    };
}
function Category({ title , imgUrl , fun , count , latest , name  }) {
    let date = new Date(latest).toString().substring(0, 15);
    let text = "";
    if (count == 1) {
        text = "Post";
    } else {
        text = "Posts";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: name,
        className: `${(_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card)} card`,
        onClick: (event)=>fun(event, title),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `http://localhost:1337${imgUrl}`,
                className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_img),
                alt: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_title),
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_details),
                children: [
                    count,
                    " ",
                    text
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_details),
                children: [
                    "Updated: ",
                    date
                ]
            })
        ]
    });
}
function getImageUrls(data) {
    // let arr =[]
    let imageObj = {};
    data.data.map((obj)=>{
        // arr.push(obj.attributes.image.data.attributes.url)
        imageObj[obj.attributes.title] = obj.attributes.image.data.attributes.url;
    });
    // return arr
    return imageObj;
}
function Writing({ articles , images , categories  }) {
    const urls = getImageUrls(images);
    console.log(urls);
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(articles);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    let artArr = [];
    let photoArr = [];
    let philArr = [];
    let textArr = [];
    let nmaArr = [];
    let blogArr = [];
    articles.map((post)=>{
        post.categories.data.map((category)=>{
            switch(category.attributes.category){
                case "Art":
                    artArr.push(post);
                    break;
                case "Photography":
                    photoArr.push(post);
                    break;
                case "Philosophy":
                    philArr.push(post);
                    break;
                case "Creative Writing":
                    textArr.push(post);
                    break;
                case "Non Martial Arts":
                    nmaArr.push(post);
                    break;
                case "Unclog":
                    blogArr.push(post);
            }
        });
    });
    const [artPosts, setArtPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(artArr);
    const [photoPosts, setPhotoPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(photoArr);
    const [philPosts, setPhilPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(philArr);
    const [textPosts, setTextPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(textArr);
    const [nmaPosts, setNmaPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(nmaArr);
    const [blogPosts, setBlogPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(blogArr);
    function FilterCategories(event, category) {
        switch(category){
            case "Art":
                setPosts(artPosts);
                break;
            case "Photography":
                setPosts(photoPosts);
                break;
            case "Philosophy":
                setPosts(philPosts);
                break;
            case "Creative Writing":
                setPosts(textPosts);
                break;
            case "Non Martial Arts":
                setPosts(nmaPosts);
                break;
            case "Unclog":
                setPosts(blogPosts);
        }
        setFlag(true);
    }
    function ShowAllCategories() {
        setPosts(articles);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head_js__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Human Writes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Eightyeightdays"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Human Writes"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_container),
                children: categories.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Category, {
                        name: `category_${index}`,
                        title: item.category,
                        imgUrl: urls[item.category],
                        fun: FilterCategories,
                        count: item.articles.data.length,
                        latest: item.articles.data[0].attributes.publishedAt
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_button_container),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: flag ? (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_button) : (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_button_hidden),
                    onClick: ShowAllCategories,
                    children: flag ? "Show All Categories" : ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().divider_container),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().divider)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Human_Writes_module_css__WEBPACK_IMPORTED_MODULE_5___default().preview_container),
                children: posts && posts.map((obj, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticlePreview_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        data: obj
                    }, index))
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1571:
/***/ ((module) => {

"use strict";
module.exports = require("next/head.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(6578)));
module.exports = __webpack_exports__;

})();