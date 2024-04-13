export function setColorMode() : void {
    const currentHour : number = new Date().getHours();
    if(currentHour > 7 && currentHour < 19) {
        return;
    };
    document.body.classList.toggle("body-darkmode");
};

interface fontItem {
    fontName : string;
    fontValue : string;
};

function getFontsArray() : fontItem[] {
    return [
        {fontName : 'Times New Roman', fontValue : '"Times New Roman", serif'},
        {fontName : 'Georgia', fontValue : 'Georgia, serif'},
        {fontName : 'Verdana', fontValue : 'Verdana, sans-serif'},
        {fontName : 'Tahoma', fontValue : 'Tahoma, sans-serif'},
        {fontName : 'Arial', fontValue : 'Arial, sans-serif'},
        {fontName : 'Courier New', fontValue : '"Courier New", monospace'}
    ];
}

export function addFontOptions(selectElem : HTMLSelectElement) : void {
    const fontsArray : fontItem[] = getFontsArray();

    fontsArray.forEach((item) => {
        const optionElem : HTMLOptionElement = document.createElement('option');
        optionElem.textContent = item.fontName;
        optionElem.value = item.fontValue;
        selectElem.append(optionElem);
    });
};

export function getCssVarValue(cssVar : string) : string {return getComputedStyle(document.body).getPropertyValue(cssVar)};

export function setCssVarValue(cssVar : string, cssVarValue : string) : void {document.documentElement.style.setProperty(cssVar, cssVarValue)};

export function getWorkItemTemplate(companyName : string, workPos : string, workDesc : string, 
                                    workStr : string, workEnd : string) : string {
    const workItemTemplate : string = `
    <div class="flex-container">
        <span class="big-header">` + companyName + `</span>
        <span class="big-header">` + workStr + ` - ` + workEnd + `</span>
    </div>

    <h1 class="small-header">` + workPos + `</h1>

    <span class="resume-text">` + workDesc + `</span>`;

    return workItemTemplate;
};

export function getEducationItemTemplate(educationTitle : string, educationGrade : string, educationInstitution : string, 
                                        educationStr : string, educationEnd : string) : string {
    const educationItemTemplate : string = `
    <h1 class="big-header">` + educationTitle + `</h1>
    
    <div class="flex-container">
        <span class="small-header">` + educationGrade + ` - ` + educationInstitution + `</span>
        <span class="small-header">` + educationStr + ` - ` + educationEnd + `</span>
    </div>`;

    return educationItemTemplate;
};

export function getLanguageItemTemplate(languageName : string, languageLevel : string) : string {
    const languageItemTemplate : string = `
    <div>
        <span class="small-header">` + languageName + ` : </span>
        <span class="small-header">` + languageLevel +`</span>
    </div>`;

    return languageItemTemplate;
};

export function getRemovalBtn(resumeTargetItem : HTMLElement, targetItem : HTMLElement) : HTMLButtonElement {
    const removalBtn : HTMLButtonElement = document.createElement('button');
    removalBtn.innerText = 'X';
    removalBtn.className = 'remove-item-button';
    removalBtn.addEventListener('click', (() => {
        resumeTargetItem.remove();
        targetItem.remove();
    }));

    return removalBtn;
};

export function getSelectElemText(selectElem : HTMLSelectElement) : string {return selectElem.options[selectElem.selectedIndex].text};

export function disableInputElem(inputElem : HTMLInputElement) : void {inputElem.disabled = true;};

export function enableInputElem(inputElem : HTMLInputElement) : void {inputElem.disabled = false;};

export function sortedLiAppend(LiElem : HTMLLIElement, OlElem : HTMLOListElement) : void {
    const OlElemChildren : HTMLCollection = OlElem.children;

    if(OlElemChildren.length === 0) {
        OlElem.append(LiElem);
        return;
    };

    let i : number = 0;

    if(LiElem.value < getHTMLElemValue(OlElemChildren[i])) {
        OlElem.insertBefore(LiElem, OlElemChildren[i]);
        return;
    };

    for(; i < OlElemChildren.length; i++) {
        if(LiElem.value === getHTMLElemValue(OlElemChildren[i])) LiElem.value++;

        if(OlElemChildren[i + 1] === undefined) break;

        if(LiElem.value > getHTMLElemValue(OlElemChildren[i]) && LiElem.value < getHTMLElemValue(OlElemChildren[i + 1])) break;
    };

    OlElem.insertBefore(LiElem, OlElemChildren[i].nextElementSibling);
};

function getHTMLElemValue(HTMLElem : Element) : number {return HTMLElem.getAttribute('value') ? Number.parseInt(HTMLElem.getAttribute('value')!) : -1};

export function getHTMLElemTextContent(elementId : string) : string {
    const element : HTMLElement = document.getElementById(elementId) as HTMLElement;

    if(element.style.display !== 'none' && element.textContent) {
        return element.textContent;
    };

    return '';
};

export function setHTMLElemTextContent(elementId : string, textContent : string) : boolean {
    const element : HTMLElement = document.getElementById(elementId) as HTMLElement;

    if(!element) {
        console.log('Element ' + elementId + ' not found');
        return false;
    };
    if(element.style.display === 'none') element.style.display = 'block';

    element.textContent = textContent;

    return true;
};