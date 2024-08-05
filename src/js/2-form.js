const feedbackFormEl = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textAreaForm = document.querySelector('textarea');

let formData = {
    email: "",
    message: ""
};

console.log(formData);


const fielFormFileds = () => {
    const lsFromData = JSON.parse(localStorage.getItem('feedback-form-state'));

     if (lsFromData === null) {
        return;
    }

    formData = lsFromData;

    for (const key in lsFromData) {
        if (lsFromData.hasOwnProperty(key)) {
            feedbackFormEl.elements[key].value = lsFromData[key];
        }
    }
};

fielFormFileds();

const onFormChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeetBackForm = event => {
    event.preventDefault();

    if (inputForm.value === "" || textAreaForm.value === "") {
        alert("Fill please all fields");
    } else {
        event.target.reset();
        localStorage.removeItem('feedback-form-state');
        console.log(formData);
        formData["email"] = "";
        formData["message"] = "";
    }
};

feedbackFormEl.addEventListener('change', onFormChange);
feedbackFormEl.addEventListener('submit', onFeetBackForm);
