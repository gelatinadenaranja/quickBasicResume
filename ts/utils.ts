export function getWorkItemTemplate(companyName : string, workPos : string, workDesc : string, 
                                    workStrMth : string, workStrYr : string, workEndMth : string, workEndYr : string) : string {
    const workItemTemplate : string = `
    <div class="flex-container">
        <span class="small-header">` + companyName + `</span>
        <span class="small-header">` + workStrMth + `-` + workStrYr + ` - ` + workEndMth + `-` + workEndYr + `</span>
    </div>

    <h1 class="small-header">` + workPos + `</h1>

    <div>
        ` + workDesc + `
    </div>`;

    return workItemTemplate;
};

export function getEducationItemTemplate(educationTitle : string, educationGrade : string, educationInstitution : string, 
                                        educationStrMth : string, educationStrYr : string, educationEndMth : string, educationEndYr : string) : string {
    const educationItemTemplate : string = `
    <h1 class="small-header">` + educationTitle + `</h1>
    
    <div class="flex-container">
        <span>` + educationGrade + ` - ` + educationInstitution + `</span>
        <span>` + educationStrMth + `-` + educationStrYr + ` - ` + educationEndMth + `-` + educationEndYr + `</span>
    </div>`;

    return educationItemTemplate;
};

export function getLanguageItemTemplate(languageName : string, languageLevel : string) : string {
    const languageItemTemplate : string = `
    <div class="flex-container">
        <span>` + languageName + `</span>
        <span>` + languageLevel +`</span>
        
    </div>`;

    return languageItemTemplate;
};

export function getRemovalBtn(resumeTargetItem : HTMLElement, targetItem : HTMLElement, buttonCssClass ? : string) : HTMLButtonElement {
    const removalBtn : HTMLButtonElement = document.createElement('button');
    removalBtn.innerText = 'X';
    removalBtn.className = buttonCssClass ? buttonCssClass : 'remove-item-button';
    removalBtn.onclick = () => {
        resumeTargetItem.remove();
        targetItem.remove();
    };

    return removalBtn;
};