import { getWorkItemTemplate, getEducationItemTemplate, getLanguageItemTemplate, getRemovalBtn } from './utils';
export function inputToResume(srcInput, targetElement) {
    targetElement.innerText = srcInput.value;
}
;
export function workExpToResume(companyNameInput, workPosInput, workDescInput, workStrMthSelect, workStrYrSelect, workEndMthSelect, workEndYrSelect, workItemsDiv, resumeExpDiv) {
    const workExpResumeItem = document.createElement('div');
    const workExpItem = document.createElement('div');
    const workExpItemTemplate = getWorkItemTemplate(companyNameInput.value, workPosInput.value, workDescInput.value, workStrMthSelect.value, workStrYrSelect.value, workEndMthSelect.value, workEndYrSelect.value);
    workExpResumeItem.innerHTML = workExpItemTemplate;
    resumeExpDiv.append(workExpResumeItem);
    workExpItem.innerHTML = workExpItemTemplate;
    workExpItem.append(getRemovalBtn(workExpResumeItem, workExpItem));
    workItemsDiv.append(workExpItem);
    companyNameInput.value = '';
    workPosInput.value = '';
    workDescInput.value = '';
}
;
export function educationToResume(educationTitleInput, educationGradeInput, educationInstitutionInput, educationStrMthSelect, educationStrYrSelect, educationEndMthSelect, educationEndYrSelect, educationItemsDiv, resumeEdDiv) {
    const educationResumeItem = document.createElement('div');
    const educationItem = document.createElement('div');
    const educationItemTemplate = getEducationItemTemplate(educationTitleInput.value, educationGradeInput.value, educationInstitutionInput.value, educationStrMthSelect.value, educationStrYrSelect.value, educationEndMthSelect.value, educationEndYrSelect.value);
    educationResumeItem.innerHTML = educationItemTemplate;
    resumeEdDiv.append(educationResumeItem);
    educationItem.innerHTML = educationItemTemplate;
    educationItem.append(getRemovalBtn(educationResumeItem, educationItem));
    educationItemsDiv.append(educationItem);
    educationTitleInput.value = '';
    educationGradeInput.value = '';
    educationInstitutionInput.value = '';
}
;
export function languageToResume(languageNameInput, languageLevelSelect, languageItemsDiv, resumeLanguageDiv) {
    const languageResumeItem = document.createElement('div');
    const languageItem = document.createElement('div');
    const languageItemTemplate = getLanguageItemTemplate(languageNameInput.value, languageLevelSelect.value);
    languageResumeItem.innerHTML = languageItemTemplate;
    resumeLanguageDiv.append(languageResumeItem);
    languageItem.innerHTML = languageItemTemplate;
    languageItem.append(getRemovalBtn(languageResumeItem, languageItem));
    languageItemsDiv.append(languageItem);
    languageNameInput.value = '';
}
;
export function miscToResume(miscInput, miscItemsDiv, resumeMiscDiv) {
    const miscResumeItem = document.createElement('span');
    const miscItem = document.createElement('span');
    miscResumeItem.innerText = miscInput.value;
    resumeMiscDiv.append(miscResumeItem);
    miscItem.innerText = miscInput.value;
    miscItem.append(getRemovalBtn(miscResumeItem, miscItem));
    miscItemsDiv.append(miscItem);
    miscInput.value = '';
}
;
