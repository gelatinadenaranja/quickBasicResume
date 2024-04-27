export function setColorMode() {
    const currentHour = new Date().getHours();
    if (currentHour > 7 && currentHour < 19) {
        return;
    }
    ;
    document.body.classList.toggle("body-darkmode");
}
;
;
function getFontsArray() {
    return [
        { fontName: 'Times New Roman', fontValue: '"Times New Roman", serif' },
        { fontName: 'Georgia', fontValue: 'Georgia, serif' },
        { fontName: 'Verdana', fontValue: 'Verdana, sans-serif' },
        { fontName: 'Tahoma', fontValue: 'Tahoma, sans-serif' },
        { fontName: 'Arial', fontValue: 'Arial, sans-serif' },
        { fontName: 'Courier New', fontValue: '"Courier New", monospace' }
    ];
}
export function addFontOptions(selectElem) {
    const fontsArray = getFontsArray();
    fontsArray.forEach((item) => {
        const optionElem = document.createElement('option');
        optionElem.textContent = item.fontName;
        optionElem.value = item.fontValue;
        selectElem.append(optionElem);
    });
}
;
export function getCssVarValue(cssVar) { return getComputedStyle(document.body).getPropertyValue(cssVar); }
;
export function setCssVarValue(cssVar, cssVarValue) { document.documentElement.style.setProperty(cssVar, cssVarValue); }
;
export function getWorkItemTemplate(companyName, workPos, workDesc, workStr, workEnd) {
    const workItemTemplate = `
    <div class="flex-container">
        <span class="big-header">` + companyName + `</span>
        <span class="big-header">` + workStr + ` - ` + workEnd + `</span>
    </div>

    <h1 class="small-header">` + workPos + `</h1>

    <span class="resume-text">` + workDesc + `</span>`;
    return workItemTemplate;
}
;
export function getEducationItemTemplate(educationTitle, educationGrade, educationInstitution, educationStr, educationEnd) {
    const educationItemTemplate = `
    <div class="flex-container">
        <h1 class="big-header">` + educationTitle + `</h1>
    </div>
    
    <div class="flex-container">
        <span class="small-header">` + educationGrade + ` - ` + educationInstitution + `</span>
        <span class="small-header">` + educationStr + ` - ` + educationEnd + `</span>
    </div>`;
    return educationItemTemplate;
}
;
export function getLanguageItemTemplate(languageName, languageLevel) {
    const languageItemTemplate = `
    <div>
        <span class="small-header">` + languageName + ` : </span>
        <span class="small-header">` + languageLevel + `</span>
    </div>`;
    return languageItemTemplate;
}
;
export function getRemovalBtn(resumeTargetItem, targetItem) {
    const removalBtn = document.createElement('button');
    removalBtn.innerText = 'X';
    removalBtn.className = 'remove-item-button';
    removalBtn.addEventListener('click', (() => {
        resumeTargetItem.remove();
        targetItem.remove();
    }));
    return removalBtn;
}
;
export function getSelectElemText(selectElem) { return selectElem.options[selectElem.selectedIndex].text; }
;
export function disableInputElem(inputElem) { inputElem.disabled = true; }
;
export function enableInputElem(inputElem) { inputElem.disabled = false; }
;
export function sortedLiAppend(LiElem, OlElem) {
    const OlElemChildren = OlElem.children;
    if (OlElemChildren.length === 0) {
        OlElem.append(LiElem);
        return;
    }
    ;
    let i = 0;
    if (LiElem.value < getHTMLElemValue(OlElemChildren[i])) {
        OlElem.insertBefore(LiElem, OlElemChildren[i]);
        return;
    }
    ;
    for (; i < OlElemChildren.length; i++) {
        if (LiElem.value === getHTMLElemValue(OlElemChildren[i]))
            LiElem.value++;
        if (OlElemChildren[i + 1] === undefined)
            break;
        if (LiElem.value > getHTMLElemValue(OlElemChildren[i]) && LiElem.value < getHTMLElemValue(OlElemChildren[i + 1]))
            break;
    }
    ;
    OlElem.insertBefore(LiElem, OlElemChildren[i].nextElementSibling);
}
;
function getHTMLElemValue(HTMLElem) { return HTMLElem.getAttribute('value') ? Number.parseInt(HTMLElem.getAttribute('value')) : -1; }
;
export function getHTMLElemTextContent(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display !== 'none' && element.textContent) {
        return element.textContent;
    }
    ;
    return '';
}
;
export function setHTMLElemTextContent(elementId, textContent) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.log('Element ' + elementId + ' not found');
        return false;
    }
    ;
    if (element.style.display === 'none')
        element.style.display = 'block';
    element.textContent = textContent;
    return true;
}
;
