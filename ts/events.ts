import { getWorkItemTemplate, getEducationItemTemplate, getLanguageItemTemplate, getRemovalBtn } from './utils';

export function inputToResume(srcInput : HTMLInputElement, targetElement : HTMLSpanElement) : void {
    targetElement.innerText = srcInput.value;
};

export function workExpToResume(companyNameInput : HTMLInputElement, workPosInput : HTMLInputElement, workDescInput : HTMLInputElement,
                                workStrMthSelect : HTMLSelectElement, workStrYrSelect : HTMLSelectElement, 
                                workEndMthSelect : HTMLSelectElement, workEndYrSelect : HTMLSelectElement, 
                                workItemsDiv : HTMLDivElement, resumeExpDiv : HTMLDivElement) : void {
    const workExpResumeItem : HTMLDivElement = document.createElement('div');
    const workExpItem : HTMLDivElement = document.createElement('div');
    const workExpItemTemplate : string = getWorkItemTemplate(companyNameInput.value, workPosInput.value, workDescInput.value , workStrMthSelect.value, workStrYrSelect.value, workEndMthSelect.value, workEndYrSelect.value);

    workExpResumeItem.innerHTML = workExpItemTemplate;
    resumeExpDiv.append(workExpResumeItem);

    workExpItem.innerHTML = workExpItemTemplate;
    workExpItem.append(getRemovalBtn(workExpResumeItem, workExpItem));
    workItemsDiv.append(workExpItem);

    companyNameInput.value = '';
    workPosInput.value = '';
    workDescInput.value = '';
};

export function educationToResume(educationTitleInput : HTMLInputElement, educationGradeInput : HTMLInputElement, educationInstitutionInput : HTMLInputElement, 
                                educationStrMthSelect : HTMLSelectElement, educationStrYrSelect : HTMLSelectElement, 
                                educationEndMthSelect : HTMLSelectElement, educationEndYrSelect : HTMLSelectElement,
                                educationItemsDiv : HTMLDivElement, resumeEdDiv : HTMLDivElement) : void {
    const educationResumeItem : HTMLDivElement = document.createElement('div');
    const educationItem : HTMLDivElement = document.createElement('div');
    const educationItemTemplate : string = getEducationItemTemplate(educationTitleInput.value, educationGradeInput.value, educationInstitutionInput.value, educationStrMthSelect.value, educationStrYrSelect.value, educationEndMthSelect.value, educationEndYrSelect.value);

    educationResumeItem.innerHTML = educationItemTemplate;
    resumeEdDiv.append(educationResumeItem);

    educationItem.innerHTML = educationItemTemplate;
    educationItem.append(getRemovalBtn(educationResumeItem, educationItem));
    educationItemsDiv.append(educationItem);

    educationTitleInput.value = '';
    educationGradeInput.value = '';
    educationInstitutionInput.value = '';
};

export function languageToResume(languageNameInput : HTMLInputElement, languageLevelSelect : HTMLSelectElement, 
                                languageItemsDiv : HTMLDivElement, resumeLanguageDiv : HTMLDivElement) : void {
    const languageResumeItem : HTMLDivElement = document.createElement('div');
    const languageItem : HTMLDivElement = document.createElement('div');
    const languageItemTemplate : string = getLanguageItemTemplate(languageNameInput.value, languageLevelSelect.value);

    languageResumeItem.innerHTML = languageItemTemplate;
    resumeLanguageDiv.append(languageResumeItem);
    
    languageItem.innerHTML = languageItemTemplate;
    languageItem.append(getRemovalBtn(languageResumeItem, languageItem));
    languageItemsDiv.append(languageItem);

    languageNameInput.value = '';
};

export function miscToResume(miscInput : HTMLInputElement, miscItemsDiv : HTMLDivElement, resumeMiscDiv : HTMLDivElement) : void {
    const miscResumeItem : HTMLSpanElement = document.createElement('span');
    const miscItem : HTMLSpanElement = document.createElement('span');

    miscResumeItem.innerText = miscInput.value;
    resumeMiscDiv.append(miscResumeItem);

    miscItem.innerText = miscInput.value;
    miscItem.append(getRemovalBtn(miscResumeItem, miscItem));
    miscItemsDiv.append(miscItem);

    miscInput.value = '';
};

