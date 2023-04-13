(() => {
var exports = {};
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 7648:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery_container": "Exhibitionism_gallery_container__TzicF",
	"modal": "Exhibitionism_modal__4GYac",
	"modal_image_container": "Exhibitionism_modal_image_container__FwM0b",
	"modal_image": "Exhibitionism_modal_image__W6Y91",
	"modal_text_container": "Exhibitionism_modal_text_container__HVSe2",
	"modal_title": "Exhibitionism_modal_title__tCswU",
	"symbol_container": "Exhibitionism_symbol_container__7rODB"
};


/***/ }),

/***/ 9259:
/***/ ((module) => {

// Exports
module.exports = {
	"post_card": "GalleryPost_post_card__gJNCn",
	"post_video": "GalleryPost_post_video__9D3ZL",
	"post_img": "GalleryPost_post_img__1BuI7"
};


/***/ }),

/***/ 2397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GalleryPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var _styles_GalleryPost_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9259);
/* harmony import */ var _styles_GalleryPost_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_GalleryPost_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_1__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function GalleryPost({ data , click  }) {
    console.log(data);
    var htmlText, imgUrl, largeImgUrl, videoPreview;
    if (data.htmlDescription) {
        // add style tags to rich text
        var regex = / /;
        htmlText = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(data.htmlDescription);
    }
    if (data.image.data) {
        largeImgUrl = data.image.data.attributes.url;
        imgUrl = data.image.data.attributes.formats.small.url;
    }
    if (data.videoPreview.data) {
        videoPreview = data.videoPreview.data.attributes.url;
    }
    // TODO: should only return an object with non-null values
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_GalleryPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().post_card),
        onClick: ()=>click({
                title: data.title,
                description: data.description,
                html: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(data.htmlDescription),
                alt: data.alt,
                imgUrl: largeImgUrl
            }),
        children: [
            data.videoUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_styles_GalleryPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().video_link),
                href: data.videoUrl,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_styles_GalleryPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().post_video),
                    src: `http://localhost:1337${videoPreview}`,
                    alt: data.alt
                })
            }),
            imgUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_styles_GalleryPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().post_img),
                src: `http://localhost:1337${imgUrl}`,
                alt: data.alt
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4254:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Exhibitionism),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7648);
/* harmony import */ var _styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_fetchDataForProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(374);
/* harmony import */ var components_GalleryPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2397);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_GalleryPost__WEBPACK_IMPORTED_MODULE_2__]);
components_GalleryPost__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import parse from "html-react-parser";
async function getStaticProps() {
    const galleryItems = await (0,utils_fetchDataForProps__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("random-media-posts?populate=*");
    return {
        props: {
            galleryItems: galleryItems
        }
    };
}
function Exhibitionism({ galleryItems  }) {
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    function closeModal() {
        setModal(null);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Exhibitionism"
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
                children: "Random Art gallery"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().gallery_container),
                children: galleryItems.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_GalleryPost__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        data: item,
                        click: setModal
                    }, index))
            }),
            modal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal),
                onClick: closeModal,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_image_container),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_image),
                            alt: modal.alt,
                            src: `http://localhost:1337${modal.imgUrl}`
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_text_container),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_title),
                                children: modal.title
                            }),
                            (modal.description || modal.html) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().symbol_container),
                                children: "♦"
                            }),
                            modal.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_description),
                                children: modal.description
                            }),
                            modal.html && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Exhibitionism_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_html),
                                children: modal.html
                            })
                        ]
                    })
                ]
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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(4254));
module.exports = __webpack_exports__;

})();