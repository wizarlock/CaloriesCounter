const inpMale = document.querySelector('#gender-male');
const inpFemale = document.querySelector('#gender-female');
const inpAge = document.querySelector('#age');
const inpHeight = document.querySelector('#height');
const inpWeight = document.querySelector('#weight');
const activityButtons = document.querySelector('.radios-group');
const minButton = activityButtons.querySelector('#activity-minimal');
const lowButton = activityButtons.querySelector('#activity-low');
const mediumButton = activityButtons.querySelector('#activity-medium');
const highButton = activityButtons.querySelector('#activity-high');
const maxButton = activityButtons.querySelector('#activity-maximal');
const submit = document.querySelector('.form__submit-button');
const reset = document.querySelector('.form__reset-button');
const result = document.querySelector('.counter__result');
const caloriesNorm = document.querySelector('#calories-norm');
const caloriesMin = document.querySelector('#calories-minimal');
const caloriesMax = document.querySelector('#calories-maximal');
activityCoeff = 1.2;
addListeners();

function resetWindow() {
    activityCoeff = 1.2;
    inpMale.checked = true;
    inpFemale.checked = false;
    inpAge.value = '';
    inpHeight.value = '';   
    inpWeight.value = '';
    submit.disabled = true;
    reset.disabled = true;
    minButton.checked = true;
    lowButton.checked = false;
    mediumButton.checked = false;
    highButton.checked = false;
    maxButton.checked = false;
    result.classList.add('counter__result--hidden');
}

function workWithDsable() {
if (inpAge.value !== "" && inpHeight.value !== "" && inpWeight.value !== "") {
    submit.disabled = false;
} else {
    submit.disabled = true;
}
if (inpAge.value !== "" || inpHeight.value !== "" || inpWeight.value !== "") {
    reset.disabled = false;
} else {
    reset.disabled = true;
}
};

function changeActivity(evt) {
    switch (evt.target.id) {
        case 'activity-minimal':
            activityCoeff = 1.2;
            break;
        case 'activity-low':
            activityCoeff = 1.375;
            break;
        case 'activity-medium':
            activityCoeff= 1.55;
            break;
        case 'activity-high':
            activityCoeff = 1.725;
            break;
        case 'activity-maximal':
            activityCoeff = 1.9;
            break;
    }
}

function getNorm() {
    const temp = inpMale.checked ? 5 : -161;
    return Math.ceil(activityCoeff * (10 * inpWeight.value + 6.25 * inpHeight.value - 5 * inpAge.value + temp));
}

function viewResultWindow(evt) {
    evt.preventDefault();
    result.classList.remove('counter__result--hidden');
    const norm = getNorm();
    caloriesNorm.textContent = norm;
    caloriesMin.textContent = Math.ceil(norm - norm * 0.15);
    caloriesMax.textContent = Math.ceil(norm + norm * 0.15);
}

function addListeners() {
inpAge.addEventListener('input', workWithDsable);
inpHeight.addEventListener('input', workWithDsable);
inpWeight.addEventListener('input', workWithDsable);
reset.addEventListener('click', resetWindow);
submit.addEventListener('click', viewResultWindow);
activityButtons.addEventListener('change', changeActivity);
}
