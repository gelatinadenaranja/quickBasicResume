export function inputToResume(srcInput : HTMLInputElement, targetElement : HTMLSpanElement) : void {
    targetElement.innerText = srcInput.value;
};