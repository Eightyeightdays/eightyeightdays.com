(() => {
var exports = {};
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 4659:
/***/ ((module) => {

// Exports
module.exports = {
	"category_container": "An-Eye-For-An-Eye_category_container__pRQyw",
	"category_card": "An-Eye-For-An-Eye_category_card__mjwjM",
	"category_card_img": "An-Eye-For-An-Eye_category_card_img__pSOlk",
	"category_card_title": "An-Eye-For-An-Eye_category_card_title__ezGEc",
	"preview_card_title": "An-Eye-For-An-Eye_preview_card_title__8hJaD",
	"category_card_description": "An-Eye-For-An-Eye_category_card_description__utu6j",
	"preview_card_description": "An-Eye-For-An-Eye_preview_card_description__f6_R2",
	"preview_card": "An-Eye-For-An-Eye_preview_card__CJfQ4",
	"preview_card_img": "An-Eye-For-An-Eye_preview_card_img__0rMMO",
	"divider_container": "An-Eye-For-An-Eye_divider_container__hNwC5",
	"divider": "An-Eye-For-An-Eye_divider__hK7sr",
	"preview_container": "An-Eye-For-An-Eye_preview_container__3Q_FN",
	"preview_card_year": "An-Eye-For-An-Eye_preview_card_year__u2ucY",
	"symbol_container": "An-Eye-For-An-Eye_symbol_container__Qdo0Q"
};


/***/ }),

/***/ 1554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnEyeForAnEye),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1571);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4659);
/* harmony import */ var _styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(374);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);






async function getStaticProps() {
    const categoryImages = await (0,utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("category-preview-images?populate=*");
    categoryImages.forEach((el)=>extractImageUrl(el));
    const previews = await (0,utils_fetchDataForProps_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("previews?populate=*");
    var curatedPreviews = [];
    var darkroomPreviews = [];
    var videoPreviews = [];
    var domesticationPreviews = [];
    var proceduralPreviews = [];
    var miscPreviews = [];
    function extractImageUrl(obj) {
        let url = obj.image.data.attributes.url;
        obj.url = url;
    // delete obj.image; // can be removed from the structure if data not needed
    }
    previews.forEach((preview)=>{
        switch(preview.type){
            case "catastrophe-and-the-curator":
                extractImageUrl(preview);
                curatedPreviews.push(preview);
                break;
            case "photosynthesis":
                extractImageUrl(preview);
                darkroomPreviews.push(preview);
                break;
            case "to-succeed":
                extractImageUrl(preview);
                videoPreviews.push(preview);
                break;
            case "domestication":
                extractImageUrl(preview);
                domesticationPreviews.push(preview);
                break;
            case "procedural":
                extractImageUrl(preview);
                proceduralPreviews.push(preview);
                break;
            case "illustrious":
                extractImageUrl(preview);
                miscPreviews.push(preview);
        }
    });
    return {
        props: {
            curatedPreviews: curatedPreviews,
            darkroomPreviews: darkroomPreviews,
            videoPreviews: videoPreviews,
            domesticationPreviews: domesticationPreviews,
            proceduralPreviews: proceduralPreviews,
            miscPreviews: miscPreviews,
            categoryImages: categoryImages
        }
    };
}
function AnEyeForAnEye({ categoryImages , curatedPreviews , darkroomPreviews , videoPreviews , domesticationPreviews , proceduralPreviews , miscPreviews  }) {
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    function selectCategory(selection) {
        switch(selection){
            case "curated":
                setCategory(curatedPreviews);
                break;
            case "darkroom":
                setCategory(darkroomPreviews);
                break;
            case "video":
                setCategory(videoPreviews);
                break;
            case "domestication":
                setCategory(domesticationPreviews);
                break;
            case "procedural":
                setCategory(proceduralPreviews);
                break;
            case "misc":
                setCategory(miscPreviews);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head_js__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "An Eye For An Eye"
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
                children: "An Eye For An Eye"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card),
                        onClick: ()=>selectCategory("curated"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `http://localhost:1337${categoryImages[6].url}`,
                                alt: "",
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_img)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_title),
                                children: "Catastrophe & The Curator"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_description),
                                children: "Curated series of found and accidental photos"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card),
                        onClick: ()=>selectCategory("darkroom"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `http://localhost:1337${categoryImages[8].url}`,
                                alt: "",
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_img)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_title),
                                children: "Photosynthesis"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_description),
                                children: "Alternative photography processes for the darkroom"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card),
                        onClick: ()=>selectCategory("misc"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `http://localhost:1337${categoryImages[11].url}`,
                                alt: "",
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_img)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_title),
                                children: "Illustrious"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_description),
                                children: "Conceptual photography series"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card),
                        onClick: ()=>selectCategory("domestication"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `http://localhost:1337${categoryImages[10].url}`,
                                alt: "",
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_img)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_title),
                                children: "Domestication"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_description),
                                children: 'A group of series based on the conceptual metaphor of "domestication"'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card),
                        onClick: ()=>selectCategory("video"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `http://localhost:1337${categoryImages[9].url}`,
                                alt: "",
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_img)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_title),
                                children: "To Succeed"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_description),
                                children: "Moving images / Images moving"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card),
                        onClick: ()=>selectCategory("procedural"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `http://localhost:1337${categoryImages[7].url}`,
                                alt: "",
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_img)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_title),
                                children: "The Process Is The Subject"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_card_description),
                                children: "Photographic series focused on the process"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().divider_container),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().divider)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().preview_container),
                children: category && category.map((preview, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().preview_card),
                        href: `/an-eye-for-an-eye/${preview.type}/${preview.slug}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().preview_card_img),
                                src: `http://localhost:1337${preview.url}`,
                                alt: preview.alt
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().preview_card_title),
                                children: preview.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().preview_card_description),
                                children: preview.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().preview_card_year),
                                children: preview.year
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_An_Eye_For_An_Eye_module_css__WEBPACK_IMPORTED_MODULE_5___default().symbol_container),
                                children: "♦"
                            })
                        ]
                    }, index))
            })
        ]
    });
}


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(1554)));
module.exports = __webpack_exports__;

})();