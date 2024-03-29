import { getWorkItemTemplate, getEducationItemTemplate, getLanguageItemTemplate, getRemovalBtn, getSelectElemText, sortedLiAppend, disableInputElem, enableInputElem } from './utils';
import { getLocalizedText, getCheckboxText } from './localization';
export function swapColorMode() { document.body.classList.toggle("body-darkmode"); }
;
export function inputToResume(srcInput, targetElement) {
    if (srcInput.value === '') {
        targetElement.style.display = 'none';
        return;
    }
    ;
    targetElement.style.display = 'inline';
    targetElement.innerText = srcInput.value;
}
;
export function insertPersonalPicture(inputFileList, personalPictureDiv, resumePersonalPictureDiv) {
    if (!inputFileList) {
        return;
    }
    ;
    const personalPictureFile = inputFileList[0];
    const fileReader = new FileReader();
    fileReader.onload = (ev) => {
        var _a, _b;
        if (!personalPictureFile.type.startsWith('image/')) {
            return;
        }
        ;
        const imageFileURL = (_b = (_a = ev.target) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.toString();
        if (!imageFileURL) {
            return;
        }
        ;
        personalPictureDiv.textContent = '';
        resumePersonalPictureDiv.textContent = '';
        const resumePersonalPictureImg = document.createElement('img');
        const personalPictureImg = document.createElement('img');
        const personalPictureWrap = document.createElement('div');
        resumePersonalPictureImg.src = imageFileURL;
        resumePersonalPictureDiv.append(resumePersonalPictureImg);
        personalPictureImg.src = imageFileURL;
        personalPictureWrap.append(personalPictureImg);
        personalPictureWrap.append(getRemovalBtn(resumePersonalPictureImg, personalPictureWrap));
        personalPictureDiv.append(personalPictureWrap);
    };
    fileReader.readAsDataURL(personalPictureFile);
}
;
export function workExpToResume(companyNameInput, workPosInput, workDescInput, workDescTextArea, workStrMthSelect, workStrYrSelect, workEndMthSelect, workEndYrSelect, workPresentCheckbox, workItemsList, resumeExpList, workAreaMsgSpan) {
    if (!companyNameInput.value || !workPosInput.value || (workDescInput.style.display !== 'none' && !workDescInput.value) || (workDescTextArea.style.display !== 'none' && !workDescTextArea.value)) {
        workAreaMsgSpan.textContent = getLocalizedText('empty-field-msg');
        return;
    }
    ;
    if (!workPresentCheckbox.checked) {
        if (Number.parseInt(workStrMthSelect.value) + Number.parseInt(workStrYrSelect.value) < Number.parseInt(workEndMthSelect.value) + Number.parseInt(workEndYrSelect.value)) {
            workAreaMsgSpan.textContent = getLocalizedText('invalid-date-msg');
            return;
        }
        ;
    }
    ;
    const workExpResumeItem = document.createElement('li');
    const workExpItem = document.createElement('li');
    const workDesc = workDescInput.style.display !== 'none' ? workDescInput.value : workDescTextArea.value;
    const workExpItemTemplate = workPresentCheckbox.checked ? getWorkItemTemplate(companyNameInput.value, workPosInput.value, workDesc, (getSelectElemText(workStrMthSelect) + ' / ' + getSelectElemText(workStrYrSelect)), getLocalizedText('present-date')) :
        getWorkItemTemplate(companyNameInput.value, workPosInput.value, workDesc, (getSelectElemText(workStrMthSelect) + ' / ' + getSelectElemText(workStrYrSelect)), (getSelectElemText(workEndMthSelect) + ' / ' + getSelectElemText(workEndYrSelect)));
    const workLiValue = workPresentCheckbox.checked ? 1 : Number.parseInt(workEndMthSelect.value) + Number.parseInt(workEndYrSelect.value);
    const removalBtn = getRemovalBtn(workExpResumeItem, workExpItem);
    workExpResumeItem.innerHTML = workExpItemTemplate;
    workExpResumeItem.value = workLiValue;
    sortedLiAppend(workExpResumeItem, resumeExpList);
    workExpItem.innerHTML = workExpItemTemplate;
    workExpItem.value = workLiValue;
    if (workPresentCheckbox.checked) {
        removalBtn.addEventListener('click', () => (enableInputElem(workPresentCheckbox)));
        workPresentCheckbox.checked = false;
        disableInputElem(workPresentCheckbox);
    }
    ;
    workExpItem.className = 'list-element-item';
    workExpItem.append(removalBtn);
    sortedLiAppend(workExpItem, workItemsList);
    companyNameInput.value = '';
    workPosInput.value = '';
    workDescInput.value = '';
    workDescTextArea.value = '';
    workStrMthSelect.selectedIndex = 0;
    workStrYrSelect.selectedIndex = 0;
    workEndMthSelect.selectedIndex = 0;
    workEndYrSelect.selectedIndex = 0;
    workAreaMsgSpan.textContent = '';
}
;
export function educationToResume(educationTitleInput, educationGradeSelect, educationInstitutionInput, educationStrMthSelect, educationStrYrSelect, educationEndMthSelect, educationEndYrSelect, educationPresentCheckbox, educationItemsList, resumeEdList, educationAreaMsgSpan) {
    if (!educationTitleInput.value || !educationInstitutionInput.value) {
        educationAreaMsgSpan.textContent = getLocalizedText('empty-field-msg');
        return;
    }
    ;
    if (!educationPresentCheckbox.checked) {
        if (Number.parseInt(educationStrMthSelect.value) + Number.parseInt(educationStrYrSelect.value) < Number.parseInt(educationEndMthSelect.value) + Number.parseInt(educationEndYrSelect.value)) {
            educationAreaMsgSpan.textContent = getLocalizedText('invalid-date-msg');
            return;
        }
        ;
    }
    ;
    const educationResumeItem = document.createElement('li');
    const educationItem = document.createElement('li');
    const educationItemTemplate = educationPresentCheckbox.checked ? getEducationItemTemplate(educationTitleInput.value, getSelectElemText(educationGradeSelect), educationInstitutionInput.value, (getSelectElemText(educationStrMthSelect) + ' / ' + getSelectElemText(educationStrYrSelect)), getLocalizedText('present-date')) :
        getEducationItemTemplate(educationTitleInput.value, getSelectElemText(educationGradeSelect), educationInstitutionInput.value, (getSelectElemText(educationStrMthSelect) + ' / ' + getSelectElemText(educationStrYrSelect)), (getSelectElemText(educationEndMthSelect) + ' / ' + getSelectElemText(educationEndYrSelect)));
    const educationLiValue = educationPresentCheckbox.checked ? 1 : Number.parseInt(educationEndMthSelect.value) + Number.parseInt(educationEndYrSelect.value);
    const removalBtn = getRemovalBtn(educationResumeItem, educationItem);
    educationResumeItem.innerHTML = educationItemTemplate;
    educationResumeItem.value = educationLiValue;
    sortedLiAppend(educationResumeItem, resumeEdList);
    educationItem.innerHTML = educationItemTemplate;
    educationItem.value = educationLiValue;
    if (educationPresentCheckbox.checked) {
        removalBtn.addEventListener('click', () => (enableInputElem(educationPresentCheckbox)));
        educationPresentCheckbox.checked = false;
        disableInputElem(educationPresentCheckbox);
    }
    ;
    educationItem.className = 'list-element-item';
    educationItem.append(removalBtn);
    sortedLiAppend(educationItem, educationItemsList);
    educationTitleInput.value = '';
    educationGradeSelect.selectedIndex = 0;
    educationInstitutionInput.value = '';
    educationStrMthSelect.selectedIndex = 0;
    educationStrYrSelect.selectedIndex = 0;
    educationEndMthSelect.selectedIndex = 0;
    educationEndYrSelect.selectedIndex = 0;
    educationAreaMsgSpan.textContent = '';
}
;
export function languageToResume(languageNameInput, languageLevelSelect, languageItemsDiv, resumeLanguageDiv, languageAreaMsgSpan) {
    if (!languageNameInput.value) {
        languageAreaMsgSpan.textContent = getLocalizedText('empty-field-msg');
        return;
    }
    ;
    const languageResumeItem = document.createElement('div');
    const languageItem = document.createElement('div');
    const languageItemTemplate = getLanguageItemTemplate(languageNameInput.value, languageLevelSelect.value);
    languageResumeItem.innerHTML = languageItemTemplate;
    resumeLanguageDiv.append(languageResumeItem);
    languageItem.innerHTML = languageItemTemplate;
    languageItem.append(getRemovalBtn(languageResumeItem, languageItem));
    languageItem.className = 'list-element-item';
    languageItemsDiv.append(languageItem);
    languageLevelSelect.selectedIndex = 0;
    languageNameInput.value = '';
    languageAreaMsgSpan.textContent = '';
}
;
export function miscToResume(miscInput, miscItemsDiv, resumeMiscDiv, miscAreaMsgSpan) {
    if (!miscInput.value) {
        miscAreaMsgSpan.textContent = getLocalizedText('empty-field-msg');
        return;
    }
    ;
    const miscResumeItem = document.createElement('span');
    const miscItem = document.createElement('span');
    miscResumeItem.innerText = miscInput.value;
    resumeMiscDiv.append(miscResumeItem);
    miscItem.innerText = miscInput.value;
    miscItem.className = 'misc-span-item';
    miscItem.append(getRemovalBtn(miscResumeItem, miscItem));
    miscItemsDiv.append(miscItem);
    miscInput.value = '';
    miscAreaMsgSpan.textContent = '';
}
;
export function showDialog(dialogMsg) {
    const dialogElem = document.createElement('dialog');
    const dialogSpan = document.createElement('span');
    const dialogBtn = document.createElement('button');
    dialogSpan.textContent = dialogMsg;
    dialogSpan.className = 'dialog-span';
    dialogBtn.addEventListener('click', () => {
        dialogElem.close();
        dialogElem.remove();
    });
    dialogBtn.className = 'remove-item-button';
    dialogBtn.innerText = 'X';
    dialogElem.append(dialogSpan);
    dialogElem.append(dialogBtn);
    dialogElem.className = 'dialog-item';
    document.body.append(dialogElem);
    dialogElem.showModal();
}
;
export function addBulletsOnEnter(event, textAreaElem, workDescBulletSelect) { if (event.key === 'Enter')
    textAreaElem.value += (getSelectElemText(workDescBulletSelect) + ' '); }
;
export function addBulletsIfEmpty(textAreaElem, workDescBulletSelect) { if (textAreaElem.value === '')
    textAreaElem.value = getSelectElemText(workDescBulletSelect) + ' '; }
;
export function changeChkboxLabelText(checkboxElem, labelElem, keyChecked, keyUnchecked) {
    labelElem.innerText = getCheckboxText(checkboxElem, keyChecked, keyUnchecked);
}
;
export function toggleWorkDescInputs(checkboxElem, inputField, inputFieldBullets, workDescBulletSelect) {
    if (checkboxElem.checked) {
        inputField.style.display = 'none';
        inputFieldBullets.style.display = 'block';
        workDescBulletSelect.style.display = 'block';
        return;
    }
    ;
    inputField.style.display = 'block';
    inputFieldBullets.style.display = 'none';
    workDescBulletSelect.style.display = 'none';
}
;
export function swapResumeDivs(resumeDiv1, resumeDiv2) {
    const parent1 = resumeDiv1.parentNode;
    const parent2 = resumeDiv2.parentNode;
    if (parent1.style.display === 'none' && !(parent2.style.display === 'none')) {
        parent1.style.display = 'block';
        parent2.style.display = 'none';
    }
    else if (parent2.style.display === 'none' && !(parent1.style.display === 'none')) {
        parent2.style.display = 'block';
        parent1.style.display = 'none';
    }
    ;
    parent1.insertBefore(resumeDiv2, parent1.lastChild);
    parent2.insertBefore(resumeDiv1, parent2.lastChild);
}
;
export function hideEmptyResumeAreas(contentRefenceElem, targetArea) {
    const contentObserver = new MutationObserver(() => {
        if (!targetArea.parentElement) {
            console.log('hideEmptyResumeAreas(): Could not find parent node');
            return;
        }
        ;
        const targetparent = targetArea.parentElement;
        if (contentRefenceElem.children.length > 0) {
            targetparent.style.display = 'block';
            return;
        }
        ;
        targetparent.style.display = 'none';
    });
    contentObserver.observe(contentRefenceElem, { attributes: false, childList: true, subtree: false });
}
;
export function printResume(resumeContainer) {
    let resumeWindow = window.open('', '_blank', 'height=500,width=794');
    if (!resumeWindow) {
        return;
    }
    ;
    resumeWindow.document.write(`<html>
                                <head>
                                    <title>` + 'Resume - PersonName' + `</title>
                                    <link href="./css/resume.css" rel="stylesheet">
                                </head>
                                <body>
                                    ` + resumeContainer.innerHTML + `
                                </body>
                                </html>
    `);
    resumeWindow.document.close();
    resumeWindow.focus();
    resumeWindow.print();
    resumeWindow.close();
}
;
