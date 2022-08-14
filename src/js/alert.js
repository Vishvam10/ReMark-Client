const { removeHTMLElement } = require("./utils/dom_operations");

const alertModal = (type, message) => {
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

function hideAlert() {
    const ele = document.querySelector('.remark_error_container');
    if (ele) {
        removeHTMLElement(ele)
    }
}

function showAlert(type, message, time = 1.5) {
    hideAlert();
    const markup = alertModal(type, message);
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, time * 1000);
}

module.exports = {
    hideAlert,
    showAlert
}