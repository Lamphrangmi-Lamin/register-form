const currentStep = document.getElementById('current-step');
const maxStep = document.getElementById('max-step');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
let nameVal = nameInput.value;
let emailVal = emailInput.value;

nameInput.addEventListener('change', (e) => {
    nameVal = e.target.value;
    console.log(nameVal);
})

emailInput.addEventListener('change', (e) => {
    emailVal = e.target.value;
    console.log(emailVal);
})


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
stepper2.disabled = true;
const stepper3 = document.getElementById('stepper-3');
stepper3.disabled = true;

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
let topicVal = document.getElementById('topic-value');


const radioGroup = document.getElementsByName('option');
let selectedValue;
const updateTopicText = (e) => {
    selectedValue = e.target.checked ? e.target.value : "Select a topic";
    console.log(selectedValue)
}

for (let i = 0; i < radioGroup.length; i++) {
    const radio = radioGroup[i];
    radio.addEventListener('change', updateTopicText);
}

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
        topicVal.innerText = selectedValue;
    } else {
        console.log("Validity check failed!");
    }
})

const confirmButton = document.getElementById('summary-confirm-button');
confirmButton.addEventListener('click', (e) => {
    alert("SUCCESS!");
    e.preventDefault();
    form2.submit();
    form2.reset();
})