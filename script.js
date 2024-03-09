const currentStep = document.getElementById('current-step');
const maxStep = document.getElementById('max-step');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
let nameVal = nameInput.value;
let emailVal = emailInput.value;

nameInput.addEventListener('change', (e) => {
    nameVal = e.target.value;
})

emailInput.addEventListener('change', (e) => {
    emailVal = e.target.value;
})

console.log(nameVal);
console.log(emailVal);

const nameSpan = document.getElementById('name-span');
const emailSpan = document.getElementById('email-span');

const step1Form = document.getElementById('step-1');
step1Form.hidden = false;

const step2Form = document.getElementById('step-2');
step2Form.hidden = true;

const step3Form = document.getElementById('step-3');
step3Form.hidden = true;


const stepper1 = document.getElementById('stepper-1');
stepper1.checked = true;
const stepper2 = document.getElementById('stepper-2');
const stepper3 = document.getElementById('stepper-3');

const form1 = document.getElementById('step-1-form');

const step1Button = document.getElementById('step-1-button');
step1Button.addEventListener('click', (e) => {
    if (form1.checkValidity()) {
        e.preventDefault();
        step1Form.hidden = true;
        step2Form.hidden = false;
        currentStep.innerText = "2";
        stepper2.checked = true;
    }
})

const form2 = document.getElementById('step-2-form');
let topic1Value = document.getElementById('topic-1-value');


const radioGroup = document.getElementsByName('option');
let selectedValue;
const updateSpanText = () => {
    for (const radio of radioGroup) {
        if (radio.checked) {
            selectedValue = radio.value;
        }
        // topic1Value.innerText = selectedValue;
    }

    // switch (selectedValue) {
    //     case 'step-1':
    //         break;
    //     case 'step-2':
    //         break;
    //     case 'step-3':
    //         break;
    // }
}

// radioGroup.forEach((radio) => {
//     radio.addEventListener('change', updateSpanText);

// })

const step2Button = document.getElementById('step-2-button');
step2Button.addEventListener('click', (e) => {
    if (form2.checkValidity()) {
        e.preventDefault();
        step3Form.hidden = false;
        step2Form.hidden = true;
        stepper3.checked = true;
        currentStep.innerText = "3";
        nameSpan.innerText = nameVal;
        emailSpan.innerText = emailVal;
        topic1Value.innerText = selectedValue;
    } else {
        console.log("Validity check failed!");
    }
})

const confirmButton = document.getElementById('summary-confirm-button');
confirmButton.addEventListener('click', () => {
    form2.submit();
    form2.reset();
    alert("SUCCESS!");
})