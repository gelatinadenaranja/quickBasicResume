import { getWorkItemTemplate, getEducationItemTemplate, getLanguageItemTemplate, getRemovalBtn, getSelectElemText, sortedLiAppend, disableInputElem, enableInputElem, getHTMLElemTextContent, setHTMLElemTextContent } from './utils';
import { getLocalizedText, getCheckboxText } from './localization';
export function setColorMode() {
    const currentHour = new Date().getHours();
    if (currentHour > 7 && currentHour < 19) {
        return;
    }
    ;
    document.body.classList.toggle("body-darkmode");
}
;
export function swapColorMode() { document.body.classList.toggle("body-darkmode"); }
;
export function inputToResume(srcInput, targetElement) {
    if (srcInput.value === '') {
        targetElement.style.display = 'none';
        return;
    }
    ;
    targetElement.style.display = 'block';
    targetElement.innerText = srcInput.value;
}
;
export function loadPersonalPicture(inputFileList) {
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
        insertPersonalPicture(imageFileURL);
    };
    fileReader.readAsDataURL(personalPictureFile);
}
;
function insertPersonalPicture(picSrc) {
    const personalPictureDiv = document.getElementById('personal-picture-div');
    const resumePersonalPictureDiv = document.getElementById('personal-picture-resume-div');
    const resumePersonalPictureImg = document.createElement('img');
    const personalPictureImg = document.createElement('img');
    const personalPictureWrap = document.createElement('div');
    personalPictureDiv.textContent = '';
    resumePersonalPictureDiv.textContent = '';
    resumePersonalPictureImg.src = picSrc;
    resumePersonalPictureImg.className = 'personal-picture';
    resumePersonalPictureDiv.append(resumePersonalPictureImg);
    personalPictureImg.src = picSrc;
    personalPictureImg.className = 'personal-picture';
    personalPictureWrap.append(personalPictureImg);
    personalPictureWrap.append(getRemovalBtn(resumePersonalPictureImg, personalPictureWrap));
    personalPictureWrap.style.display = 'inline';
    personalPictureDiv.append(personalPictureWrap);
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
    workExpResumeItem.className = 'resume-item';
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
    educationResumeItem.className = 'resume-item';
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
    languageResumeItem.className = 'resume-item';
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
    miscResumeItem.className = 'resume-text';
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
    const resumeWindow = window.open('', '_blank', 'height=500,width=794');
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
;
export function saveResume() {
    const resumeObj = {};
    resumeObj.personalName = getHTMLElemTextContent('personal-name');
    resumeObj.eMail = getHTMLElemTextContent('contact-mail');
    resumeObj.phoneNumber = getHTMLElemTextContent('contact-number');
    resumeObj.personalLocation = getHTMLElemTextContent('personal-location');
    resumeObj.customLink = getHTMLElemTextContent('custom-link');
    resumeObj.personalDescription = getHTMLElemTextContent('personal-description');
    const personalPicDiv = document.getElementById('personal-picture-resume-div');
    if (personalPicDiv.childElementCount) {
        resumeObj.personalPicSrc = personalPicDiv.children[0].tagName === 'IMG' ? personalPicDiv.children[0].src : '';
    }
    ;
    const workExpDiv = document.getElementById('work-experience-resume-div');
    resumeObj.workExpParentId = workExpDiv.parentElement ? workExpDiv.parentElement.id : 'resume-section-a';
    const workExpItemList = document.getElementById('work-experience-resume-container');
    if (workExpItemList.childElementCount) {
        resumeObj.workExp = [];
        for (const child of workExpItemList.children) {
            resumeObj.workExp.push({ value: child.getAttribute('value'), content: child.innerHTML });
        }
        ;
    }
    ;
    const educationDiv = document.getElementById('education-resume-div');
    resumeObj.educationParentId = educationDiv.parentElement ? educationDiv.parentElement.id : 'resume-section-b';
    const educationItemList = document.getElementById('education-resume-container');
    if (educationItemList.childElementCount) {
        resumeObj.education = [];
        for (const child of educationItemList.children) {
            resumeObj.education.push({ value: child.getAttribute('value'), content: child.innerHTML });
        }
        ;
    }
    ;
    const languageItemDiv = document.getElementById('language-resume-container');
    if (languageItemDiv.childElementCount) {
        resumeObj.languages = [];
        for (const child of languageItemDiv.children) {
            resumeObj.languages.push(child.innerHTML);
        }
        ;
    }
    ;
    const skillsItemDiv = document.getElementById('miscellaneous-skills-resume-container');
    if (skillsItemDiv.childElementCount) {
        resumeObj.skills = [];
        for (const child of skillsItemDiv.children) {
            resumeObj.skills.push(child.textContent);
        }
        ;
    }
    ;
    const qualitiesItemDiv = document.getElementById('miscellaneous-skills-resume-container');
    if (qualitiesItemDiv.childElementCount) {
        resumeObj.qualities = [];
        for (const child of qualitiesItemDiv.children) {
            resumeObj.qualities.push(child.textContent);
        }
        ;
    }
    ;
    const interestsItemDiv = document.getElementById('miscellaneous-skills-resume-container');
    if (interestsItemDiv.childElementCount) {
        resumeObj.interests = [];
        for (const child of interestsItemDiv.children) {
            resumeObj.interests.push(child.textContent);
        }
        ;
    }
    ;
    const anchorElem = document.createElement('a');
    const resumeObjJSON = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(resumeObj));
    anchorElem.setAttribute('href', resumeObjJSON);
    anchorElem.setAttribute('download', getLocalizedText('resume-tag') + ' - ' + resumeObj.personalName + '.json');
    document.body.appendChild(anchorElem);
    anchorElem.click();
    anchorElem.remove();
}
;
export function loadResume(inputFileList) {
    if (!inputFileList) {
        return;
    }
    ;
    const resumeDataJSON = inputFileList[0];
    const fileReader = new FileReader();
    fileReader.onload = (ev) => {
        var _a, _b;
        if (resumeDataJSON.type !== 'application/json') {
            console.log('wrong file format');
            return;
        }
        ;
        const JSONTxt = (_b = (_a = ev.target) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.toString();
        if (!JSONTxt) {
            console.log('JSON not found');
            return;
        }
        ;
        insertLoadedResumeData(JSON.parse(JSONTxt));
    };
    fileReader.readAsText(resumeDataJSON);
}
;
function insertLoadedResumeData(resumeDataObj) {
    if (resumeDataObj.personalName)
        setHTMLElemTextContent('personal-name', resumeDataObj.personalName);
    if (resumeDataObj.eMail)
        setHTMLElemTextContent('contact-mail', resumeDataObj.eMail);
    if (resumeDataObj.phoneNumber)
        setHTMLElemTextContent('contact-number', resumeDataObj.phoneNumber);
    if (resumeDataObj.personalLocation)
        setHTMLElemTextContent('personal-location', resumeDataObj.personalLocation);
    if (resumeDataObj.customLink)
        setHTMLElemTextContent('custom-link', resumeDataObj.customLink);
    if (resumeDataObj.personalDescription)
        setHTMLElemTextContent('personal-description', resumeDataObj.personalDescription);
    if (resumeDataObj.personalPicSrc)
        insertPersonalPicture(resumeDataObj.personalPicSrc);
    if (resumeDataObj.workExp) {
        const workExpParentId = resumeDataObj.workExpParentId ? resumeDataObj.workExpParentId : 'resume-section-a';
        const workExpParentDiv = document.getElementById(workExpParentId);
        const workItemsList = document.getElementById('experience-items-container');
        const workExpResumeList = document.getElementById('work-experience-resume-container');
        if (workExpParentDiv.style.display === 'none')
            workExpParentDiv.style.display = 'block';
        resumeDataObj.workExp.forEach((arrElem) => {
            const workExpResumeItem = document.createElement('li');
            const workExpItem = document.createElement('li');
            const removalBtn = getRemovalBtn(workExpResumeItem, workExpItem);
            workExpResumeItem.innerHTML = arrElem.content;
            workExpResumeItem.className = 'resume-item';
            workExpResumeItem.setAttribute('value', arrElem.value);
            sortedLiAppend(workExpResumeItem, workExpResumeList);
            workExpItem.innerHTML = arrElem.content;
            workExpItem.className = 'list-element-item';
            workExpItem.setAttribute('value', arrElem.value);
            workExpItem.append(removalBtn);
            sortedLiAppend(workExpItem, workItemsList);
            if (arrElem.value === '1') {
                const workPresentCheckbox = document.getElementById('work-present-checkbox');
                removalBtn.addEventListener('click', () => (enableInputElem(workPresentCheckbox)));
                workPresentCheckbox.checked = false;
                disableInputElem(workPresentCheckbox);
            }
            ;
        });
    }
    ;
    if (resumeDataObj.education) {
        const educationParentId = resumeDataObj.educationParentId ? resumeDataObj.educationParentId : 'resume-section-b';
        const educationParentDiv = document.getElementById(educationParentId);
        const educationItemsList = document.getElementById('education-items-container');
        const educationResumeList = document.getElementById('education-resume-container');
        if (educationParentDiv.style.display === 'none')
            educationParentDiv.style.display = 'block';
        resumeDataObj.education.forEach((arrElem) => {
            const educationResumeItem = document.createElement('li');
            const educationItem = document.createElement('li');
            const removalBtn = getRemovalBtn(educationResumeItem, educationItem);
            educationResumeItem.innerHTML = arrElem.content;
            educationResumeItem.className = 'resume-item';
            educationResumeItem.setAttribute('value', arrElem.value);
            sortedLiAppend(educationResumeItem, educationResumeList);
            educationItem.innerHTML = arrElem.content;
            educationItem.className = 'list-element-item';
            educationItem.setAttribute('value', arrElem.value);
            educationItem.append(removalBtn);
            sortedLiAppend(educationItem, educationItemsList);
            if (arrElem.value === '1') {
                const educationPresentCheckbox = document.getElementById('education-present-checkbox');
                removalBtn.addEventListener('click', () => (enableInputElem(educationPresentCheckbox)));
                educationPresentCheckbox.checked = false;
                disableInputElem(educationPresentCheckbox);
            }
            ;
        });
    }
    ;
    if (resumeDataObj.languages) {
        const languageParentDiv = document.getElementById('language-resume-div');
        const educationItemsDiv = document.getElementById('language-items-container');
        const educationResumeDiv = document.getElementById('language-resume-container');
        if (languageParentDiv.style.display === 'none')
            languageParentDiv.style.display = 'block';
        resumeDataObj.languages.forEach((arrElem) => {
            const languageResumeItem = document.createElement('div');
            const languageItem = document.createElement('div');
            languageResumeItem.innerHTML = arrElem;
            languageResumeItem.className = 'resume-item';
            educationResumeDiv.append(languageResumeItem);
            languageItem.innerHTML = arrElem;
            languageItem.className = 'list-element-item';
            languageItem.append(getRemovalBtn(languageResumeItem, languageItem));
            educationItemsDiv.append(languageItem);
        });
    }
    ;
    if (resumeDataObj.skills) {
        const miscSkillsParentDiv = document.getElementById('skills-resume-div');
        const miscSkillsItemsDiv = document.getElementById('miscellaneous-skills-container');
        const miscSkillsResumeDiv = document.getElementById('miscellaneous-skills-resume-container');
        if (miscSkillsParentDiv.style.display === 'none')
            miscSkillsParentDiv.style.display = 'block';
        resumeDataObj.skills.forEach((arrElem) => {
            const miscSkillResumeItem = document.createElement('span');
            const miscSkillItem = document.createElement('span');
            miscSkillResumeItem.textContent = arrElem;
            miscSkillResumeItem.className = 'resume-text';
            miscSkillsResumeDiv.append(miscSkillResumeItem);
            miscSkillItem.textContent = arrElem;
            miscSkillItem.className = 'misc-span-item';
            miscSkillItem.append(getRemovalBtn(miscSkillResumeItem, miscSkillItem));
            miscSkillsItemsDiv.append(miscSkillItem);
        });
    }
    ;
    if (resumeDataObj.qualities) {
        const miscQualitiesParentDiv = document.getElementById('qualities-resume-div');
        const miscQualitiesItemsDiv = document.getElementById('miscellaneous-qualities-container');
        const miscQualitiesResumeDiv = document.getElementById('miscellaneous-qualities-resume-container');
        if (miscQualitiesParentDiv.style.display === 'none')
            miscQualitiesParentDiv.style.display = 'block';
        resumeDataObj.qualities.forEach((arrElem) => {
            const miscQualityResumeItem = document.createElement('span');
            const miscQualityItem = document.createElement('span');
            miscQualityResumeItem.textContent = arrElem;
            miscQualityResumeItem.className = 'resume-text';
            miscQualitiesResumeDiv.append(miscQualityResumeItem);
            miscQualityItem.textContent = arrElem;
            miscQualityItem.className = 'misc-span-item';
            miscQualityItem.append(getRemovalBtn(miscQualityResumeItem, miscQualityItem));
            miscQualitiesItemsDiv.append(miscQualityItem);
        });
    }
    ;
    if (resumeDataObj.interests) {
        const miscInterestsParentDiv = document.getElementById('interests-resume-div');
        const miscInterestsItemsDiv = document.getElementById('miscellaneous-interests-container');
        const miscInterestsResumeDiv = document.getElementById('miscellaneous-interests-resume-container');
        if (miscInterestsParentDiv.style.display === 'none')
            miscInterestsParentDiv.style.display = 'block';
        resumeDataObj.interests.forEach((arrElem) => {
            const miscInterestResumeItem = document.createElement('span');
            const miscInterestItem = document.createElement('span');
            miscInterestResumeItem.textContent = arrElem;
            miscInterestResumeItem.className = 'resume-text';
            miscInterestsResumeDiv.append(miscInterestResumeItem);
            miscInterestItem.textContent = arrElem;
            miscInterestItem.className = 'misc-span-item';
            miscInterestItem.append(getRemovalBtn(miscInterestResumeItem, miscInterestItem));
            miscInterestsItemsDiv.append(miscInterestItem);
        });
    }
    ;
}
;
