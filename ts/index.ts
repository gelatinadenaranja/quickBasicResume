import { swapColorMode, inputToResume, loadPersonalPicture, workExpToResume, educationToResume, preventExcessItems, languageToResume, miscToResume, showDialog, addBulletsOnEnter, addBulletsIfEmpty, changeChkboxLabelText, toggleWorkDescInputs, swapResumeDivs, hideEmptyResumeAreas, changeFontColorCssVar, changeFontCssVar, printResume, saveResume, loadResume, resumeSpaceObserve } from './events';
import { loadLocalizationData, getLocalizedText, setUserLanguage, swapUserLanguage, getCheckboxText, addSelectOptions, addYearSelectOptions, addMonthSelectOptions } from './localization';
import { setColorMode, addFontOptions } from './utils'

setColorMode();
loadLocalizationData();
setUserLanguage();

const navBarLanguageSwapBtn : HTMLButtonElement = document.getElementById('nav-bar-language-button') as HTMLButtonElement;
navBarLanguageSwapBtn.addEventListener('click', () => (swapUserLanguage()));
navBarLanguageSwapBtn.addEventListener('click', () => (navBarLanguageSwapBtn.innerText = getLocalizedText('nav-bar-language-button')));
navBarLanguageSwapBtn.innerText = getLocalizedText('nav-bar-language-button');

const colorModeBtn : HTMLButtonElement = document.getElementById('color-mode-button') as HTMLButtonElement;
colorModeBtn.addEventListener('click', () => (swapColorMode()));

const navBarHeader : HTMLHeadElement = document.getElementById('nav-bar-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (navBarHeader.innerText = getLocalizedText('nav-bar-header')));
navBarHeader.innerText = getLocalizedText('nav-bar-header');

const navBarP : HTMLParagraphElement = document.getElementById('nav-bar-paragraph') as HTMLParagraphElement;
navBarLanguageSwapBtn.addEventListener('click', () => (navBarP.innerText = getLocalizedText('nav-bar-paragraph')));
navBarP.innerText = getLocalizedText('nav-bar-paragraph');

const personalInfoHeader : HTMLHeadElement = document.getElementById('personal-info-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (personalInfoHeader.innerText = getLocalizedText('personal-info-header')));
personalInfoHeader.innerText = getLocalizedText('personal-info-header');

const nameTipBtn : HTMLButtonElement = document.getElementById('personal-name-tip-button') as HTMLButtonElement;
nameTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('personal-name-tip-button'))));

const nameHeader : HTMLHeadElement = document.getElementById('personal-name-header') as HTMLHeadElement;
const nameInputElement : HTMLInputElement = document.getElementById('personal-name-input') as HTMLInputElement;
const nameResumeElement : HTMLSpanElement = document.getElementById('personal-name') as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(nameInputElement, nameResumeElement)));
navBarLanguageSwapBtn.addEventListener('click', () => (nameHeader.innerText = getLocalizedText('personal-name-header')));
nameHeader.innerText = getLocalizedText('personal-name-header');

const emailTipBtn : HTMLButtonElement = document.getElementById('contact-mail-tip-button') as HTMLButtonElement;
emailTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('contact-mail-tip-button'))));

const emailHeader : HTMLHeadElement = document.getElementById('contact-mail-header') as HTMLHeadElement;
const emailInputElement : HTMLInputElement = document.getElementById('contact-mail-input') as HTMLInputElement;
const emailResumeElement : HTMLSpanElement = document.getElementById('contact-mail') as HTMLSpanElement;
emailInputElement.addEventListener('input', () => (inputToResume(emailInputElement, emailResumeElement)));
navBarLanguageSwapBtn.addEventListener('click', () => (emailHeader.innerText = getLocalizedText('contact-mail-header')));
emailHeader.innerText = getLocalizedText('contact-mail-header');

const contactNoTipBtn : HTMLButtonElement = document.getElementById('contact-number-tip-button') as HTMLButtonElement;
contactNoTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('contact-number-tip-button'))));

const contactNoHeader : HTMLHeadElement = document.getElementById('contact-number-header') as HTMLHeadElement;
const contactNoInputElement : HTMLInputElement = document.getElementById('contact-number-input') as HTMLInputElement;
const contactNoResumeElement : HTMLSpanElement = document.getElementById('contact-number') as HTMLSpanElement;
contactNoInputElement.addEventListener('input', () => (inputToResume(contactNoInputElement, contactNoResumeElement)));
navBarLanguageSwapBtn.addEventListener('click', () => (contactNoHeader.innerText = getLocalizedText('contact-number-header')));
contactNoHeader.innerText = getLocalizedText('contact-number-header');

const locationTipBtn : HTMLButtonElement = document.getElementById('personal-location-tip-button') as HTMLButtonElement;
locationTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('personal-location-tip-button'))));

const locationHeader : HTMLHeadElement = document.getElementById('personal-location-header') as HTMLHeadElement;
const locationInputElement : HTMLInputElement = document.getElementById('personal-location-input') as HTMLInputElement;
const locationResumeElement : HTMLSpanElement = document.getElementById('personal-location') as HTMLSpanElement;
locationInputElement.addEventListener('input', () => (inputToResume(locationInputElement, locationResumeElement)));
navBarLanguageSwapBtn.addEventListener('click', () => (locationHeader.innerText = getLocalizedText('personal-location-header')));
locationHeader.innerText = getLocalizedText('personal-location-header');

const linkTipBtn : HTMLButtonElement = document.getElementById('custom-link-tip-button') as HTMLButtonElement;
linkTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('custom-link-tip-button'))));

const linkHeader : HTMLHeadElement = document.getElementById('custom-link-header') as HTMLHeadElement;
const linkInputElement : HTMLInputElement = document.getElementById('custom-link-input') as HTMLInputElement;
const linkResumeElement : HTMLSpanElement = document.getElementById('custom-link') as HTMLSpanElement;
linkInputElement.addEventListener('input', () => (inputToResume(linkInputElement, linkResumeElement)));
navBarLanguageSwapBtn.addEventListener('click', () => (linkHeader.innerText = getLocalizedText('custom-link-header')));
linkHeader.innerText = getLocalizedText('custom-link-header');

const personalDescriptionTipBtn : HTMLButtonElement = document.getElementById('personal-description-tip-button') as HTMLButtonElement;
personalDescriptionTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('personal-description-tip-button'))));

const personalDescriptionHeader : HTMLHeadElement = document.getElementById('personal-description-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (personalDescriptionHeader.innerText = getLocalizedText('personal-description-header')));
personalDescriptionHeader.innerText = getLocalizedText('personal-description-header');

const personalDescriptionInput : HTMLInputElement = document.getElementById('personal-description-input') as HTMLInputElement;
const personalDescriptionResumeElement : HTMLParagraphElement = document.getElementById('personal-description') as HTMLParagraphElement;
personalDescriptionInput.addEventListener('input', () => (inputToResume(personalDescriptionInput, personalDescriptionResumeElement)));

const personalPictureTipBtn : HTMLButtonElement = document.getElementById('personal-picture-tip-button') as HTMLButtonElement;
personalPictureTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('personal-picture-tip-button'))));

const personalPictureHeader : HTMLHeadElement = document.getElementById('personal-picture-header') as HTMLHeadElement;
const personalPictureInput : HTMLInputElement = document.getElementById('personal-picture-input') as HTMLInputElement;
const personalPictureLabel : HTMLLabelElement = document.getElementById('personal-picture-label') as HTMLLabelElement;
personalPictureInput.addEventListener('change', () => (loadPersonalPicture(personalPictureInput.files)));
navBarLanguageSwapBtn.addEventListener('click', () => (personalPictureLabel.innerText = getLocalizedText('personal-picture-label')));
navBarLanguageSwapBtn.addEventListener('click', () => (personalPictureHeader.innerText = getLocalizedText('personal-picture-header')));
personalPictureHeader.innerText = getLocalizedText('personal-picture-header');
personalPictureLabel.innerText = getLocalizedText('personal-picture-label');

const workExpHeader : HTMLHeadElement = document.getElementById('work-experience-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (workExpHeader.innerText = getLocalizedText('work-experience-header')));
workExpHeader.innerText = getLocalizedText('work-experience-header');

const companyNameHeader : HTMLHeadElement = document.getElementById('work-company-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (companyNameHeader.innerText = getLocalizedText('work-company-header')));
companyNameHeader.innerText = getLocalizedText('work-company-header');

const companyNameTipBtn : HTMLButtonElement = document.getElementById('work-company-tip-button') as HTMLButtonElement;
companyNameTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('work-company-tip-button'))));

const workPosHeader : HTMLHeadElement = document.getElementById('work-position-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (workPosHeader.innerText = getLocalizedText('work-position-header')));
workPosHeader.innerText = getLocalizedText('work-position-header');

const workPosTipBtn : HTMLButtonElement = document.getElementById('work-position-tip-button') as HTMLButtonElement;
workPosTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('work-position-tip-button'))));

const workStrHeader : HTMLHeadElement = document.getElementById('work-start-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (workStrHeader.innerText = getLocalizedText('start-date-header')));
workStrHeader.innerText = getLocalizedText('start-date-header');

const workEndHeader : HTMLHeadElement = document.getElementById('work-end-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (workEndHeader.innerText = getLocalizedText('end-date-header')));
workEndHeader.innerText = getLocalizedText('end-date-header');

const workDescBulletHeader : HTMLHeadElement = document.getElementById('work-experience-bullets-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (workDescBulletHeader.innerText = getLocalizedText('work-experience-bullets-header')));
workDescBulletHeader.innerText = getLocalizedText('work-experience-bullets-header');

const workDescBulletTipBtn : HTMLButtonElement = document.getElementById('work-experience-bullets-tip-button') as HTMLButtonElement;
workDescBulletTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('work-experience-bullets-tip-button'))));

const workDescHeader : HTMLHeadElement = document.getElementById('work-description-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (workDescHeader.innerText = getLocalizedText('work-description-header')));
workDescHeader.innerText = getLocalizedText('work-description-header');

const workDescTipBtn : HTMLButtonElement = document.getElementById('work-description-tip-button') as HTMLButtonElement;
workDescTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('work-description-tip-button'))));

const companyNameInput : HTMLInputElement = document.getElementById('work-company-input') as HTMLInputElement;
const workPosInput : HTMLInputElement = document.getElementById('work-position-input') as HTMLInputElement;
const workDescInput : HTMLInputElement = document.getElementById('work-description-input') as HTMLInputElement;
const workDescTextArea : HTMLTextAreaElement = document.getElementById('work-description-text-area') as HTMLTextAreaElement;
const workDescBulletToggleCheckbox : HTMLInputElement = document.getElementById('work-experience-bullets-checkbox') as HTMLInputElement;
const workDescBulletToggleCheckboxLabel : HTMLLabelElement = document.getElementById('work-experience-bullets-checkbox-label') as HTMLLabelElement;
const workDescBulletSelect : HTMLSelectElement = document.getElementById('work-experience-bullets-select') as HTMLSelectElement;
const workStrMthSelect : HTMLSelectElement = document.getElementById('work-start-month-input') as HTMLSelectElement;
const workStrYrSelect : HTMLSelectElement = document.getElementById('work-start-year-input') as HTMLSelectElement;
const workEndMthSelect : HTMLSelectElement = document.getElementById('work-end-month-input') as HTMLSelectElement;
const workEndYrSelect : HTMLSelectElement = document.getElementById('work-end-year-input') as HTMLSelectElement;
const workPresentCheckbox : HTMLInputElement = document.getElementById('work-present-checkbox') as HTMLInputElement;
const workPresentCheckboxLabel : HTMLLabelElement = document.getElementById('work-present-checkbox-label') as HTMLLabelElement;
const workItemsList : HTMLOListElement = document.getElementById('experience-items-container') as HTMLOListElement;
const resumeExpList : HTMLOListElement = document.getElementById('work-experience-resume-container') as HTMLOListElement;
const workExpItemsBtn : HTMLButtonElement = document.getElementById('add-experience-button') as HTMLButtonElement;
const workAreaMsgSpan : HTMLSpanElement = document.getElementById('work-experience-message-span') as HTMLSpanElement;
workDescBulletToggleCheckbox.addEventListener('click', () => (toggleWorkDescInputs(workDescBulletToggleCheckbox, workDescInput, workDescTextArea, workDescBulletSelect)));
workDescBulletToggleCheckbox.addEventListener('click', () => (changeChkboxLabelText(workDescBulletToggleCheckbox, workDescBulletToggleCheckboxLabel, 'work-experience-bullets-label-checked', 'work-experience-bullets-label')));
workDescTextArea.addEventListener('keyup', (event : KeyboardEvent) => (addBulletsOnEnter(event, workDescTextArea, workDescBulletSelect)));
workDescTextArea.addEventListener('focus', () => (addBulletsIfEmpty(workDescTextArea, workDescBulletSelect)));
workExpItemsBtn.addEventListener('click', () => (workExpToResume(companyNameInput, workPosInput, workDescInput, workDescTextArea, workStrMthSelect, workStrYrSelect, workEndMthSelect, workEndYrSelect, workPresentCheckbox, workItemsList, resumeExpList, workAreaMsgSpan)));
preventExcessItems(workItemsList, workExpItemsBtn, 10, 'max-items-msg', resumeExpList);
addMonthSelectOptions(workStrMthSelect);
addMonthSelectOptions(workEndMthSelect);
addYearSelectOptions(workStrYrSelect);
addYearSelectOptions(workEndYrSelect);
navBarLanguageSwapBtn.addEventListener('click', () => (addMonthSelectOptions(workStrMthSelect)));
navBarLanguageSwapBtn.addEventListener('click', () => (addMonthSelectOptions(workEndMthSelect)));
navBarLanguageSwapBtn.addEventListener('click', () => (workDescBulletToggleCheckboxLabel.innerText = getCheckboxText(workDescBulletToggleCheckbox, 'work-experience-bullets-label-checked', 'work-experience-bullets-label')));
workDescBulletToggleCheckboxLabel.innerText = getCheckboxText(workDescBulletToggleCheckbox, 'work-experience-bullets-label-checked', 'work-experience-bullets-label');
navBarLanguageSwapBtn.addEventListener('click', () => (workPresentCheckboxLabel.innerText = getLocalizedText('present-date')));
workPresentCheckboxLabel.innerText = getLocalizedText('present-date');
navBarLanguageSwapBtn.addEventListener('click', () => (workExpItemsBtn.innerText = getLocalizedText('add-experience-button')));
workExpItemsBtn.innerText = getLocalizedText('add-experience-button');

const educationHeader : HTMLHeadElement = document.getElementById('education-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (educationHeader.innerText = getLocalizedText('education-header')));
educationHeader.innerText = getLocalizedText('education-header');

const educationGradeHeader : HTMLHeadElement = document.getElementById('education-grade-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (educationGradeHeader.innerText = getLocalizedText('education-grade-header')));
educationGradeHeader.innerText = getLocalizedText('education-grade-header');

const educationTitleHeader : HTMLHeadElement = document.getElementById('education-title-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (educationTitleHeader.innerText = getLocalizedText('education-title-header')));
educationTitleHeader.innerText = getLocalizedText('education-title-header');

const educationInstitutionHeader : HTMLHeadElement = document.getElementById('education-institution-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (educationInstitutionHeader.innerText = getLocalizedText('education-institution-header')));
educationInstitutionHeader.innerText = getLocalizedText('education-institution-header');

const educationStrHeader : HTMLHeadElement = document.getElementById('education-start-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (educationStrHeader.innerText = getLocalizedText('start-date-header')));
educationStrHeader.innerText = getLocalizedText('start-date-header');

const educationEndHeader : HTMLHeadElement = document.getElementById('education-end-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (educationEndHeader.innerText = getLocalizedText('end-date-header')));
educationEndHeader.innerText = getLocalizedText('end-date-header');

const educationGradeSelect : HTMLSelectElement = document.getElementById('education-grade-select') as HTMLSelectElement;
const educationTitleInput : HTMLInputElement = document.getElementById('education-title-input') as HTMLInputElement;
const educationInstitutionInput : HTMLInputElement = document.getElementById('education-institution-input') as HTMLInputElement;
const educationStrMthSelect : HTMLSelectElement = document.getElementById('education-start-month-input') as HTMLSelectElement;
const educationStrYrSelect : HTMLSelectElement = document.getElementById('education-start-year-input') as HTMLSelectElement;
const educationEndMthSelect : HTMLSelectElement = document.getElementById('education-end-month-input') as HTMLSelectElement;
const educationEndYrSelect : HTMLSelectElement = document.getElementById('education-end-year-input') as HTMLSelectElement;
const educationPresentCheckbox : HTMLInputElement = document.getElementById('education-present-checkbox') as HTMLInputElement;
const educationPresentCheckboxLabel : HTMLLabelElement = document.getElementById('education-present-checkbox-label') as HTMLLabelElement;
const educationItemsList : HTMLOListElement = document.getElementById('education-items-container') as HTMLOListElement;
const resumeEdList : HTMLOListElement = document.getElementById('education-resume-container') as HTMLOListElement;
const educationItemsBtn : HTMLButtonElement = document.getElementById('add-education-button') as HTMLButtonElement;
const educationAreaMsgSpan : HTMLSpanElement = document.getElementById('education-message-span') as HTMLSpanElement;
educationItemsBtn.addEventListener('click', () => (educationToResume(educationTitleInput, educationGradeSelect, educationInstitutionInput, educationStrMthSelect, educationStrYrSelect, educationEndMthSelect, educationEndYrSelect, educationPresentCheckbox, educationItemsList, resumeEdList, educationAreaMsgSpan)));
preventExcessItems(educationItemsList, educationItemsBtn, 10, 'max-items-msg', resumeEdList);
addSelectOptions(educationGradeSelect, 'education-grade-select-options');
addMonthSelectOptions(educationStrMthSelect);
addMonthSelectOptions(educationEndMthSelect);
addYearSelectOptions(educationStrYrSelect);
addYearSelectOptions(educationEndYrSelect);
navBarLanguageSwapBtn.addEventListener('click', () => (addSelectOptions(educationGradeSelect, 'education-grade-select-options')));
navBarLanguageSwapBtn.addEventListener('click', () => (addMonthSelectOptions(educationStrMthSelect)));
navBarLanguageSwapBtn.addEventListener('click', () => (addMonthSelectOptions(educationEndMthSelect)));
navBarLanguageSwapBtn.addEventListener('click', () => (educationPresentCheckboxLabel.innerText = getLocalizedText('present-date')));
educationPresentCheckboxLabel.innerText = getLocalizedText('present-date');
navBarLanguageSwapBtn.addEventListener('click', () => (educationItemsBtn.innerText = getLocalizedText('add-education-button')));
educationItemsBtn.innerText = getLocalizedText('add-education-button');

const educationOrderTipBtn : HTMLButtonElement = document.getElementById('education-order-tip-button') as HTMLButtonElement;
educationOrderTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('education-order-tip-button'))));

const educationOrderCheckbox : HTMLInputElement = document.getElementById('education-order-checkbox') as HTMLInputElement;
const educationOrderCheckboxLabel : HTMLLabelElement = document.getElementById('education-order-checkbox-label') as HTMLLabelElement;
const workExpResumeDiv : HTMLDivElement = document.getElementById('work-experience-resume-div') as HTMLDivElement;
const educationResumeDiv : HTMLDivElement = document.getElementById('education-resume-div') as HTMLDivElement;
educationOrderCheckbox.addEventListener('click', () => (swapResumeDivs(workExpResumeDiv, educationResumeDiv)));
educationOrderCheckbox.addEventListener('click', () => (changeChkboxLabelText(educationOrderCheckbox, educationOrderCheckboxLabel, 'prioritize-experience', 'prioritize-education')));
hideEmptyResumeAreas(workItemsList, workExpResumeDiv);
hideEmptyResumeAreas(educationItemsList, educationResumeDiv);
navBarLanguageSwapBtn.addEventListener('click', () => (educationOrderCheckboxLabel.innerText = getCheckboxText(educationOrderCheckbox, 'prioritize-experience', 'prioritize-education')));
educationOrderCheckboxLabel.innerText = getCheckboxText(educationOrderCheckbox, 'prioritize-experience', 'prioritize-education');

const languageHeader : HTMLHeadElement = document.getElementById('language-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (languageHeader.innerText = getLocalizedText('language-header')));
languageHeader.innerText = getLocalizedText('language-header');

const languageTipBtn : HTMLButtonElement = document.getElementById('language-tip-button') as HTMLButtonElement;
languageTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('language-tip-button'))));

const languageNameHeader : HTMLHeadElement = document.getElementById('language-name-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (languageNameHeader.innerText = getLocalizedText('language-name-header')));
languageNameHeader.innerText = getLocalizedText('language-name-header');

const languageLevelHeader : HTMLHeadElement = document.getElementById('language-level-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (languageLevelHeader.innerText = getLocalizedText('language-level-header')));
languageLevelHeader.innerText = getLocalizedText('language-level-header');

const languageNameInput : HTMLInputElement = document.getElementById('language-name-input') as HTMLInputElement;
const languageLevelSelect : HTMLSelectElement = document.getElementById('language-level-select') as HTMLSelectElement;
const languageItemsDiv : HTMLDivElement = document.getElementById('language-items-container') as HTMLDivElement;
const resumeLanguageDiv : HTMLDivElement = document.getElementById('language-resume-container') as HTMLDivElement;
const languageItemsBtn : HTMLButtonElement = document.getElementById('add-language-button') as HTMLButtonElement;
const languageAreaMsgSpan : HTMLSpanElement = document.getElementById('language-message-span') as HTMLSpanElement;
addSelectOptions(languageLevelSelect, 'language-level-select-options');
hideEmptyResumeAreas(languageItemsDiv, resumeLanguageDiv);
languageItemsBtn.addEventListener('click', () => (languageToResume(languageNameInput, languageLevelSelect, languageItemsDiv, resumeLanguageDiv, languageAreaMsgSpan)));
navBarLanguageSwapBtn.addEventListener('click', () => (addSelectOptions(languageLevelSelect, 'language-level-select-options')));
navBarLanguageSwapBtn.addEventListener('click', () => (languageItemsBtn.innerText = getLocalizedText('add-language-button')));
languageItemsBtn.innerText = getLocalizedText('add-language-button');

const miscHeader : HTMLHeadElement = document.getElementById('miscellaneous-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (miscHeader.innerText = getLocalizedText('miscellaneous-header')));
miscHeader.innerText = getLocalizedText('miscellaneous-header');

const miscSkillsHeader : HTMLHeadElement = document.getElementById('miscellaneous-skills-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (miscSkillsHeader.innerText = getLocalizedText('miscellaneous-skills-header')));
miscSkillsHeader.innerText = getLocalizedText('miscellaneous-skills-header');

const miscSkillsTipBtn : HTMLButtonElement = document.getElementById('miscellaneous-skills-tip-button') as HTMLButtonElement;
miscSkillsTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('miscellaneous-skills-tip-button'))));

const miscSkillsInput : HTMLInputElement = document.getElementById('miscellaneous-skills-input') as HTMLInputElement;
const miscSkillsItemsDiv : HTMLDivElement = document.getElementById('miscellaneous-skills-container') as HTMLDivElement;
const resumeMiscSkillsDiv : HTMLDivElement = document.getElementById('miscellaneous-skills-resume-container') as HTMLDivElement;
const miscSkillsItemsBtn : HTMLButtonElement = document.getElementById('add-miscellaneous-skill-button') as HTMLButtonElement;
const miscSkillsAreaMsgSpan : HTMLSpanElement = document.getElementById('miscellaneous-skills-message-span') as HTMLSpanElement;
miscSkillsItemsBtn.addEventListener('click', () => (miscToResume(miscSkillsInput, miscSkillsItemsDiv, resumeMiscSkillsDiv, miscSkillsAreaMsgSpan)));
hideEmptyResumeAreas(miscSkillsItemsDiv, resumeMiscSkillsDiv);
navBarLanguageSwapBtn.addEventListener('click', () => (miscSkillsItemsBtn.innerText = getLocalizedText('add-miscellaneous-skill-button')));
miscSkillsItemsBtn.innerText = getLocalizedText('add-miscellaneous-skill-button');

const miscQltyHeader : HTMLHeadElement = document.getElementById('miscellaneous-qualities-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (miscQltyHeader.innerText = getLocalizedText('miscellaneous-qualities-header')));
miscQltyHeader.innerText = getLocalizedText('miscellaneous-qualities-header');

const miscQltyTipBtn : HTMLButtonElement = document.getElementById('miscellaneous-qualities-tip-button') as HTMLButtonElement;
miscQltyTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('miscellaneous-qualities-tip-button'))));

const miscQltyInput : HTMLInputElement = document.getElementById('miscellaneous-qualities-input') as HTMLInputElement;
const miscQltyItemsDiv : HTMLDivElement = document.getElementById('miscellaneous-qualities-container') as HTMLDivElement;
const resumeMiscQltyDiv : HTMLDivElement = document.getElementById('miscellaneous-qualities-resume-container') as HTMLDivElement;
const miscQltyItemsBtn : HTMLButtonElement = document.getElementById('add-miscellaneous-qualities-button') as HTMLButtonElement;
const miscQltyAreaMsgSpan : HTMLSpanElement = document.getElementById('miscellaneous-qualities-message-span') as HTMLSpanElement;
miscQltyItemsBtn.addEventListener('click', () => (miscToResume(miscQltyInput, miscQltyItemsDiv, resumeMiscQltyDiv, miscQltyAreaMsgSpan)));
hideEmptyResumeAreas(miscQltyItemsDiv, resumeMiscQltyDiv);
navBarLanguageSwapBtn.addEventListener('click', () => (miscQltyItemsBtn.innerText = getLocalizedText('add-miscellaneous-qualities-button')));
miscQltyItemsBtn.innerText = getLocalizedText('add-miscellaneous-qualities-button');

const miscIntrstHeader : HTMLHeadElement = document.getElementById('miscellaneous-interests-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (miscIntrstHeader.innerText = getLocalizedText('miscellaneous-interests-header')));
miscIntrstHeader.innerText = getLocalizedText('miscellaneous-interests-header');

const miscIntrstTipBtn : HTMLButtonElement = document.getElementById('miscellaneous-interests-tip-button') as HTMLButtonElement;
miscIntrstTipBtn.addEventListener('click', () => (showDialog(getLocalizedText('miscellaneous-interests-tip-button'))));

const miscIntrstInput : HTMLInputElement = document.getElementById('miscellaneous-interests-input') as HTMLInputElement;
const miscIntrstItemsDiv : HTMLDivElement = document.getElementById('miscellaneous-interests-container') as HTMLDivElement;
const resumeMiscIntrstDiv : HTMLDivElement = document.getElementById('miscellaneous-interests-resume-container') as HTMLDivElement;
const miscIntrstItemsBtn : HTMLButtonElement = document.getElementById('add-miscellaneous-interests-button') as HTMLButtonElement;
const miscIntrstAreaMsgSpan : HTMLSpanElement = document.getElementById('miscellaneous-interests-message-span') as HTMLSpanElement;
miscIntrstItemsBtn.addEventListener('click', () => (miscToResume(miscIntrstInput, miscIntrstItemsDiv, resumeMiscIntrstDiv, miscIntrstAreaMsgSpan)));
hideEmptyResumeAreas(miscIntrstItemsDiv, resumeMiscIntrstDiv);
navBarLanguageSwapBtn.addEventListener('click', () => (miscIntrstItemsBtn.innerText = getLocalizedText('add-miscellaneous-interests-button')));
miscIntrstItemsBtn.innerText = getLocalizedText('add-miscellaneous-interests-button');

const workExpResumeHeader : HTMLHeadElement = document.getElementById('work-experience-resume-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (workExpResumeHeader.innerText = getLocalizedText('work-experience-header')));
workExpResumeHeader.innerText = getLocalizedText('work-experience-header');

const educationResumeHeader : HTMLHeadElement = document.getElementById('education-resume-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (educationResumeHeader.innerText = getLocalizedText('education-header')));
educationResumeHeader.innerText = getLocalizedText('education-header');

const languageResumeHeader : HTMLHeadElement = document.getElementById('language-resume-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (languageResumeHeader.innerText = getLocalizedText('language-header')));
languageResumeHeader.innerText = getLocalizedText('language-header');

const miscSkillsResumeHeader : HTMLHeadElement = document.getElementById('miscellaneous-skills-resume-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (miscSkillsResumeHeader.innerText = getLocalizedText('miscellaneous-skills-header')));
miscSkillsResumeHeader.innerText = getLocalizedText('miscellaneous-skills-header');

const miscQltyResumeHeader : HTMLHeadElement = document.getElementById('miscellaneous-qualities-resume-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (miscQltyResumeHeader.innerText = getLocalizedText('miscellaneous-qualities-header')));
miscQltyResumeHeader.innerText = getLocalizedText('miscellaneous-qualities-header');

const miscIntrstResumeHeader : HTMLHeadElement = document.getElementById('miscellaneous-interests-resume-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (miscIntrstResumeHeader.innerText = getLocalizedText('miscellaneous-interests-header')));
miscIntrstResumeHeader.innerText = getLocalizedText('miscellaneous-interests-header');

const printResumeBtn : HTMLButtonElement = document.getElementById('print-resume-button') as HTMLButtonElement;
const resumeContainer : HTMLDivElement = document.getElementById('resume-div') as HTMLDivElement;
printResumeBtn.addEventListener('click', () => (printResume(resumeContainer)));
navBarLanguageSwapBtn.addEventListener('click', () => (printResumeBtn.innerText = getLocalizedText('print-resume-button')));
printResumeBtn.innerText = getLocalizedText('print-resume-button');

const saveResumeBtn : HTMLButtonElement = document.getElementById('save-resume-button') as HTMLButtonElement;
saveResumeBtn.addEventListener('click', () => (saveResume()));
navBarLanguageSwapBtn.addEventListener('click', () => (saveResumeBtn.innerText = getLocalizedText('save-resume-button')));
saveResumeBtn.innerText = getLocalizedText('save-resume-button');

const loadResumeInput : HTMLInputElement = document.getElementById('load-resume-input') as HTMLInputElement;
const loadResumeLabel : HTMLLabelElement = document.getElementById('load-resume-label') as HTMLLabelElement;
loadResumeLabel.addEventListener('click', () => (showDialog(getLocalizedText('import-msg'))));
loadResumeInput.addEventListener('change', () => loadResume(loadResumeInput.files));
navBarLanguageSwapBtn.addEventListener('click', () => (loadResumeLabel.innerText = getLocalizedText('load-resume-button')));
loadResumeLabel.innerText = getLocalizedText('load-resume-button');

resumeSpaceObserve(); 

const customizationHeader : HTMLHeadElement = document.getElementById('customization-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (customizationHeader.innerText = getLocalizedText('customization-header')));
customizationHeader.innerText = getLocalizedText('customization-header');

const customHeaderColorHeader : HTMLHeadElement = document.getElementById('custom-header-color-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (customHeaderColorHeader.innerText = getLocalizedText('custom-header-color-header')));
customHeaderColorHeader.innerText = getLocalizedText('custom-header-color-header');

const customHeaderColorSelect : HTMLSelectElement = document.getElementById('custom-header-color-select') as HTMLSelectElement;
customHeaderColorSelect.addEventListener('change', () => (changeFontColorCssVar(customHeaderColorSelect, '--resume-headers-color')));
navBarLanguageSwapBtn.addEventListener('click', () => (addSelectOptions(customHeaderColorSelect, 'custom-header-color-select-options')));
addSelectOptions(customHeaderColorSelect, 'custom-header-color-select-options');

const customFontSizeHeader : HTMLHeadElement = document.getElementById('custom-font-size-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (customFontSizeHeader.innerText = getLocalizedText('custom-font-size-header')));
customFontSizeHeader.innerText = getLocalizedText('custom-font-size-header');

const customFontSizeSelect : HTMLSelectElement = document.getElementById('custom-font-size') as HTMLSelectElement;
customFontSizeSelect.addEventListener('change', () => (changeFontCssVar(customFontSizeSelect, '--resume-font-size')));

const customNameFontHeader : HTMLHeadElement = document.getElementById('custom-name-font-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (customNameFontHeader.innerText = getLocalizedText('custom-name-font-header')));
customNameFontHeader.innerText = getLocalizedText('custom-name-font-header');

const customNameFontSelect : HTMLSelectElement = document.getElementById('custom-name-font') as HTMLSelectElement;
customNameFontSelect.addEventListener('change', () => (changeFontCssVar(customNameFontSelect, '--resume-name-font')));
addFontOptions(customNameFontSelect);

const customSectionHeaderFontHeader : HTMLHeadElement = document.getElementById('custom-section-header-font-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (customSectionHeaderFontHeader.innerText = getLocalizedText('custom-section-header-font-header')));
customSectionHeaderFontHeader.innerText = getLocalizedText('custom-section-header-font-header');

const customSectionHeaderFontSelect : HTMLSelectElement = document.getElementById('custom-section-header-font') as HTMLSelectElement;
customSectionHeaderFontSelect.addEventListener('change', () => (changeFontCssVar(customSectionHeaderFontSelect, '--resume-section-header-font')));
addFontOptions(customSectionHeaderFontSelect);

const customHeaderFontHeader : HTMLHeadElement = document.getElementById('custom-header-font-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (customHeaderFontHeader.innerText = getLocalizedText('custom-header-font-header')));
customHeaderFontHeader.innerText = getLocalizedText('custom-header-font-header');

const customHeaderFontSelect : HTMLSelectElement = document.getElementById('custom-header-font') as HTMLSelectElement;
customHeaderFontSelect.addEventListener('change', () => (changeFontCssVar(customHeaderFontSelect, '--resume-big-header-font')));
addFontOptions(customHeaderFontSelect);

const customTextFontHeader : HTMLHeadElement = document.getElementById('custom-text-font-header') as HTMLHeadElement;
navBarLanguageSwapBtn.addEventListener('click', () => (customTextFontHeader.innerText = getLocalizedText('custom-text-font-header')));
customTextFontHeader.innerText = getLocalizedText('custom-text-font-header');

const customTextFontSelect : HTMLSelectElement = document.getElementById('custom-text-font') as HTMLSelectElement;
customTextFontSelect.addEventListener('change', () => (changeFontCssVar(customTextFontSelect, '--resume-text-font')));
addFontOptions(customTextFontSelect);
