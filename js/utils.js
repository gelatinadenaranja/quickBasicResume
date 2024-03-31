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
    <h1 class="big-header">` + educationTitle + `</h1>
    
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
        <span class="big-header">` + languageName + ` : </span>
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
