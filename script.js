const currentStep = document.getElementById('current-step');
const maxStep = document.getElementById('max-step');

const step1Form = document.getElementById('step-1');
step1Form.hidden = false;

const step2Form = document.getElementById('step-2');
step2Form.hidden = true;

const step3Form = document.getElementById('step-3');
step3Form.hidden = true;

const radioGroup = document.getElementsByName('step');
const stepper1 = document.getElementById('stepper-1');
stepper1.checked = true;

const updateSpanText = () => {
    let selectedValue;
    for (const radio of radioGroup) {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    }

    switch (selectedValue) {
        case 'step-1':
            currentStep.textContent = '1';
            step1Form.hidden = false;
            step2Form.hidden = true;
            step3Form.hidden = true;
            break;
        case 'step-2':
            currentStep.textContent = '2';
            step2Form.hidden = false;
            step1Form.hidden = true;
            step3Form.hidden = true;
            break;
        case 'step-3':
            currentStep.textContent = '3';
            step3Form.hidden = false;
            step1Form.hidden = true;
            step2Form.hidden = true;
            break;
    }
}

radioGroup.forEach((radio) => {
    radio.addEventListener('change', updateSpanText);

})
