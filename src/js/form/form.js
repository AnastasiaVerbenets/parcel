import { saveFormData } from './formData';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

const form = document.querySelector('.feedbackForm');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    const name = formElements.username.value;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
        name, email, message
    }

    saveFormData(formData);

    alert({
        text: 'Form successfully submit',
        type: 'success',
    });
}