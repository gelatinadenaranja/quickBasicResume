import localizationDataJSON from './localizationData.json';

interface localizationDataItem {
    EN : string;
    ES : string;
};

export function loadLocalizationData() : void {
    const localizationData : Object = localizationDataJSON['localizationData'];
    const objKeys = Object.keys(localizationData);

    objKeys.forEach((keyValue : string) => {
        const objElem = localizationData[keyValue as keyof Object];
        const objElemKey = Object.keys(objElem);

        objElemKey.forEach((objKey : string) => {
            sessionStorage.setItem(objKey, JSON.stringify(objElem[objKey as keyof Object]));
        });
    });
};

export function setUserLanguage() : void {
    const userLang = sessionStorage.getItem('user-lang');

    if(!userLang) {
        const navLanguage : string | undefined = window.navigator.language;

        if(!navLanguage) {
            sessionStorage.setItem('user-lang', 'en');
            return;
        };

        sessionStorage.setItem('user-lang', navLanguage.substring(0, 2) === 'es' ? 'es' : 'en');
        return;
    };
};

function getUserLanguage() : string {
    const userLang : string | null = sessionStorage.getItem('user-lang');

    if(!userLang) {
        setUserLanguage();
        return sessionStorage.getItem('user-lang') as string;
    };

    return userLang;
};

export function swapUserLanguage() : void {
    const userLang : string | null = sessionStorage.getItem('user-lang');

    if(!userLang) {
        setUserLanguage();
        return;
    };

    sessionStorage.removeItem('user-lang');

    sessionStorage.setItem('user-lang', userLang === 'en' ? 'es' : 'en');
};

export function getLocalizedText(elemId : string) : string {
    const itemJSON : string | null = sessionStorage.getItem(elemId);

    if(!itemJSON) {
        console.log('sessionStorage key ' + elemId + ' not found');
        return elemId;
    };

    const localizationItem : localizationDataItem = JSON.parse(itemJSON);

    return getUserLanguage() === 'en' ? localizationItem.EN : localizationItem.ES;
};

export function getCheckboxText(checkboxElem : HTMLInputElement, keyChecked : string, keyUnchecked : string) : string {
    return checkboxElem.checked ? getLocalizedText(keyChecked) : getLocalizedText(keyUnchecked);
};

export function addSelectOptions(selectElem : HTMLSelectElement, selectElemId : string) : void {
    if(selectElem.options.length != 0) selectElem.options.length = 0;

    const selectOptionsText : string = getLocalizedText(selectElemId);

    for(let i : number = 0; i < selectOptionsText.length; i++) {
        const optionElement : HTMLOptionElement = document.createElement('option');
        optionElement.innerText = selectOptionsText[i];
        selectElem.append(optionElement);
    };
};

export function addMonthSelectOptions(selectElem : HTMLSelectElement) : void {
    if(selectElem.options.length != 0) selectElem.options.length = 0;

    const monthsOptionsText : string = getLocalizedText('month-list');
    let elemVal : number = 12;
    for(let i = 0; i < 12; i++, elemVal--) {
        const optionElement : HTMLOptionElement = document.createElement('option');
        optionElement.value = (elemVal * 10).toString();
        optionElement.innerText = monthsOptionsText[i];
        selectElem.append(optionElement);
    };
};

export function addYearSelectOptions(selectElem : HTMLSelectElement) : void {
    let currentYear : number = new Date().getFullYear();

    for(let i = 1; i < 11; i++, currentYear--) {
        const optionElement : HTMLOptionElement = document.createElement('option');
        optionElement.value = (i * 1000).toString();
        optionElement.innerText = currentYear.toString();
        selectElem.append(optionElement);
    };
};