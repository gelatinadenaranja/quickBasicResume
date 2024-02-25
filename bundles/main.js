/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/events.js":
/*!**********************!*\
  !*** ./js/events.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   educationToResume: () => (/* binding */ educationToResume),\n/* harmony export */   inputToResume: () => (/* binding */ inputToResume),\n/* harmony export */   languageToResume: () => (/* binding */ languageToResume),\n/* harmony export */   miscToResume: () => (/* binding */ miscToResume),\n/* harmony export */   workExpToResume: () => (/* binding */ workExpToResume)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\n\r\nfunction inputToResume(srcInput, targetElement) {\r\n    targetElement.innerText = srcInput.value;\r\n}\r\n;\r\nfunction workExpToResume(companyNameInput, workPosInput, workDescInput, workStrMthSelect, workStrYrSelect, workEndMthSelect, workEndYrSelect, workItemsDiv, resumeExpDiv) {\r\n    const workExpResumeItem = document.createElement('div');\r\n    const workExpItem = document.createElement('div');\r\n    const workExpItemTemplate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWorkItemTemplate)(companyNameInput.value, workPosInput.value, workDescInput.value, workStrMthSelect.value, workStrYrSelect.value, workEndMthSelect.value, workEndYrSelect.value);\r\n    workExpResumeItem.innerHTML = workExpItemTemplate;\r\n    resumeExpDiv.append(workExpResumeItem);\r\n    workExpItem.innerHTML = workExpItemTemplate;\r\n    workExpItem.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRemovalBtn)(workExpResumeItem, workExpItem));\r\n    workItemsDiv.append(workExpItem);\r\n    companyNameInput.value = '';\r\n    workPosInput.value = '';\r\n    workDescInput.value = '';\r\n}\r\n;\r\nfunction educationToResume(educationTitleInput, educationGradeInput, educationInstitutionInput, educationStrMthSelect, educationStrYrSelect, educationEndMthSelect, educationEndYrSelect, educationItemsDiv, resumeEdDiv) {\r\n    const educationResumeItem = document.createElement('div');\r\n    const educationItem = document.createElement('div');\r\n    const educationItemTemplate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEducationItemTemplate)(educationTitleInput.value, educationGradeInput.value, educationInstitutionInput.value, educationStrMthSelect.value, educationStrYrSelect.value, educationEndMthSelect.value, educationEndYrSelect.value);\r\n    educationResumeItem.innerHTML = educationItemTemplate;\r\n    resumeEdDiv.append(educationResumeItem);\r\n    educationItem.innerHTML = educationItemTemplate;\r\n    educationItem.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRemovalBtn)(educationResumeItem, educationItem));\r\n    educationItemsDiv.append(educationItem);\r\n    educationTitleInput.value = '';\r\n    educationGradeInput.value = '';\r\n    educationInstitutionInput.value = '';\r\n}\r\n;\r\nfunction languageToResume(languageNameInput, languageLevelSelect, languageItemsDiv, resumeLanguageDiv) {\r\n    const languageResumeItem = document.createElement('div');\r\n    const languageItem = document.createElement('div');\r\n    const languageItemTemplate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getLanguageItemTemplate)(languageNameInput.value, languageLevelSelect.value);\r\n    languageResumeItem.innerHTML = languageItemTemplate;\r\n    resumeLanguageDiv.append(languageResumeItem);\r\n    languageItem.innerHTML = languageItemTemplate;\r\n    languageItem.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRemovalBtn)(languageResumeItem, languageItem));\r\n    languageItemsDiv.append(languageItem);\r\n    languageNameInput.value = '';\r\n}\r\n;\r\nfunction miscToResume(miscInput, miscItemsDiv, resumeMiscDiv) {\r\n    const miscResumeItem = document.createElement('span');\r\n    const miscItem = document.createElement('span');\r\n    miscResumeItem.innerText = miscInput.value;\r\n    resumeMiscDiv.append(miscResumeItem);\r\n    miscItem.innerText = miscInput.value;\r\n    miscItem.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRemovalBtn)(miscResumeItem, miscItem));\r\n    miscItemsDiv.append(miscItem);\r\n    miscInput.value = '';\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://quickbasicresume/./js/events.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./js/events.js\");\n\r\nconst nameInputElement = document.getElementById('personal-name-input');\r\nconst nameResumeElement = document.getElementById('personal-name');\r\nnameInputElement.addEventListener('input', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.inputToResume)(nameInputElement, nameResumeElement)));\r\nconst emailInputElement = document.getElementById('contact-mail-input');\r\nconst emailResumeElement = document.getElementById('contact-mail');\r\nnameInputElement.addEventListener('input', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.inputToResume)(emailInputElement, emailResumeElement)));\r\nconst contactNoInputElement = document.getElementById('contact-number-input');\r\nconst contactNoResumeElement = document.getElementById('contact-number');\r\nnameInputElement.addEventListener('input', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.inputToResume)(contactNoInputElement, contactNoResumeElement)));\r\nconst locationInputElement = document.getElementById('personal-location-input');\r\nconst locationResumeElement = document.getElementById('personal-location');\r\nnameInputElement.addEventListener('input', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.inputToResume)(locationInputElement, locationResumeElement)));\r\nconst companyNameInput = document.getElementById('work-company-input');\r\nconst workPosInput = document.getElementById('work-position-input');\r\nconst workDescInput = document.getElementById('work-description-input');\r\nconst workStrMthSelect = document.getElementById('work-start-month-input');\r\nconst workStrYrSelect = document.getElementById('work-start-year-input');\r\nconst workEndMthSelect = document.getElementById('work-end-month-input');\r\nconst workEndYrSelect = document.getElementById('work-end-year-input');\r\nconst workItemsDiv = document.getElementById('experience-items-container');\r\nconst resumeExpDiv = document.getElementById('work-experience-resume-container');\r\nconst workExpItemsBtn = document.getElementById('add-experience-button');\r\nworkExpItemsBtn.addEventListener('click', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.workExpToResume)(companyNameInput, workPosInput, workDescInput, workStrMthSelect, workStrYrSelect, workEndMthSelect, workEndYrSelect, workItemsDiv, resumeExpDiv)));\r\nconst educationGradeInput = document.getElementById('education-grade-input');\r\nconst educationTitleInput = document.getElementById('education-title-input');\r\nconst educationInstitutionInput = document.getElementById('education-institution-input');\r\nconst educationStrMthSelect = document.getElementById('education-start-month-input');\r\nconst educationStrYrSelect = document.getElementById('education-start-year-input');\r\nconst educationEndMthSelect = document.getElementById('education-end-month-input');\r\nconst educationEndYrSelect = document.getElementById('education-end-year-input');\r\nconst educationItemsDiv = document.getElementById('education-items-container');\r\nconst resumeEdDiv = document.getElementById('education-resume-container');\r\nconst educationItemsBtn = document.getElementById('add-education-button');\r\neducationItemsBtn.addEventListener('click', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.educationToResume)(educationTitleInput, educationGradeInput, educationInstitutionInput, educationStrMthSelect, educationStrYrSelect, educationEndMthSelect, educationEndYrSelect, educationItemsDiv, resumeEdDiv)));\r\nconst languageNameInput = document.getElementById('language-name-input');\r\nconst languageLevelSelect = document.getElementById('language-level-select');\r\nconst languageItemsDiv = document.getElementById('language-items-container');\r\nconst resumeLanguageDiv = document.getElementById('language-resume-container');\r\nconst languageItemsBtn = document.getElementById('add-language-button');\r\nlanguageItemsBtn.addEventListener('click', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.languageToResume)(languageNameInput, languageLevelSelect, languageItemsDiv, resumeLanguageDiv)));\r\nconst miscSkillsInput = document.getElementById('miscellaneous-skills-input');\r\nconst miscSkillsItemsDiv = document.getElementById('miscellaneous-skills-container');\r\nconst resumeMiscSkillsDiv = document.getElementById('miscellaneous-skills-resume-container');\r\nconst miscSkillsItemsBtn = document.getElementById('add-miscellaneous-skill-button');\r\nmiscSkillsItemsBtn.addEventListener('click', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.miscToResume)(miscSkillsInput, miscSkillsItemsDiv, resumeMiscSkillsDiv)));\r\nconst miscQltyInput = document.getElementById('miscellaneous-qualities-input');\r\nconst miscQltyItemsDiv = document.getElementById('miscellaneous-qualities-container');\r\nconst resumeMiscQltyDiv = document.getElementById('miscellaneous-qualities-resume-container');\r\nconst miscQltyItemsBtn = document.getElementById('add-miscellaneous-qualities-button');\r\nmiscQltyItemsBtn.addEventListener('click', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.miscToResume)(miscQltyInput, miscQltyItemsDiv, resumeMiscQltyDiv)));\r\nconst miscIntrstInput = document.getElementById('miscellaneous-interests-input');\r\nconst miscIntrstItemsDiv = document.getElementById('miscellaneous-interests-container');\r\nconst resumeMiscIntrstDiv = document.getElementById('miscellaneous-interests-resume-container');\r\nconst miscIntrstItemsBtn = document.getElementById('add-miscellaneous-interests-button');\r\nmiscIntrstItemsBtn.addEventListener('click', () => ((0,_events__WEBPACK_IMPORTED_MODULE_0__.miscToResume)(miscIntrstInput, miscIntrstItemsDiv, resumeMiscIntrstDiv)));\r\n\n\n//# sourceURL=webpack://quickbasicresume/./js/index.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEducationItemTemplate: () => (/* binding */ getEducationItemTemplate),\n/* harmony export */   getLanguageItemTemplate: () => (/* binding */ getLanguageItemTemplate),\n/* harmony export */   getRemovalBtn: () => (/* binding */ getRemovalBtn),\n/* harmony export */   getWorkItemTemplate: () => (/* binding */ getWorkItemTemplate)\n/* harmony export */ });\nfunction getWorkItemTemplate(companyName, workPos, workDesc, workStrMth, workStrYr, workEndMth, workEndYr) {\r\n    const workItemTemplate = `\r\n    <div class=\"flex-container\">\r\n        <span class=\"small-header\">` + companyName + `</span>\r\n        <span class=\"small-header\">` + workStrMth + `-` + workStrYr + ` - ` + workEndMth + `-` + workEndYr + `</span>\r\n    </div>\r\n\r\n    <h1 class=\"small-header\">` + workPos + `</h1>\r\n\r\n    <div>\r\n        ` + workDesc + `\r\n    </div>`;\r\n    return workItemTemplate;\r\n}\r\n;\r\nfunction getEducationItemTemplate(educationTitle, educationGrade, educationInstitution, educationStrMth, educationStrYr, educationEndMth, educationEndYr) {\r\n    const educationItemTemplate = `\r\n    <h1 class=\"small-header\">` + educationTitle + `</h1>\r\n    \r\n    <div class=\"flex-container\">\r\n        <span>` + educationGrade + ` - ` + educationInstitution + `</span>\r\n        <span>` + educationStrMth + `-` + educationStrYr + ` - ` + educationEndMth + `-` + educationEndYr + `</span>\r\n    </div>`;\r\n    return educationItemTemplate;\r\n}\r\n;\r\nfunction getLanguageItemTemplate(languageName, languageLevel) {\r\n    const languageItemTemplate = `\r\n    <div class=\"flex-container\">\r\n        <span>` + languageName + `</span>\r\n        <span>` + languageLevel + `</span>\r\n        \r\n    </div>`;\r\n    return languageItemTemplate;\r\n}\r\n;\r\nfunction getRemovalBtn(resumeTargetItem, targetItem, buttonCssClass) {\r\n    const removalBtn = document.createElement('button');\r\n    removalBtn.innerText = 'X';\r\n    removalBtn.className = buttonCssClass ? buttonCssClass : 'remove-item-button';\r\n    removalBtn.onclick = () => {\r\n        resumeTargetItem.remove();\r\n        targetItem.remove();\r\n    };\r\n    return removalBtn;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://quickbasicresume/./js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;