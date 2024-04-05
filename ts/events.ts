import { getWorkItemTemplate, getEducationItemTemplate, getLanguageItemTemplate, getRemovalBtn, getSelectElemText, sortedLiAppend, disableInputElem, enableInputElem, getHTMLElemTextContent } from './utils';
import { getLocalizedText, getCheckboxText } from './localization';

export function setColorMode() : void {
    const currentHour : number = new Date().getHours();
    if(currentHour > 7 && currentHour < 19) {
        return;
    };
    document.body.classList.toggle("body-darkmode");
};

export function swapColorMode() : void {document.body.classList.toggle("body-darkmode")};

export function inputToResume(srcInput : HTMLInputElement, targetElement : HTMLSpanElement) : void {
    if(srcInput.value === '') {
        targetElement.style.display = 'none';
        return;
    };
    targetElement.style.display = 'block';
    targetElement.innerText = srcInput.value;
};

export function insertPersonalPicture(inputFileList : FileList | null, personalPictureDiv : HTMLDivElement, resumePersonalPictureDiv: HTMLDivElement) : void {
    if(!inputFileList) {
        //Show error: empty file
        return;
    };

    const personalPictureFile : File = inputFileList[0];
    const fileReader : FileReader = new FileReader();

    fileReader.onload = (ev) => {
        if(!personalPictureFile.type.startsWith('image/')) {
            //Show error: wrong file format
            return;
        };

        const imageFileURL : string | undefined = ev.target?.result?.toString();
        
        if(!imageFileURL) {
            //Show error: couldn't find file
            return;
        };
        personalPictureDiv.textContent = '';
        resumePersonalPictureDiv.textContent = '';

        const resumePersonalPictureImg : HTMLImageElement = document.createElement('img');
        const personalPictureImg : HTMLImageElement = document.createElement('img');
        const personalPictureWrap : HTMLDivElement = document.createElement('div');
        
        resumePersonalPictureImg.src = imageFileURL;
        resumePersonalPictureImg.className = 'personal-picture';
        resumePersonalPictureDiv.append(resumePersonalPictureImg);

        personalPictureImg.src = imageFileURL;
        personalPictureImg.className = 'personal-picture';
        personalPictureWrap.append(personalPictureImg);
        personalPictureWrap.append(getRemovalBtn(resumePersonalPictureImg, personalPictureWrap));
        personalPictureWrap.style.display = 'inline';
        personalPictureDiv.append(personalPictureWrap);
    };

    fileReader.readAsDataURL(personalPictureFile);
};

export function workExpToResume(companyNameInput : HTMLInputElement, workPosInput : HTMLInputElement,
                                workDescInput : HTMLInputElement, workDescTextArea : HTMLTextAreaElement,
                                workStrMthSelect : HTMLSelectElement, workStrYrSelect : HTMLSelectElement, 
                                workEndMthSelect : HTMLSelectElement, workEndYrSelect : HTMLSelectElement, workPresentCheckbox : HTMLInputElement,
                                workItemsList : HTMLOListElement, resumeExpList : HTMLOListElement,
                                workAreaMsgSpan : HTMLSpanElement) : void {
    if(!companyNameInput.value || !workPosInput.value || (workDescInput.style.display !== 'none' && !workDescInput.value) || (workDescTextArea.style.display !== 'none' && !workDescTextArea.value)) {
        //Show error: Empty inputs found
        workAreaMsgSpan.textContent = getLocalizedText('empty-field-msg');
        return;
    };

    if(!workPresentCheckbox.checked) {
        if(Number.parseInt(workStrMthSelect.value) + Number.parseInt(workStrYrSelect.value) < Number.parseInt(workEndMthSelect.value) + Number.parseInt(workEndYrSelect.value)) {
            //Show error: Invalid date range
            workAreaMsgSpan.textContent = getLocalizedText('invalid-date-msg');
            return;
        };
    };

    const workExpResumeItem : HTMLLIElement = document.createElement('li');
    const workExpItem : HTMLLIElement = document.createElement('li');
    const workDesc : string = workDescInput.style.display !== 'none' ? workDescInput.value : workDescTextArea.value;
    const workExpItemTemplate : string = workPresentCheckbox.checked ? getWorkItemTemplate(companyNameInput.value, workPosInput.value, workDesc , (getSelectElemText(workStrMthSelect) + ' / ' + getSelectElemText(workStrYrSelect)), getLocalizedText('present-date')) :
                                                                    getWorkItemTemplate(companyNameInput.value, workPosInput.value, workDesc , (getSelectElemText(workStrMthSelect) + ' / ' + getSelectElemText(workStrYrSelect)), (getSelectElemText(workEndMthSelect) + ' / ' + getSelectElemText(workEndYrSelect)));
    const workLiValue : number = workPresentCheckbox.checked ? 1 : Number.parseInt(workEndMthSelect.value) + Number.parseInt(workEndYrSelect.value);
    const removalBtn : HTMLButtonElement = getRemovalBtn(workExpResumeItem, workExpItem);
    
    workExpResumeItem.innerHTML = workExpItemTemplate;
    workExpResumeItem.value = workLiValue;
    workExpResumeItem.className = 'resume-item';
    sortedLiAppend(workExpResumeItem, resumeExpList);

    workExpItem.innerHTML = workExpItemTemplate;
    workExpItem.value = workLiValue;
    if(workPresentCheckbox.checked) {
        removalBtn.addEventListener('click', () => (enableInputElem(workPresentCheckbox)));
        workPresentCheckbox.checked = false;
        disableInputElem(workPresentCheckbox);
    };
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
};

export function educationToResume(educationTitleInput : HTMLInputElement, educationGradeSelect : HTMLSelectElement, educationInstitutionInput : HTMLInputElement, 
                                educationStrMthSelect : HTMLSelectElement, educationStrYrSelect : HTMLSelectElement, 
                                educationEndMthSelect : HTMLSelectElement, educationEndYrSelect : HTMLSelectElement, educationPresentCheckbox : HTMLInputElement,
                                educationItemsList : HTMLOListElement, resumeEdList : HTMLOListElement,
                                educationAreaMsgSpan : HTMLSpanElement) : void {
    if(!educationTitleInput.value || !educationInstitutionInput.value) {
        //Show error: Empty inputs found
        educationAreaMsgSpan.textContent = getLocalizedText('empty-field-msg');
        return;
    };
    
    if(!educationPresentCheckbox.checked) {
        if(Number.parseInt(educationStrMthSelect.value) + Number.parseInt(educationStrYrSelect.value) < Number.parseInt(educationEndMthSelect.value) + Number.parseInt(educationEndYrSelect.value)) {
            //Show error: Invalid date range
            educationAreaMsgSpan.textContent = getLocalizedText('invalid-date-msg');
            return;
        };
    };
    const educationResumeItem : HTMLLIElement = document.createElement('li');
    const educationItem : HTMLLIElement = document.createElement('li');
    const educationItemTemplate : string = educationPresentCheckbox.checked ? getEducationItemTemplate(educationTitleInput.value, getSelectElemText(educationGradeSelect), educationInstitutionInput.value, (getSelectElemText(educationStrMthSelect) + ' / ' + getSelectElemText(educationStrYrSelect)), getLocalizedText('present-date')) :
                                                                            getEducationItemTemplate(educationTitleInput.value, getSelectElemText(educationGradeSelect), educationInstitutionInput.value, (getSelectElemText(educationStrMthSelect) + ' / ' + getSelectElemText(educationStrYrSelect)), (getSelectElemText(educationEndMthSelect) + ' / ' + getSelectElemText(educationEndYrSelect)));
    const educationLiValue = educationPresentCheckbox.checked ? 1 : Number.parseInt(educationEndMthSelect.value) + Number.parseInt(educationEndYrSelect.value);
    const removalBtn : HTMLButtonElement = getRemovalBtn(educationResumeItem, educationItem);

    educationResumeItem.innerHTML = educationItemTemplate;
    educationResumeItem.value = educationLiValue;
    educationResumeItem.className = 'resume-item';
    sortedLiAppend(educationResumeItem, resumeEdList);

    educationItem.innerHTML = educationItemTemplate;
    educationItem.value = educationLiValue;
    if(educationPresentCheckbox.checked) {
        removalBtn.addEventListener('click', () => (enableInputElem(educationPresentCheckbox)));
        educationPresentCheckbox.checked = false;
        disableInputElem(educationPresentCheckbox);
    };
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
};

export function languageToResume(languageNameInput : HTMLInputElement, languageLevelSelect : HTMLSelectElement, 
                                languageItemsDiv : HTMLDivElement, resumeLanguageDiv : HTMLDivElement,
                                languageAreaMsgSpan : HTMLSpanElement) : void {
    if(!languageNameInput.value) {
        //Show error: Empty input
        languageAreaMsgSpan.textContent = getLocalizedText('empty-field-msg');
        return;
    };

    const languageResumeItem : HTMLDivElement = document.createElement('div');
    const languageItem : HTMLDivElement = document.createElement('div');
    const languageItemTemplate : string = getLanguageItemTemplate(languageNameInput.value, languageLevelSelect.value);

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
};

export function miscToResume(miscInput : HTMLInputElement, miscItemsDiv : HTMLDivElement, resumeMiscDiv : HTMLDivElement, miscAreaMsgSpan : HTMLSpanElement) : void {
    if(!miscInput.value) {
        //Show error: Empty input
        miscAreaMsgSpan.textContent = getLocalizedText('empty-field-msg');
        return;
    };

    const miscResumeItem : HTMLSpanElement = document.createElement('span');
    const miscItem : HTMLSpanElement = document.createElement('span');

    miscResumeItem.innerText = miscInput.value;
    miscResumeItem.className = 'resume-text';
    resumeMiscDiv.append(miscResumeItem);

    miscItem.innerText = miscInput.value;
    miscItem.className = 'misc-span-item';
    miscItem.append(getRemovalBtn(miscResumeItem, miscItem));
    miscItemsDiv.append(miscItem);

    miscInput.value = '';
    miscAreaMsgSpan.textContent = '';
};

export function showDialog(dialogMsg : string) : void {
    const dialogElem : HTMLDialogElement = document.createElement('dialog');
    const dialogSpan : HTMLSpanElement = document.createElement('span');
    const dialogBtn : HTMLButtonElement = document.createElement('button');

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

    dialogElem.showModal()
};

export function addBulletsOnEnter(event : KeyboardEvent, textAreaElem : HTMLTextAreaElement, workDescBulletSelect : HTMLSelectElement) : void {if(event.key === 'Enter') textAreaElem.value += (getSelectElemText(workDescBulletSelect) + ' ')};

export function addBulletsIfEmpty(textAreaElem : HTMLTextAreaElement, workDescBulletSelect : HTMLSelectElement) : void {if(textAreaElem.value === '') textAreaElem.value = getSelectElemText(workDescBulletSelect) + ' '};

export function changeChkboxLabelText(checkboxElem : HTMLInputElement, labelElem : HTMLLabelElement, keyChecked : string, keyUnchecked : string) : void {
    labelElem.innerText = getCheckboxText(checkboxElem, keyChecked, keyUnchecked);
};

export function toggleWorkDescInputs(checkboxElem : HTMLInputElement, inputField : HTMLElement, inputFieldBullets : HTMLElement, workDescBulletSelect : HTMLSelectElement) : void {
    if(checkboxElem.checked) {
        inputField.style.display = 'none';
        inputFieldBullets.style.display = 'block';
        workDescBulletSelect.style.display = 'block';
        return;
    };

    inputField.style.display = 'block';
    inputFieldBullets.style.display = 'none';
    workDescBulletSelect.style.display = 'none';
};

export function swapResumeDivs(resumeDiv1 : HTMLDivElement, resumeDiv2 : HTMLDivElement) : void {
    const parent1 : HTMLElement = resumeDiv1.parentNode as HTMLElement;
    const parent2 : HTMLElement = resumeDiv2.parentNode as HTMLElement;

    if(parent1.style.display === 'none' && !(parent2.style.display === 'none')) {
        parent1.style.display = 'block';
        parent2.style.display = 'none';
    } else if(parent2.style.display === 'none' && !(parent1.style.display === 'none')) {
        parent2.style.display = 'block';
        parent1.style.display = 'none';
    };

    parent1.insertBefore(resumeDiv2, parent1.lastChild);
    parent2.insertBefore(resumeDiv1, parent2.lastChild);
};

export function hideEmptyResumeAreas(contentRefenceElem : HTMLElement, targetArea : HTMLElement) : void {
    //Add listener to hide targetArea if contentRefenceElem has no children
    const contentObserver : MutationObserver = new MutationObserver(() => {
        if(!targetArea.parentElement) {
            //Couldn't find parent node
            console.log('hideEmptyResumeAreas(): Could not find parent node')
            return;
        };
        const targetparent : HTMLElement = targetArea.parentElement;

        if(contentRefenceElem.children.length > 0) {
            targetparent.style.display = 'block';
            return;
        };
        targetparent.style.display = 'none';
    });

    contentObserver.observe(contentRefenceElem, { attributes: false, childList: true, subtree: false });
};

export function printResume(resumeContainer : HTMLDivElement) : void {
    let resumeWindow = window.open('', '_blank', 'height=500,width=794');
    if(!resumeWindow) {
        //Show error: Print window empty
        return;
    };

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
};

interface workExpItem {
    company : string;
    position : string;
    timePeriod : string;
    description : string;
    itemValue : number;
};

interface educationItem {
    title : string;
    titleInfo : string;
    timePeriod : string;
    itemValue : number;
};

interface languageItem {
    language : string;
    languageLevel : string;
};

interface resumeData {
    personalName ? : string;
    eMail ? : string;
    phoneNumber ? : string;
    personalLocation ? : string;
    customLink ? : string;
    personalDescription ? : string;
    personalPicSrc ? : string;
    workExpParentId ? : string;
    workExp ? : workExpItem[];
    educationParentId ? : string;
    education ? : educationItem[];
    languages ? : languageItem[];
    skills ? : string[];
    qualities ? : string[];
    interests ? : string[];
};

export function saveResume() : void {
    let resumeObj : resumeData = {};

    resumeObj.personalName = getHTMLElemTextContent('personal-name');
    resumeObj.eMail = getHTMLElemTextContent('contact-mail');
    resumeObj.phoneNumber = getHTMLElemTextContent('contact-number');
    resumeObj.personalLocation = getHTMLElemTextContent('personal-location');
    resumeObj.customLink = getHTMLElemTextContent('custom-link');
    resumeObj.personalDescription = getHTMLElemTextContent('personal-description');

    const personalPicDiv : HTMLDivElement = document.getElementById('personal-picture-resume-div') as HTMLDivElement;
    if(personalPicDiv.childElementCount) {
        resumeObj.personalPicSrc = personalPicDiv.children[0].tagName === 'IMG' ? (personalPicDiv.children[0] as HTMLImageElement).src : '';
    };

    const workExpDiv : HTMLDivElement = document.getElementById('work-experience-resume-div') as HTMLDivElement;
    resumeObj.workExpParentId = workExpDiv.parentElement ? workExpDiv.parentElement.id : 'resume-section-a';

    //work-experience-resume-container
    const workExpItemList : HTMLOListElement = document.getElementById('work-experience-resume-container') as HTMLOListElement;
    if(workExpItemList.childElementCount) {
        /*for(const child in workExpItemList.children) {
            console.log(child);
        };*/






    };

    const educationDiv : HTMLDivElement = document.getElementById('education-resume-div') as HTMLDivElement;
    resumeObj.educationParentId = educationDiv.parentElement ? educationDiv.parentElement.id : 'resume-section-b';

    //education-resume-container



};