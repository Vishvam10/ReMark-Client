import { removeHTMLElement } from "./utils";

export const alertModal = (type, message) => {
    let markup = ""
    switch (type) {
        case "ERROR":
            markup = `
                <div class="remark_error_container remark_error_container_error">
                    <p class="remark_error_text">${message}</p>
                </div>
                `
            break;
        case "SUCCESS":
            markup = `
                <div class="remark_error_container remark_error_container_success">
                    <p class="remark_error_text">${message}</p>
                </div>
            `
            break
        case "INTIMATION":
            markup = `
            <div class="remark_error_container remark_error_container_intimation">
                <p class="remark_error_text">${message}</p>
            </div>
            `
            break
        default:
            markup = ""
    }
    return markup;
}

export function hideAlert() {
    const ele = document.querySelector('.remark_error_container');
    if (ele) {
        removeHTMLElement(ele)
    }
}

export function showAlert(type, message, time = 1) {
    hideAlert();
    const markup = alertModal(type, message);
    console.log(type, message);
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, time * 1000);
}