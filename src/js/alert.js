import { removeHTMLElement } from "./utils/dom_operations";

const alertModal = (type, message) => {
    let markup = ""
    switch (type) {
        case "ERROR":
            markup = `
                <div id="remark_error_container" class="remark_error_container remark_error_container_error">
                    <p class="remark_error_text">${message}</p>
                </div>
                `
            break;
        case "SUCCESS":
            markup = `
                <div id="remark_error_container" class="remark_error_container remark_error_container_success">
                    <p class="remark_error_text">${message}</p>
                </div>
            `
            break
        case "INTIMATION":
            markup = `
            <div id="remark_error_container" class="remark_error_container remark_error_container_intimation">
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
    const ele = document.getElementById('remark_error_container');
    if (ele) {
        removeHTMLElement(ele);
        return;
    }
}

export function showAlert(type, message, time = 1.5) {
    hideAlert();
    const markup = alertModal(type, message);
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, time * 1000);
    return markup;
}

