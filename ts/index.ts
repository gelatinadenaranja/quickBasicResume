import { inputToResume } from "./events";

const nameInputElement : HTMLInputElement = document.getElementById("personal-name-input") as HTMLInputElement;
const nameResumeElement : HTMLSpanElement = document.getElementById("personal-name")! as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(nameInputElement, nameResumeElement)));

const emailInputElement : HTMLInputElement = document.getElementById("contact-mail-input") as HTMLInputElement;
const emailResumeElement : HTMLSpanElement = document.getElementById("contact-mail")! as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(emailInputElement, emailResumeElement)));

const contactNoInputElement : HTMLInputElement = document.getElementById("contact-number-input") as HTMLInputElement;
const contactNoResumeElement : HTMLSpanElement = document.getElementById("contact-number")! as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(contactNoInputElement, contactNoResumeElement)));

const locationInputElement : HTMLInputElement = document.getElementById("personal-location-input") as HTMLInputElement;
const locationResumeElement : HTMLSpanElement = document.getElementById("personal-location")! as HTMLSpanElement;
nameInputElement.addEventListener('input', () => (inputToResume(locationInputElement, locationResumeElement)));