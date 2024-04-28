import localizationDataJSON from './localizationData.json';
;
export function loadLocalizationData() {
    const localizationData = localizationDataJSON['localizationData'];
    const objKeys = Object.keys(localizationData);
    objKeys.forEach((keyValue) => {
        const objElem = localizationData[keyValue];
        const objElemKey = Object.keys(objElem);
        objElemKey.forEach((objKey) => {
            sessionStorage.setItem(objKey, JSON.stringify(objElem[objKey]));
        });
    });
}
;
export function setUserLanguage() {
    const userLang = sessionStorage.getItem('user-lang');
    if (!userLang) {
        const navLanguage = window.navigator.language;
        if (!navLanguage) {
            sessionStorage.setItem('user-lang', 'en');
            return;
        }
        ;
        sessionStorage.setItem('user-lang', navLanguage.substring(0, 2) === 'es' ? 'es' : 'en');
        return;
    }
    ;
}
;
function getUserLanguage() {
    const userLang = sessionStorage.getItem('user-lang');
    if (!userLang) {
        setUserLanguage();
        return sessionStorage.getItem('user-lang');
    }
    ;
    return userLang;
}
;
export function swapUserLanguage() {
    const userLang = sessionStorage.getItem('user-lang');
    if (!userLang) {
        setUserLanguage();
        return;
    }
    ;
    sessionStorage.removeItem('user-lang');
    sessionStorage.setItem('user-lang', userLang === 'en' ? 'es' : 'en');
}
;
export function getLocalizedText(elemId) {
    const itemJSON = sessionStorage.getItem(elemId);
    if (!itemJSON) {
        console.log('sessionStorage key ' + elemId + ' not found');
        return elemId;
    }
    ;
    const localizationItem = JSON.parse(itemJSON);
    return getUserLanguage() === 'en' ? localizationItem.EN : localizationItem.ES;
}
;
export function getCheckboxText(checkboxElem, keyChecked, keyUnchecked) {
    return checkboxElem.checked ? getLocalizedText(keyChecked) : getLocalizedText(keyUnchecked);
}
;
export function addSelectOptions(selectElem, selectElemId) {
    if (selectElem.options.length != 0)
        selectElem.options.length = 0;
    const selectOptionsText = getLocalizedText(selectElemId);
    for (let i = 0; i < selectOptionsText.length; i++) {
        const optionElement = document.createElement('option');
        optionElement.innerText = selectOptionsText[i];
        selectElem.append(optionElement);
    }
    ;
}
;
export function addMonthSelectOptions(selectElem) {
    if (selectElem.options.length != 0)
        selectElem.options.length = 0;
    const monthsOptionsText = getLocalizedText('month-list');
    let elemVal = 12;
    for (let i = 0; i < 12; i++, elemVal--) {
        const optionElement = document.createElement('option');
        optionElement.value = (elemVal * 10).toString();
        optionElement.innerText = monthsOptionsText[i];
        selectElem.append(optionElement);
    }
    ;
}
;
export function addYearSelectOptions(selectElem) {
    let currentYear = new Date().getFullYear();
    for (let i = 1; i < 21; i++, currentYear--) {
        const optionElement = document.createElement('option');
        optionElement.value = (i * 1000).toString();
        optionElement.innerText = currentYear.toString();
        selectElem.append(optionElement);
    }
    ;
}
;
