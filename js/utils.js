export function getWorkItemTemplate(companyName, workPos, workDesc, workStrMth, workStrYr, workEndMth, workEndYr) {
    const workItemTemplate = `
    <div class="flex-container">
        <span class="small-header">` + companyName + `</span>
        <span class="small-header">` + workStrMth + `-` + workStrYr + ` - ` + workEndMth + `-` + workEndYr + `</span>
    </div>

    <h1 class="small-header">` + workPos + `</h1>

    <div>
        ` + workDesc + `
    </div>`;
    return workItemTemplate;
}
;
export function getEducationItemTemplate(educationTitle, educationGrade, educationInstitution, educationStrMth, educationStrYr, educationEndMth, educationEndYr) {
    const educationItemTemplate = `
    <h1 class="small-header">` + educationTitle + `</h1>
    
    <div class="flex-container">
        <span>` + educationGrade + ` - ` + educationInstitution + `</span>
        <span>` + educationStrMth + `-` + educationStrYr + ` - ` + educationEndMth + `-` + educationEndYr + `</span>
    </div>`;
    return educationItemTemplate;
}
;
export function getLanguageItemTemplate(languageName, languageLevel) {
    const languageItemTemplate = `
    <div class="flex-container">
        <span>` + languageName + `</span>
        <span>` + languageLevel + `</span>
        
    </div>`;
    return languageItemTemplate;
}
;
export function getRemovalBtn(resumeTargetItem, targetItem, buttonCssClass) {
    const removalBtn = document.createElement('button');
    removalBtn.innerText = 'X';
    removalBtn.className = buttonCssClass ? buttonCssClass : 'remove-item-button';
    removalBtn.onclick = () => {
        resumeTargetItem.remove();
        targetItem.remove();
    };
    return removalBtn;
}
;
