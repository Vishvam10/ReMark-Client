const errorModal = (type, message) => {
    let markup = ""
    switch (type) {
        case "ERROR":
            markup = `
                <div class="remark_error_container remark_error_container_error">
                    <p class="remark_error_text remark_error_text_error">${message}</p>
                </div>
                `
            break;
        case "SUCCESS":
            markup = `
                <div class="remark_error_container remark_error_container_success">
                    <p class="remark_error_text remark_error_text_success">${message}</p>
                </div>
            `
            break
        case "INTIMATION":
            markup = `
            <div class="remark_error_container remark_error_container_intimation">
                <p class="remark_error_text remark_error_text_intimation">${message}</p>
            </div>
            `
            break
        default:
            markup = ""
    }
    return markup;
}