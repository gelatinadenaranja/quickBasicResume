import { inputToResume, workExpToResume, educationToResume, languageToResume, miscToResume } from './events';

const nameInputElement : HTMLInputElement = document.getElementById('personal-name-input') as HTMLInputElement;
const nameResumeElement : HTMLSpanElement = document.getElementById('personal-name')! as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(nameInputElement, nameResumeElement)));

const emailInputElement : HTMLInputElement = document.getElementById('contact-mail-input') as HTMLInputElement;
const emailResumeElement : HTMLSpanElement = document.getElementById('contact-mail')! as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(emailInputElement, emailResumeElement)));

const contactNoInputElement : HTMLInputElement = document.getElementById('contact-number-input') as HTMLInputElement;
const contactNoResumeElement : HTMLSpanElement = document.getElementById('contact-number')! as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(contactNoInputElement, contactNoResumeElement)));

const locationInputElement : HTMLInputElement = document.getElementById('personal-location-input') as HTMLInputElement;
const locationResumeElement : HTMLSpanElement = document.getElementById('personal-location')! as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(locationInputElement, locationResumeElement)));

const companyNameInput : HTMLInputElement = document.getElementById('work-company-input') as HTMLInputElement;
const workPosInput : HTMLInputElement = document.getElementById('work-position-input') as HTMLInputElement;
const workDescInput : HTMLInputElement = document.getElementById('work-description-input') as HTMLInputElement;
const workStrMthSelect : HTMLSelectElement = document.getElementById('work-start-month-input') as HTMLSelectElement;
const workStrYrSelect : HTMLSelectElement = document.getElementById('work-start-year-input') as HTMLSelectElement;
const workEndMthSelect : HTMLSelectElement = document.getElementById('work-end-month-input') as HTMLSelectElement;
const workEndYrSelect : HTMLSelectElement = document.getElementById('work-end-year-input') as HTMLSelectElement;
const workItemsDiv : HTMLDivElement = document.getElementById('experience-items-container') as HTMLDivElement;
const resumeExpDiv : HTMLDivElement = document.getElementById('work-experience-resume-container') as HTMLDivElement;
const workExpItemsBtn : HTMLButtonElement = document.getElementById('add-experience-button') as HTMLButtonElement;
workExpItemsBtn.addEventListener('click', () => (workExpToResume(companyNameInput, workPosInput, workDescInput, workStrMthSelect, workStrYrSelect, workEndMthSelect, workEndYrSelect, workItemsDiv, resumeExpDiv)));

const educationGradeInput : HTMLInputElement = document.getElementById('education-grade-input') as HTMLInputElement;
const educationTitleInput : HTMLInputElement = document.getElementById('education-title-input') as HTMLInputElement;
const educationInstitutionInput : HTMLInputElement = document.getElementById('education-institution-input') as HTMLInputElement;
const educationStrMthSelect : HTMLSelectElement = document.getElementById('education-start-month-input') as HTMLSelectElement;
const educationStrYrSelect : HTMLSelectElement = document.getElementById('education-start-year-input') as HTMLSelectElement;
const educationEndMthSelect : HTMLSelectElement = document.getElementById('education-end-month-input') as HTMLSelectElement;
const educationEndYrSelect : HTMLSelectElement = document.getElementById('education-end-year-input') as HTMLSelectElement;
const educationItemsDiv : HTMLDivElement = document.getElementById('education-items-container') as HTMLDivElement;
const resumeEdDiv : HTMLDivElement = document.getElementById('education-resume-container') as HTMLDivElement;
const educationItemsBtn : HTMLButtonElement = document.getElementById('add-education-button') as HTMLButtonElement;
educationItemsBtn.addEventListener('click', () => (educationToResume(educationTitleInput, educationGradeInput, educationInstitutionInput, educationStrMthSelect, educationStrYrSelect, educationEndMthSelect, educationEndYrSelect, educationItemsDiv, resumeEdDiv)));

const languageNameInput : HTMLInputElement = document.getElementById('language-name-input') as HTMLInputElement;
const languageLevelSelect : HTMLSelectElement = document.getElementById('language-level-select') as HTMLSelectElement;
const languageItemsDiv : HTMLDivElement = document.getElementById('language-items-container') as HTMLDivElement;
const resumeLanguageDiv : HTMLDivElement = document.getElementById('language-resume-container') as HTMLDivElement;
const languageItemsBtn : HTMLButtonElement = document.getElementById('add-language-button') as HTMLButtonElement;
languageItemsBtn.addEventListener('click', () => (languageToResume(languageNameInput, languageLevelSelect, languageItemsDiv, resumeLanguageDiv)));

const miscSkillsInput : HTMLInputElement = document.getElementById('miscellaneous-skills-input') as HTMLInputElement;
const miscSkillsItemsDiv : HTMLDivElement = document.getElementById('miscellaneous-skills-container') as HTMLDivElement;
const resumeMiscSkillsDiv : HTMLDivElement = document.getElementById('miscellaneous-skills-resume-container') as HTMLDivElement;
const miscSkillsItemsBtn : HTMLButtonElement = document.getElementById('add-miscellaneous-skill-button') as HTMLButtonElement;
miscSkillsItemsBtn.addEventListener('click', () => (miscToResume(miscSkillsInput, miscSkillsItemsDiv, resumeMiscSkillsDiv)));

const miscQltyInput : HTMLInputElement = document.getElementById('miscellaneous-qualities-input') as HTMLInputElement;
const miscQltyItemsDiv : HTMLDivElement = document.getElementById('miscellaneous-qualities-container') as HTMLDivElement;
const resumeMiscQltyDiv : HTMLDivElement = document.getElementById('miscellaneous-qualities-resume-container') as HTMLDivElement;
const miscQltyItemsBtn : HTMLButtonElement = document.getElementById('add-miscellaneous-qualities-button') as HTMLButtonElement;
miscQltyItemsBtn.addEventListener('click', () => (miscToResume(miscQltyInput, miscQltyItemsDiv, resumeMiscQltyDiv)));


const miscIntrstInput : HTMLInputElement = document.getElementById('miscellaneous-interests-input') as HTMLInputElement;
const miscIntrstItemsDiv : HTMLDivElement = document.getElementById('miscellaneous-interests-container') as HTMLDivElement;
const resumeMiscIntrstDiv : HTMLDivElement = document.getElementById('miscellaneous-interests-resume-container') as HTMLDivElement;
const miscIntrstItemsBtn : HTMLButtonElement = document.getElementById('add-miscellaneous-interests-button') as HTMLButtonElement;
miscIntrstItemsBtn.addEventListener('click', () => (miscToResume(miscIntrstInput, miscIntrstItemsDiv, resumeMiscIntrstDiv)));
