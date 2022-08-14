var $4f12fe73e0deabbb$export$2e2bcd8739ae039 = STYLES = `

    :root {
        --remark-color-primary: #0d6efd;
        --remark-color-primary-lighter: #5498ff;
        --remark-color-primary-darker: #0b5dd7;

        --remark-color-success: #5ec576;
        --remark-color-success-darker: #399e66;

        --remark-color-warning: #ffcb03;
        --remark-color-warning-darker: #eaac00;
        
        --remark-color-danger: #ff585f;
        --remark-color-danger-darker: #fd424b;

        --remark-color-grey-light-3: #f2f2f2;
        --remark-color-grey-light-2: #d0d0d0;
        --remark-color-grey-light-1: #9c9c9c;
        --remark-color-grey: #808080;
        --remark-color-grey-dark-1: #6c6c6c;
        --remark-color-grey-dark-2: #444444;
        --remark-color-black: #000000;
        --remark-color-white: #FFFFFF;
        --remark-color-danger-opacity: #ff58602d;
        --remark-color-danger-opacity: #ff58602d;

        --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
        --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);

        --remark-default-box-shadow-light: rgba(120, 123, 127, 0.2) 0px 8px 16px;
        --remark-default-box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;

        --remark-default-sanserif-font: Arial, Helvetica, sans-serif;
    }

    ion-icon {
        font-size: 2rem;
        color: var(--remark-color-grey);
        transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        cursor: pointer;
    }

    ion-icon:hover {
        transform: scale(1.1);
    }

    ion-icon:active {
        transform: scale(1.0);
    }

    ion-icon[name="open-outline"] {
        color: var(--remark-color-grey);
    }

    ion-icon[name="create-outline"] {
        font-size: 1.6rem;
    }

    ion-icon[name="create-outline"]:hover {
        color: var(--remark-color-primary);
    }

    ion-icon[name="trash-outline"] {
        font-size: 1.6rem;
    }

    ion-icon[name="trash-outline"]:hover {
        color: var(--remark-color-danger);
    }

    ion-icon[name="ellipsis-horizontal-outline"] {
        font-size: 1.6rem;
    }

    ion-icon[name="paper-plane-outline"] {
        font-size: 2.8rem;
        rotate: 45deg;
    }

    ion-icon[name="paper-plane-outline"]:hover {
        font-size: 3.2rem;
        rotate: 45deg;
        color: var(--remark-color-primary);
    }

    ion-icon[name="arrow-up-outline"] {
        font-size: 1.6rem;
        margin: 0rem 0rem 0rem 0.5rem;
    }

    ion-icon[name="arrow-up-outline"]:hover {
        font-size: 1.8rem;
        color: var(--remark-color-success);
    }

    ion-icon[name="arrow-down-outline"] {
        font-size: 1.6rem;
        margin: 0rem 0rem 0rem 0.5rem;
    }

    ion-icon[name="arrow-down-outline"]:hover {
        font-size: 1.8rem;
        color: var(--remark-color-danger);
    }

    .hide {
        display: none;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
    }

    .loginSignupSwitch {
        color: var(--remark-color-primary);
        font-weight: 700;
        transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        cursor: pointer;
        font-size: 1.1rem;
    }

    .loginSignupSwitch:hover {
        font-size: 1.2rem;
    }

    .loginSignupSwitch:active {
        font-size: 1.1rem;
    }

    .remark_init_container {
        width: 40rem;
        background: var(--remark-color-white);
        padding: 1rem;
        height: 8rem;
        border-radius: 1.6rem;
        position: fixed;
        z-index: 10000000;
        bottom: 3rem;
        left: 36%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        box-shadow: var(--remark-default-box-shadow);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .remark_init_container_resize {
        left: 4%;
        width: 30rem;
    }

    .remark_init_button {
        width: 60% !important;
        font-size: 1.6rem !important;
        padding: 1rem !important;
        background-color: var(--remark-color-primary) !important;
        color: var(--remark-color-white);
        height: 5rem !important;
        margin: 0.5rem 0rem 0rem 1rem !important;
    }

    .remark_init_text {
        width: 30%;
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--remark-color-grey-dark-1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /*
        ********************* MODAL *********************
    */

    .remark_error_container {
        width: 40rem;
        background: var(--remark-color-white);
        padding: 3.6rem;
        min-height: 6rem;
        border-radius: 1.6rem;
        position: fixed;
        z-index: 100000000;
        bottom: 3rem;
        left: 36%;
        display: flex;
        box-shadow: var(--remark-default-box-shadow);
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--remark-color-black);
        flex-direction: column;
        justify-content: center;
        align-content: center;
        transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        line-height: 2rem;
    }

    .remark_error_container_error {
        background: var(--remark-color-danger-darker);
        color: var(--remark-color-white) !important;
    }

    .remark_error_container_success {
        background: var(--remark-color-success-darker);
        color: var(--remark-color-white) !important;
    }

    .remark_error_container_intimation {
        background: var(--remark-color-warning-darker);
        color: var(--remark-color-black) !important;
    }

    .remark_error_text {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        color: inherit;
        width: 100%;
    }

    remark_error_container_error {
        background: var(--remark-color-danger);
    }

    remark_error_container_intimation {
        background: var(--remark-color-warning);
    }

    remark_error_container_success {
        background: var(--remark-color-success);
    }

    .remark_standard_modal {
        position: fixed;
        top: 50%;
        left: 49.8%;
        transform: translate(-50%, -50%);
        width: 40rem;
        background-color: var(--remark-color-white);
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: var(--remark-default-box-shadow);
        z-index: 1000000;
        transition: all 0.5s;
        height: auto;
    }

    .remark_standard_modal_header {
        padding: 1rem;
        height: 6rem;
        margin: -1rem -1rem 0rem -1rem;
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--remark-color-grey-light-1);
        border-radius: 1rem 1rem 0rem 0rem;
    }

    .remark_standard_modal_actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 10%;
    }

    .remark_standard_modal_title {
        display: flex;
        flex-direction: row;
        justify-content: start;
        width: 70%;
        word-wrap: break-word;
        padding: 1rem;
        margin: 1rem 0rem 1rem 2rem;
        font-size: 1.6rem;
    }

    .remark_standard_modal_close_btn {
        margin: 0.4rem 0rem 0rem 0rem;
    }

    .remark_standard_modal_body {
        padding: 2rem;
        font-size: 1.2rem;
    }

    .remark_standard_sidebar {
        position: fixed;
        top: 0;
        right: 0;
        width: 52rem;
        background-color: var(--remark-color-white);
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: var(--remark-default-box-shadow);
        z-index: 1000;
        height: 100vh;
        background: var(--remark-color-white);
        padding: 1rem;
        animation: remark_sidebar_animation 0.6s;
    }

    @keyframes remark_sidebar_animation {
        from {
            width: 0px;
        }
        to {
            width: 52rem;
        }
    }

    .remark_standard_sidebar_body {
        height: 80%;
        overflow-x: hidden;
        overflow-y: scroll;
        scrollbar-width: none;
    }


    /* 
        ********************* ANNOTATIONS *********************
    */

    .resolve_btn {
        background-color: var(--remark-color-primary);
        font-size: 1.6rem;
        font-family: inherit;
        font-weight: 500;
        border: none;
        padding: 1.25rem 4.5rem;
        border-radius: 10rem;
        cursor: pointer;
        transition: all 0.3s;
        border-radius: 1rem;
        width: 10rem;
    }

    .resolve_btn:hover {
        background-color: var(--remark-color-primary-darker);
    }

    .remark_annotation {
        margin: 1.6rem 0rem 2rem 0rem;
        height: auto;
        padding: 1rem;
        border: 1px solid var(--remark-color-grey-light-1);
        border-radius: 1rem;
        font-family: "arial";
    }

    .remark_annotation_header {
        padding: 1rem;
        height: 5%;
        min-height: 2rem;
        max-height: 4rem;
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .remark_comment_actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 20%;
    }

    .remark_annotation_vote_option {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .remark_annotation_reply {
        margin: 0rem 0rem 0rem 5%;
    }

    .annotation_actions_options {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 1rem;
        padding: 1rem;
        height: 4rem;
        box-shadow: var(--remark-default-box-shadow);
        border-radius: 1rem;
        position: relative;
        top: 15%;
    }

    .remark_annotation_user_profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 40%;
        width: 100%;
    }

    .remark_annotation_user_image {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 2rem;
    }

    .remark_annotation_user_details {
        width: 86%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 100%;
        color: var(--remark-color-grey);
    }

    .remark_annotation_user_username {
        font-size: 1.3rem;
        font-weight: 700;
        margin: 0rem 0rem 0.4rem 0rem;
    }

    .remark_annotation_user_last_modified {
        font-weight: normal;
        font-size: 1rem;
        margin: -0.7rem 0rem 0rem 0rem;
    }

    .remark_annotation_user_message {
        width: 97%;
        margin: 1rem 0rem 1rem 0rem;
        color: var(--remark-color-grey);
        padding: 0rem 0rem 0rem 1rem;
        font-family: inherit;
        font-size: 1.3rem;
        line-height: 1.8rem;
    }

    .remark_annotation_vote {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 24%;
        margin: 2rem 1rem 1rem 1rem;
    }


    /* 
        ********************* INPUT FIELDS *********************
    */

    textarea {
        padding: 2rem;
        font-family: var(--remark-default-sanserif-font);
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 6rem;
        width: 90%;
        border-radius: 1.4rem;
        background-color: var(--remark-color-white);
        resize: none;
        overflow-y: scroll;
        outline: 0px !important;
        scrollbar-width: none;
        margin: 1rem;
        transition: transform 0.2s ease-in;
        border: 1px solid var(--remark-color-grey-light-1);
    }

    textarea:hover {
        border: 0.5px solid var(--remark-color-grey-dark-2);
    }

    textarea:focus {
        border: 0.5px solid var(--remark-color-primary);
    }

    .remark_annotation_user_input {
        position: absolute;
        bottom: 1rem;
        margin: 2rem 0rem 0rem 0rem;
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .signup_container {
        height: auto;
        width: 20rem;
        background-color: var(--remark-color-white);
        box-shadow: var(--remark-default-box-shadow-light);
        border-radius: 1rem;
        padding: 2rem;
    }

    #createCommentForm {
        width: 100%;
    }

    .remark_form_fields {
        margin: 2.6rem 0rem 0rem 0rem;
    }

    .remark_form_input {
        padding: 1rem 2rem 1.2rem 1rem;
        font-family: var(--remark-default-sanserif-font);
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 4rem;
        width: 100%;
        border-radius: 0.6rem;
        background-color: var(--remark-color-white);
        border: none;
        outline: 0px !important;
        margin: 0.4rem 0rem 1rem 0rem;
        transition: border 0.2s ease-in;
        border: 0.5px solid var(--remark-color-grey);
        font-size: 1.2rem;
        color: var(--remark-color-grey);
    }

    .remark_form_input:focus {
        border: 0.5px solid var(--remark-color-primary);
    }

    .remark_form_label {
        font-family: var(--remark-default-sanserif-font);
        font-size: 1.2rem;
        color: var(--remark-color-grey);
    }

    .remark_standard_button {
        background-color: var(--remark-color-primary);
        font-size: 1.6rem;
        color: var(--remark-color-white);
        font-family: inherit;
        font-weight: 500;
        border: none;
        padding: 1.25rem 4.5rem;
        border-radius: 1.2rem;
        cursor: pointer;
        transition: all 0.1s;
        margin: 3rem 0rem 2rem 0rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .remark_standard_button:hover {
        background-color: var(--remark-color-primary) !important;
        transform: scale(1.04);
    }

    .remark_standard_button:active {
        transform: scale(1.0) !important;
    }

    .remark_standard_button:focus {
        background-color: var(--remark-color-primary) !important
        transform: scale(1.0);
    }

    .remark_delete_button {
        background-color: var(--remark-color-danger);
        color: var(--remark-color-white);
    }

    .remark_delete_button:focus {
        background-color: var(--remark-color-danger) !important;
        color: var(--remark-color-white) !important;
    }

    .remark_resolve_button {
        margin: 0rem 0rem 0rem -8rem;
        height: 3rem;
        border-radius: 1.1rem;
        font-size: 1.3rem;
        color: var(--remark-color-white);
    }
    
    .remark_resolve_button {
        color: var(--remark-color-white) !important;
    }

    .remark_unresolve_button {
        background-color: var(--remark-color-danger);
        color: var(--remark-color-white);
    }

    .remark_unresolve_button:focus {
        background-color: var(--remark-color-danger);
        color: var(--remark-color-white);
    }

    .error_modal {
        font-family: var(--remark-default-sanserif-font);
        font-size: 1rem;
        line-height: 1.4rem;
        height: auto;
        width: 20rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        border-radius: 0.4rem;
        padding: 0.8rem 1.4rem 1rem 1.6rem;
        color: var(--remark-color-white);
    }

    .highlight_element_light {
        outline: dashed 2px var(--remark-color-grey);
        border-radius: 0.4rem;
        padding: 0.4rem;
    }

    .highlight_element_strong {
        outline: 2.8px solid var(--remark-color-primary);
        border-radius: 0.4rem;
        padding: 0.4rem;
        margin: 0.8rem;
    }

    .remark_contextmenu_wrapper {
        visibility: hidden;
        position: fixed;
        width: 22rem;
        height: auto;
        border-radius: 1rem;
        background: var(--remark-color-white);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
        font-family: var(--remark-default-sanserif-font);
        padding: 1rem;
        z-index: 100000;
    }

    .remark_contextmenu_content {
        height: 100%;
    }

    .remark_contextmenu_menu_list {
        padding: 1rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .remark_item {
        list-style: none;
        font-size: 1rem;
        height: 4.2rem;
        display: flex;
        width: 98%;
        cursor: pointer;
        align-items: center;
        border-radius: 0.7rem;
        padding: 0 0.3125rem 0 0.625rem;
        transition: background, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
        margin: 0.4rem 0rem 0.4rem 0rem;
    }

    .remark_contextmenu_icon {
        font-size: 2rem !important;
        color: var(--remark-color-grey) !important;
    }

    .remark_contextmenu_content .remark_item:hover {
        background: #f2f2f2;
        transform: scale(1.05);
    }

    .remark_contextmenu_content .remark_item:active {
        background: #f2f2f2;
        transform: scale(1.0);
    }

    .remark_context_menu_item_name {
        margin: 1.2rem 0rem 1rem 1.2rem;
        font-size: 1.4rem;
        color: var(--remark-color-grey);
    }

    `;


const $af38c480052fd5ae$export$37b96ba04a8c05d1 = "http://127.0.0.1:5000";
const $af38c480052fd5ae$export$78b464efab6cd2cc = [
    "DIV",
    "SPAN",
    "BUTTON",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "IMG",
    "SVG",
    "NAV",
    "A",
    "TABLE",
    "INPUT",
    "LABEL",
    "FORM"
];



const $fd3a760e313b8296$export$b92ea88f33b78593 = (type, message)=>{
    let markup = "";
    switch(type){
        case "ERROR":
            markup = `
                <div class="remark_error_container remark_error_container_error">
                    <p class="remark_error_text">${message}</p>
                </div>
                `;
            break;
        case "SUCCESS":
            markup = `
                <div class="remark_error_container remark_error_container_success">
                    <p class="remark_error_text">${message}</p>
                </div>
            `;
            break;
        case "INTIMATION":
            markup = `
            <div class="remark_error_container remark_error_container_intimation">
                <p class="remark_error_text">${message}</p>
            </div>
            `;
            break;
        default:
            markup = "";
    }
    return markup;
};
function $fd3a760e313b8296$export$516836c6a9dfc573() {
    const ele = document.querySelector(".remark_error_container");
    if (ele) (0, $18a61f8fa6189451$export$c229772b99a4e439)(ele);
}
function $fd3a760e313b8296$export$de026b00723010c1(type, message, time = 1) {
    $fd3a760e313b8296$export$516836c6a9dfc573();
    const markup = $fd3a760e313b8296$export$b92ea88f33b78593(type, message);
    console.log(type, message);
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout($fd3a760e313b8296$export$516836c6a9dfc573, time * 1000);
}


function $18a61f8fa6189451$export$ed692cabb252e59b(data) {
    if (data["authority"] == "admin" || data["authority"] == "user") {
        if (data["username"] != "") {
            var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (re.test(data["password"])) return "OK";
            return "Invalid Password Format";
        }
        return "Empty Field Present";
    }
    return "Invalid Authority";
}
function $18a61f8fa6189451$export$c229772b99a4e439(ele) {
    ele.parentElement.removeChild(ele);
    return;
}
function $18a61f8fa6189451$export$1656970ae4fe6f6e() {
    document.addEventListener("mouseover", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const className = e.target.className;
        if (className.includes("remark_") || className.includes("highlight_element_strong")) return;
        const tag = e.target.tagName;
        if ((0, $af38c480052fd5ae$export$78b464efab6cd2cc).includes(tag)) {
            const targetHTMLElement = e.target;
            targetHTMLElement.classList.toggle("highlight_element_light");
        }
    });
    document.addEventListener("mouseout", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const className = e.target.className;
        if (className.includes("remark_") || className.includes("highlight_element_strong")) return;
        const tag = e.target.tagName;
        if ((0, $af38c480052fd5ae$export$78b464efab6cd2cc).includes(tag)) {
            const targetHTMLElement = e.target;
            targetHTMLElement.classList.toggle("highlight_element_light");
        }
    });
}
function $18a61f8fa6189451$export$f652639b5b793ed6(len) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for(var i = 0; i < len; i++)result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}
function $18a61f8fa6189451$export$84e90f298cb9295(s) {
    var code, i, len;
    for(i = 0, len = s.length; i < len; i++){
        code = s.charCodeAt(i);
        if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) return false;
    }
    return true;
}
function $18a61f8fa6189451$export$987805c7826bea7f(ele) {
    if (ele.id !== "") return 'id("' + ele.id + '")';
    if (ele === document.body) return ele.tagName;
    var ix = 0;
    var siblings = ele.parentNode.childNodes;
    for(var i = 0; i < siblings.length; i++){
        var sibling = siblings[i];
        if (sibling === ele) return $18a61f8fa6189451$export$987805c7826bea7f(ele.parentNode) + "/" + ele.tagName + "[" + (ix + 1) + "]";
        if (sibling.nodeType === 1 && sibling.tagName === ele.tagName) ix++;
    }
}
function $18a61f8fa6189451$export$e4a97e478b027a9a(path) {
    let ele = null;
    try {
        ele = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } catch (error) {
        return;
    }
    return ele;
}
function $18a61f8fa6189451$export$dbd0143e191dc2e5(element) {
    var x = 0, y = 0;
    while(element){
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return [
        x,
        y
    ];
}
function $18a61f8fa6189451$export$7944e6c420dcf471(node, xpath) {
    const res = $18a61f8fa6189451$export$e4a97e478b027a9a(xpath);
    if (res == node) return true;
    return false;
}
function $18a61f8fa6189451$export$ec2ba4eed75ccfb3(node_xpath, html_id, html_tag, html_text_content) {
    const ele_check1 = $18a61f8fa6189451$export$e4a97e478b027a9a(`${node_xpath}`);
    if (ele_check1) return ele_check1;
    else {
        const ele_check2 = document.getElementById(`${html_id}`);
        if (ele_check2) return ele_check2;
        else {
            const html_tags = document.getElementsByTagName(`${html_tag}`);
            let ele_check3;
            for(let i = 0; i < html_tags.length; i++){
                curElement = html_tags[i];
                if (curElement.textContent.replace(/\s/g, "") == html_text_content.replace(/\s/g, "")) {
                    ele_check3 = curElement;
                    break;
                }
            }
            if (ele_check3) return ele_check3;
            else {
                //- LOGIC MUST BE CHANGED
                const ht = html_tag.toLowerCase();
                const html_tags1 = document.getElementsByTagName(`${ht}`);
            // showAlert("INTIMATION", `${html_text_content} TAG : ${ht}`, 1000)
            }
        }
    }
}
function $18a61f8fa6189451$export$7743824edd59500d() {
    const create_modal_check = document.getElementById("remark_create_annotation_modal");
    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
    const delete_modal_check = document.getElementById("remark_delete_annotation_modal");
    const sidebar_check = document.getElementById("remark_annotations_sidebar");
    const login_modal_check = document.getElementById("remark_login_modal");
    const signup_modal_check = document.getElementById("remark_signup_modal");
    const context_menu_check = document.getElementById("remark_context_menu");
    (0, $fd3a760e313b8296$export$516836c6a9dfc573)();
    if (create_modal_check) $18a61f8fa6189451$export$c229772b99a4e439(create_modal_check);
    if (edit_modal_check) $18a61f8fa6189451$export$c229772b99a4e439(edit_modal_check);
    if (delete_modal_check) $18a61f8fa6189451$export$c229772b99a4e439(delete_modal_check);
    if (sidebar_check) $18a61f8fa6189451$export$c229772b99a4e439(sidebar_check);
    if (login_modal_check) $18a61f8fa6189451$export$c229772b99a4e439(login_modal_check);
    if (signup_modal_check) $18a61f8fa6189451$export$c229772b99a4e439(signup_modal_check);
    if (context_menu_check) $18a61f8fa6189451$export$c229772b99a4e439(context_menu_check);
}


var $9bdae1cc374cba8f$export$1b94e36de2b67148 = {
    "website_id": "",
    "api_key": "",
    "annotations": [],
    "theme": "light",
    "currentXPath": ""
};






async function $41fbc3b1898586d3$export$d32fca31e5b6ceec() {
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/annotation/all/${website_id}`;
    const api_key = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["api_key"];
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "API_KEY": `${api_key}`,
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["annotations"] = data;
    return data;
}
async function $41fbc3b1898586d3$export$51eda81011da4982(bodyData) {
    console.log(bodyData);
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/annotation`;
    const api_key = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "API_KEY": `${api_key}`,
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${auth_token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    });
    const data = await res.json();
    if (data.status == 201) {
        const create_modal_check = document.getElementById("remark_create_annotation_modal");
        if (create_modal_check) (0, $18a61f8fa6189451$export$c229772b99a4e439)(create_modal_check);
        const ele = (0, $18a61f8fa6189451$export$ec2ba4eed75ccfb3)(bodyData["node_xpath"], bodyData["html_id"], bodyData["html_tag"], bodyData["html_text_content"]);
        ele.classList.add("highlight_element_strong");
        (0, $fd3a760e313b8296$export$de026b00723010c1)("SUCCESS", "Annotation created successfully !");
    }
    $41fbc3b1898586d3$export$d32fca31e5b6ceec();
    return data;
}
async function $41fbc3b1898586d3$export$91b982a47ffa3c23(bodyData) {
    const annotation_id = bodyData["annotation_id"];
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/annotation/${annotation_id}`;
    const api_key = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "API_KEY": `${api_key}`,
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${auth_token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    });
    const data = await res.json();
    if (data) {
        (0, $fd3a760e313b8296$export$de026b00723010c1)("SUCCESS", data["message"]);
        if (data["message"] == "Annotation resolved successfully !") {
            const resolve_btn = document.getElementById("remark_annotation_resolve_button");
            resolve_btn.classList.add("remark_unresolve_button");
            resolve_btn.innerText = "Unresolve";
        } else if (data["message"] == "Annotation unresolved successfully !") {
            const resolve_btn1 = document.getElementById("remark_annotation_resolve_button");
            resolve_btn1.classList.remove("remark_unresolve_button");
            resolve_btn1.innerText = "Resolve";
        }
    }
    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (edit_modal_check) (0, $18a61f8fa6189451$export$c229772b99a4e439)(edit_modal_check);
    $41fbc3b1898586d3$export$d32fca31e5b6ceec();
    return data;
}
async function $41fbc3b1898586d3$export$a193961559973879(bodyData) {
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/annotation/${bodyData["annotation_id"]}`;
    console.log(bodyData);
    const api_key = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            "API_KEY": `${api_key}`,
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${auth_token}`,
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    if (data.status == 200) {
        const delete_modal_check = document.getElementById("remark_delete_annotation_modal");
        if (delete_modal_check) (0, $18a61f8fa6189451$export$c229772b99a4e439)(delete_modal_check);
        const ele = (0, $18a61f8fa6189451$export$ec2ba4eed75ccfb3)(bodyData["node_xpath"], bodyData["html_id"], bodyData["html_tag"], bodyData["html_text_content"]);
        ele.classList.remove("highlight_element_strong");
        (0, $fd3a760e313b8296$export$de026b00723010c1)("SUCCESS", "Annotation deleted successfully !");
    }
    $41fbc3b1898586d3$export$d32fca31e5b6ceec();
    return data;
}





async function $1a716a3e9014a08f$export$2a15b079e3f46654(bodyData) {
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/comment`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "API_KEY": `${api_key}`,
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${auth_token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    });
    const data = await res.json();
    if (data.status == 201) {
        const comment = data.data;
        const markup = COMMENTS_MARKUP(comment);
        document.getElementById("remark_comments_body").insertAdjacentHTML("beforeend", markup);
    } else (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Please enter a valid comment !");
    return data;
}
async function $1a716a3e9014a08f$export$fc22b458daff1d0c(bodyData) {
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/comment/${bodyData["comment_id"]}`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "API_KEY": `${api_key}`,
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${auth_token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    });
    const data = await res.json();
    if (!data) (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Something went wrong !", 2);
    else {
        console.log(data);
        const content_id = data["comment_id"] + "message";
        const contentEle = document.getElementById(`${content_id}`);
        contentEle.textContent = data["content"];
        (0, $fd3a760e313b8296$export$de026b00723010c1)("SUCCESS", "Comment edited successfully !");
        contentEle.contentEditable = false;
    }
    return data;
}
async function $1a716a3e9014a08f$export$f2e8b808565088b0(bodyData) {
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/comment/vote/${bodyData["comment_id"]}`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "API_KEY": `${api_key}`,
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${auth_token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    });
    const data = await res.json();
    console.log(data);
    if (data.status == 200) {
        (0, $fd3a760e313b8296$export$de026b00723010c1)("SUCCESS", `${data["message"]}`);
        document.getElementById(`${bodyData["comment_id"]}upvotes`).textContent = data["comment_upvotes"];
        document.getElementById(`${bodyData["comment_id"]}downvotes`).textContent = data["comment_downvotes"];
    } else (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", data["error_message"]);
    return data;
}
async function $1a716a3e9014a08f$export$2e6e3ad634e3776(comment_id) {
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/comment/${comment_id}`;
    const api_key = remarkGlobalData["api_key"];
    const auth_token = localStorage.getItem("user_access_token");
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            "API_KEY": `${api_key}`,
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${auth_token}`,
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    if (data.status == 200) {
        const comment = document.getElementById(comment_id);
        (0, $18a61f8fa6189451$export$c229772b99a4e439)(comment);
    } else (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Something went wrong");
    return data;
}





function $1462d0332aa03f78$export$256a5a3564694cfc() {
    const username = localStorage.getItem("user_name");
    const user_id = localStorage.getItem("user_id");
    if (username && user_id) return true;
    return false;
}
function $1462d0332aa03f78$export$a0973bcfe11b05c9() {
    localStorage.clear();
}
function $1462d0332aa03f78$export$692b4a7cc7a486ce(form) {
    const formData = new FormData(form);
    const data = {};
    for (var pair of formData.entries())data[pair[0]] = pair[1];
    const res = (0, $18a61f8fa6189451$export$ed692cabb252e59b)(data);
    if (res == "OK") {
        const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/login`;
        fetch(url, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
            if (data["status"] == 200) {
                localStorage.setItem("user_access_token", data["access_token"]);
                localStorage.setItem("user_id", data["user_id"]);
                localStorage.setItem("user_name", data["user_name"]);
                localStorage.setItem("user_authority", data["user_authority"]);
                const loginFormModal = document.getElementById("remark_login_modal");
                if (loginFormModal) (0, $18a61f8fa6189451$export$c229772b99a4e439)(loginFormModal);
                (0, $fd3a760e313b8296$export$de026b00723010c1)("SUCCESS", "Logged in successfully !");
            } else {
                console.log(data);
                return false;
            }
        }).catch((err)=>console.log(err));
    } else (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Form validation failed");
}
function $1462d0332aa03f78$export$44c987e964dad812(form) {
    const formData = new FormData(form);
    const data = {};
    for (var pair of formData.entries())data[pair[0]] = pair[1];
    data["authority"] = "user";
    const res = (0, $18a61f8fa6189451$export$ed692cabb252e59b)(data);
    if (res == "OK") {
        const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/user`;
        fetch(url, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
            if (data["status"] == 201) {
                localStorage.setItem("user_access_token", data["access_token"]);
                localStorage.setItem("user_id", data["user_id"]);
                localStorage.setItem("user_name", data["user_name"]);
                localStorage.setItem("user_authority", data["user_authority"]);
                const signupFormModal = document.getElementById("remark_signup_modal");
                if (signupFormModal) (0, $18a61f8fa6189451$export$c229772b99a4e439)(signupFormModal);
            } else {
                console.log(data);
                return false;
            }
        }).catch((err)=>console.log(err));
    }
}
function $1462d0332aa03f78$export$fc970ed23da99565() {
    const authority = localStorage.getItem("user_authority");
    if (authority == "admin") return true;
    return false;
}







function $401e5251b5672128$export$592d9b2be066ea35(html_node, html_tag, html_class, html_id, html_text_content) {
    const create_modal_check = document.getElementById("remark_create_annotation_modal");
    if (create_modal_check) return;
    const body = document.getElementsByTagName("body")[0];
    let node_xpath = (0, $18a61f8fa6189451$export$987805c7826bea7f)(html_node);
    node_xpath = `//${node_xpath.toLowerCase()}`;
    const newAnnotationModal = (0, $4ccab26f1b142cf4$export$677e18af8a745d31)(node_xpath, html_tag, html_class, html_id, html_text_content);
    body.insertAdjacentHTML("afterbegin", newAnnotationModal);
    let modalCloseBtn = document.getElementById("remark_standard_modal_close_btn");
    let submitBtn = document.getElementById("remark_create_annotation_button");
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const ele = document.getElementById("remark_create_annotation_modal");
        (0, $18a61f8fa6189451$export$c229772b99a4e439)(ele);
    });
    if (submitBtn) submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log("CLICKED");
        const createAnnotationForm = document.getElementById("createAnnotationForm");
        $cc4ff3a23db2c1c1$export$8b7da6b63de39513(createAnnotationForm);
    });
}
function $401e5251b5672128$export$a144fbac6e7cc210(html_node, html_tag, html_id, html_text_content) {
    const edit_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (edit_modal_check) {
        console.log("Edit annotation modal already present.");
        return;
    }
    const body = document.getElementsByTagName("body")[0];
    let node_xpath = (0, $18a61f8fa6189451$export$987805c7826bea7f)(html_node);
    node_xpath = `//${node_xpath.toLowerCase()}`;
    const ele = (0, $18a61f8fa6189451$export$ec2ba4eed75ccfb3)(node_xpath, html_id, html_tag, html_text_content);
    if (ele) {
        const editAnnotationModal = (0, $4ccab26f1b142cf4$export$c85da9ec7569e35c)(node_xpath);
        body.insertAdjacentHTML("afterbegin", editAnnotationModal);
    } else {
        (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Xpath not matched. Please try again !");
        return;
    }
}
function $401e5251b5672128$export$7f4bf70cd335a417(html_node, html_tag, html_id, html_text_content) {
    const delete_modal_check = document.getElementById("remark_edit_annotation_modal");
    if (delete_modal_check) return;
    let node_xpath = (0, $18a61f8fa6189451$export$987805c7826bea7f)(html_node);
    node_xpath = `//${node_xpath.toLowerCase()}`;
    const body = document.getElementsByTagName("body")[0];
    const ele = (0, $18a61f8fa6189451$export$ec2ba4eed75ccfb3)(node_xpath, html_id, html_tag, html_text_content);
    if (ele) {
        const deleteAnnotationModal = DELETE_ANNOTATION_MODAL(node_xpath);
        body.insertAdjacentHTML("afterbegin", deleteAnnotationModal);
    } else {
        (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Xpath not matched. Please try again !");
        return;
    }
}
function $401e5251b5672128$export$1d36b8466b2a4d4c() {
    const annotations = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["annotations"];
    // Indicate the elements on which the annotations are present
    annotations.forEach((annotation)=>{
        const ele = (0, $18a61f8fa6189451$export$ec2ba4eed75ccfb3)(annotation["node_xpath"], annotation["html_id"], annotation["html_tag"], annotation["html_text_content"]);
        if (ele) {
            ele.classList.add("highlight_element_strong");
            ele.dataset.xpath = annotation["node_xpath"];
        } else console.log("RE-RENDER REQUIRED : ", ele);
    });
// 2. On show, trigger the sidebar (or modal)
// THIS WILL BE DONE USING THE CONTEXT MENU
}
function $401e5251b5672128$export$40be53e378c97146(xpath) {
    const sideBar = (0, $4ccab26f1b142cf4$export$2ee9e5a3556c1e43)(xpath);
    const body = document.getElementsByTagName("body")[0];
    const check = document.getElementById("remark_annotations_sidebar");
    if (check) (0, $18a61f8fa6189451$export$c229772b99a4e439)(check);
    body.insertAdjacentHTML("afterbegin", sideBar);
}
function $401e5251b5672128$export$dd9c74687ae6eb45() {
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", (0, $4ccab26f1b142cf4$export$f5cfe9cd58390ad5));
    let modalCloseBtn = document.getElementById("remark_standard_modal_close_btn");
    let submitBtn = document.getElementById("remark_login_button");
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const ele = document.getElementById("remark_login_modal");
        (0, $18a61f8fa6189451$export$c229772b99a4e439)(ele);
    });
    if (submitBtn) submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const loginForm = document.getElementById("loginForm");
        $cc4ff3a23db2c1c1$export$799b690d1790eee(e, loginForm);
    });
}
function $401e5251b5672128$export$245c1a748319b9de() {
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("afterbegin", (0, $4ccab26f1b142cf4$export$ecfd046c5f019e12));
    let modalCloseBtn = document.getElementById("remark_standard_modal_close_btn");
    let submitBtn = document.getElementById("remark_login_button");
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const ele = document.getElementById("remark_login_modal");
        (0, $18a61f8fa6189451$export$c229772b99a4e439)(ele);
    });
    if (submitBtn) submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const signupForm = document.getElementById("signupForm");
        $cc4ff3a23db2c1c1$export$56c97bdfc586d8b5(e, signupForm);
    });
}




function $cc4ff3a23db2c1c1$export$8b7da6b63de39513(formElement) {
    let form = new FormData(formElement);
    let data = {};
    const user_id = localStorage.getItem("user_id");
    const user_name = localStorage.getItem("user_name");
    for (var pair of form.entries()){
        if (pair[0] == "annotation_name" || pair[0] == "tags") {
            if (!pair[1].match(/^[0-9a-zA-Z,_ ]+$/)) {
                showAlert("ERROR", "Only alphanumeric values and comma are allowed !");
                return;
            }
        }
        data[pair[0]] = pair[1].trim();
    }
    data["website_uri"] = window.location.href;
    data["user_id"] = user_id;
    data["user_name"] = user_name;
    data["website_id"] = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["website_id"];
    (0, $41fbc3b1898586d3$export$51eda81011da4982)(data);
}
function $cc4ff3a23db2c1c1$export$83c0f6ac3e1ea58d(ele, event) {
    event.preventDefault();
    event.stopPropagation();
    const annotation_id = ele.dataset.annotation_id;
    let data = {};
    data["annotation_id"] = annotation_id;
    data["action_type"] = "edit_resolved";
    data["new_resolved"] = "";
    (0, $41fbc3b1898586d3$export$91b982a47ffa3c23)(data);
}
function $cc4ff3a23db2c1c1$export$51aff373edad69c5(formElement, event) {
    event.preventDefault();
    event.stopPropagation();
    let form = new FormData(formElement);
    const annotation_id = formElement.dataset.annotation_id;
    let data = {};
    for (var pair of form.entries())//* TODO : Validation
    // if (pair[0] == "new_name" || pair[0] == "new_tags") {
    // if (!pair[1].match(/^[0-9a-zA-Z,_ ]+$/)) {
    // console.log("Only alphanumeric values and comma are allowed !", pair[0], pair[1]);
    // return;
    // }
    // }
    data[pair[0]] = pair[1].trim();
    let actions = [];
    if (data["new_annotation"] != "") actions.push("edit_name");
    if (data["new_tags"] != "") actions.push("edit_tags");
    actions = actions.join(",");
    data["action_type"] = actions;
    data["annotation_id"] = annotation_id;
    (0, $41fbc3b1898586d3$export$91b982a47ffa3c23)(data);
}
function $cc4ff3a23db2c1c1$export$ff5312fa04eaf3aa(formElement, event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(formElement);
    let form = new FormData(formElement);
    let data = {};
    for (var pair of form.entries())data[pair[0]] = pair[1].trim();
    if (formElement.dataset.annotation_name == data["deleteConfirmation"]) {
        const annotation_id = formElement.dataset.annotation_id;
        const xpath = formElement.dataset.xpath;
        const html_id = formElement.dataset.html_id;
        const html_tag = formElement.dataset.html_tag;
        const html_text_content = formElement.dataset.html_text_content;
        if (annotation_id && xpath) {
            data["annotation_id"] = annotation_id;
            data["node_xpath"] = xpath;
            data["html_id"] = html_id;
            data["html_tag"] = html_tag;
            data["html_text_content"] = html_text_content;
            (0, $41fbc3b1898586d3$export$a193961559973879)(data);
        }
    } else {
        showAlert("ERROR", "Annotation names don't match !");
        return;
    }
}
function $cc4ff3a23db2c1c1$export$c0661eac5aac545d() {
    let data = {};
    const user_id = localStorage.getItem("user_id");
    const user_name = localStorage.getItem("user_name");
    const textarea = document.getElementById("remark_comment_input");
    const text = textarea.value;
    data["content"] = text;
    data["content_html"] = "";
    data["annotation_id"] = textarea.dataset.annotation_id;
    data["user_id"] = user_id;
    data["user_name"] = user_name;
    data["parent_node"] = null;
    textarea.value = "";
    (0, $1a716a3e9014a08f$export$2a15b079e3f46654)(data);
}
function $cc4ff3a23db2c1c1$export$97b2ebf3e3e921a5(ele, event) {
    event.preventDefault();
    event.stopPropagation();
    const user_id = localStorage.getItem("user_id");
    const comment_id = ele.dataset.comment_id;
    const content_id = `${comment_id}message`;
    let contentEle = document.getElementById(`${content_id}`);
    contentEle.contentEditable = true;
    let data = {};
    data["user_id"] = user_id;
    data["comment_id"] = comment_id;
    showAlert("INTIMATION", "Please use Ctrl + Enter to submit the edited comment", 2);
    setTimeout(function() {
        contentEle.focus();
        contentEle.style.padding = "1rem";
    }, 0);
    contentEle.addEventListener("keydown", (e)=>{
        if (e.ctrlKey && e.key === "Enter") {
            console.log("EDITING COMMENT");
            contentEle.blur();
            let new_content = contentEle.textContent.trim();
            data["new_content"] = new_content;
            data["new_content_html"] = "";
            (0, $1a716a3e9014a08f$export$fc22b458daff1d0c)(data);
        }
    });
}
function $cc4ff3a23db2c1c1$export$65c6857c3f4da09a(comment_id) {
    // - ARE YOU SURE ? MODAL NEEDS TO BE ADDED FOR CONFIRMATION
    (0, $1a716a3e9014a08f$export$2e6e3ad634e3776)(comment_id);
}
function $cc4ff3a23db2c1c1$export$4dc8094a3ce8e4d4(ele, event) {
    event.preventDefault();
    event.stopPropagation();
    const user_id = localStorage.getItem("user_id");
    let data = {};
    data["user_id"] = user_id;
    data["comment_id"] = ele.dataset.comment_id;
    data["action_type"] = ele.dataset.action_type;
    (0, $1a716a3e9014a08f$export$f2e8b808565088b0)(data);
}
function $cc4ff3a23db2c1c1$export$c69a7e3627e11d2a(component) {
    if (component) {
        if (component.id == "remark_login_modal") {
            (0, $18a61f8fa6189451$export$c229772b99a4e439)(component);
            (0, $401e5251b5672128$export$245c1a748319b9de)();
        } else {
            (0, $18a61f8fa6189451$export$c229772b99a4e439)(component);
            (0, $401e5251b5672128$export$dd9c74687ae6eb45)();
        }
    }
}
function $cc4ff3a23db2c1c1$export$799b690d1790eee(e, formElement) {
    e.preventDefault();
    (0, $1462d0332aa03f78$export$692b4a7cc7a486ce)(formElement);
}
function $cc4ff3a23db2c1c1$export$56c97bdfc586d8b5(e, formElement) {
    e.preventDefault();
    (0, $1462d0332aa03f78$export$44c987e964dad812)(formElement);
}
function $cc4ff3a23db2c1c1$export$5c038338ec3229b7(ele) {
    (0, $18a61f8fa6189451$export$c229772b99a4e439)(ele);
}



const $4ccab26f1b142cf4$export$f5cfe9cd58390ad5 = `
    <div class="remark_standard_modal" id="remark_login_modal">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">Login</h3>
            <div class="remark_standard_modal_actions">
                <div class="remark_standard_modal_close_btn">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn" role="img" class="md hydrated" aria-label="close outline"></ion-icon>
                </div>
            </div>
        </div>
        <div class="remark_standard_modal_body">
            <form id="loginForm" class="remark_form">
                <div class="remark_form_fields">
                    <label for="username" class="remark_form_label">Username</label>
                    <input type="text" name="username" class="remark_form_input" id="username">
                </div>
                <div class="remark_form_fields">
                    <label for="password" class="remark_form_label">Password </label>
                    <input type="password" name="password" class="remark_form_input" id="password">
                </div>
                <div class="remark_form_fields">
                    <label for="authority" class="remark_form_label">Authority</label>
                    <input type="authority" name="authority" class="remark_form_input" id="authority">
                </div>
                <div class="remark_form_fields">
                    <button type="button" class="remark_standard_button" id="remark_login_button">Login</button>
                </div>
                <div class="remark_form_fields">
                <p>Don't have an account ? <span class="loginSignupSwitch" onclick="handleLoginSignupSwitch(remark_login_modal)">Sign up</span></p>
                </div>
            </form>
        </div>
    </div>
`;
const $4ccab26f1b142cf4$export$ecfd046c5f019e12 = `    
    <div class="remark_standard_modal" id="remark_signup_modal">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">Signup</h3>
            <div class="remark_standard_modal_actions">
                <div class="remark_standard_modal_close_btn">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn" role="img" class="md hydrated" aria-label="close outline"></ion-icon>
                </div>
            </div>
        </div>
        <div class="remark_standard_modal_body">
            <form id="signupForm" class="remark_form">
                <div class="remark_form_fields">
                    <label for="username" class="remark_form_label">Username</label>
                    <input type="text" name="username" class="remark_form_input" id="username">
                </div>
                <div class="remark_form_fields">
                    <label for="password" class="remark_form_label">Password </label>
                    <input type="password" name="password" class="remark_form_input" id="password">
                </div>
                <div class="remark_form_fields">
                    <label for="email_id" class="remark_form_label">Email ID</label>
                    <input type="email" name="email_id" class="remark_form_input" id="email_id">
                </div>
                <div class="remark_form_fields">
                    <label for="bio" class="remark_form_label">Bio</label>
                    <input name="bio" class="remark_form_input" id="bio">
                </div>
                <div class="remark_form_fields">
                    <button type="button" class="remark_standard_button" onclick="handleSignupUser(event, signupForm)">Sign Up</button>
                </div>
                <div class="remark_form_fields">
                <p>Already have an account ? <span class="loginSignupSwitch" onclick="handleLoginSignupSwitch(remark_signup_modal)">Login</span></p>
                </div>
            </form>
        </div>
    </div>

`;
const $4ccab26f1b142cf4$export$60c09197c1fd57e6 = (annotation_present)=>{
    let markup = "";
    if (annotation_present) markup = `
            <div class="remark_contextmenu_wrapper" id="remark_context_menu">
                <div class="remark_contextmenu_content">
                    <ul class="remark_contextmenu_menu_list">
                        <li class="remark_item" data-remark_contextmenu_option="open">
                            <ion-icon name="open-outline" class="uil uil remark_contextmenu_icon" data-remark_contextmenu_option="open"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="open">Open Annotation</span>
                        </li>
                        <li class="remark_item" data-remark_contextmenu_option="edit">
                            <ion-icon name="options-outline" class="uil uil remark_contextmenu_icon" data-remark_contextmenu_option="edit"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="edit">Edit Annotation</span>
                        </li>
                        <li class="remark_item" data-remark_contextmenu_option="delete">
                            <ion-icon name="trash-outline" class="uil uil remark_contextmenu_icon" data-remark_contextmenu_option="delete"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="delete">Delete Annotation</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    else markup = `
            <div class="remark_contextmenu_wrapper" id="remark_context_menu">
                <div class="remark_contextmenu_content">
                    <ul class="remark_contextmenu_menu_list">
                        <li class="remark_item">
                            <ion-icon name="add-outline" class="uil uil remark_contextmenu_icon"></ion-icon>
                            <span class="remark_context_menu_item_name" data-remark_contextmenu_option="create">Create Annotation</span>
                        </li>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    return markup;
};
const $4ccab26f1b142cf4$export$677e18af8a745d31 = (node_xpath, html_tag, html_class, html_id, html_text_content)=>{
    const authority = localStorage.getItem("user_authority");
    if (authority != "admin") return;
    if (html_class == "") html_class = null;
    if (html_id == "") html_id = null;
    if (html_text_content == "") html_text_content = null;
    const markup = `
        <div class="remark_standard_modal" id="remark_create_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Create Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="createAnnotationForm" class="remark_form">
                    <div class="remark_form_fields">
                        <label for="annotation_name" class="remark_form_label">Annotation Name</label>
                        <input type="text" name="annotation_name" class="remark_form_input" id="annotation_name">
                    </div>
                    <div class="remark_form_fields">
                        <label for="tags" class="remark_form_label">Tags ( Comma Separated )</label>
                        <input type="tags" name="tags" class="remark_form_input" id="tags">
                    </div>
                    <div class="remark_form_fields hide">
                        <label for="node_xpath" class="remark_form_label">Node XPath</label>
                        <input type="node_xpath" name="node_xpath" class="remark_form_input" id="node_xpath" value='${node_xpath}' readonly>
                    </div>
                    <div class="remark_form_fields hide">
                        <label for="html_tag" class="remark_form_label">Selected Node</label>
                        <input type="text" name="html_tag" class="remark_form_input" id="html_tag" value="${html_tag.toLowerCase()}" readonly>
                    <div class="remark_form_fields hide">
                        <label for="html_class" class="remark_form_label">HTML Node Class</label>
                        <input type="html_class" name="html_class" class="remark_form_input" id="html_class" value="${html_class}" readonly>
                    </div>
                    <div class="remark_form_fields hide">
                        <label for="html_id" class="remark_form_label">HTML Node ID</label>
                        <input type="html_id" name="html_id" class="remark_form_input" id="html_id" value="${html_id}" readonly>
                    </div>
                    </div>
                        <div class="remark_form_fields hide">
                        <label for="html_text_content" class="remark_form_label">HTML Text Content </label>
                        <input type="html_text_content" name="html_text_content" class="remark_form_input" id="html_text_content" value="${html_text_content}" readonly>
                    </div>
                    <div class="remark_form_fields">
                        <button class="remark_standard_button" type="button" id="remark_create_annotation_button">Create</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    return markup;
};
const $4ccab26f1b142cf4$export$c85da9ec7569e35c = (node_xpath)=>{
    const authority = localStorage.getItem("user_authority");
    if (authority != "admin") return;
    const annotations = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["annotations"];
    let curAnnotation;
    annotations.forEach((annotation)=>{
        if (annotation["node_xpath"] == node_xpath) curAnnotation = annotation;
    });
    const markup = `
        <div class="remark_standard_modal" id="remark_edit_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Edit Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_edit_annotation_modal)"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="editAnnotationForm" class="remark_form" data-annotation_id="${curAnnotation["annotation_id"]}">
                    <div class="remark_form_fields">
                        <label for="old_name" class="remark_form_label">Old Annotation Name</label>
                        <input type="text" name="old_name" class="remark_form_input" id="old_name" value="${curAnnotation["annotation_name"]}" readonly disabled>
                    </div>
                    <div class="remark_form_fields">
                        <label for="new_name" class="remark_form_label">New Annotation Name</label>
                        <input type="text" name="new_name" class="remark_form_input" id="new_name">
                    </div>
                    <div class="remark_form_fields">
                        <label for="old_tags" class="remark_form_label">Old Tags ( Comma Separated )</label>
                        <input type="text" name="old_tags" class="remark_form_input" id="old_tags" value="${curAnnotation["tags"]}" readonly disabled>
                    </div>
                    <div class="remark_form_fields">
                        <label for="new_tags" class="remark_form_label">New Tags ( Comma Separated )</label>
                        <input type="text" name="new_tags" class="remark_form_input" id="new_tags">
                    </div>
                    <div class="remark_form_fields">
                        <label for="annotation_id" class="remark_form_label</label>
                        <input type="text" name="annotation_id" class="remark_form_input" value=${curAnnotation["annotation_id"]} readonly>
                    </div>
                    <div class="remark_form_fields">
                        <button name="submit"  class="remark_standard_button" onclick="handleEditAnnotation(editAnnotationForm, event)">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    return markup;
};
const $4ccab26f1b142cf4$export$f1f180b010da0012 = (node_xpath)=>{
    const authority = localStorage.getItem("user_authority");
    if (authority != "admin") return;
    const annotations = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["annotations"];
    let curAnnotation;
    annotations.forEach((annotation)=>{
        if (annotation["node_xpath"] == node_xpath) curAnnotation = annotation;
    });
    const markup = `
        <div class="remark_standard_modal" id="remark_delete_annotation_modal">
            <div class="remark_standard_modal_header">
                <h3 class="remark_standard_modal_title">Delete Annotation</h3>
                <div class="remark_standard_modal_actions">
                    <div class="remark_standard_modal_close_btn">
                        <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_delete_annotation_modal)"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="remark_standard_modal_body">
                <form id="deleteAnnotationForm" class="remark_form" data-annotation_id="${curAnnotation["annotation_id"]}" data-annotation_name="${curAnnotation["annotation_name"]}" data-xpath='${node_xpath}' data-html_tag=${curAnnotation["html_tag"]} data-html_text_content="${curAnnotation["html_text_content"]}">
                    <div class="remark_form_fields">
                        <p style="font-size: 1.4rem;"> Are you sure you want to delete this annotation ? <span class="remark_" style="font-weight: 700;">This can not be undone.</span> 
                        Enter the annotation name to confirm : <span class="remark_" style="font-weight: 700;">${curAnnotation["annotation_name"]}</span>
                        
                        <input type="text" name="deleteConfirmation" class="remark_form_input" id="deleteConfirmation">
                    </div>
                    <div class="remark_form_fields">
                        <button name="submit"  class="remark_standard_button remark_delete_button" onclick="handleDeleteAnnotation(deleteAnnotationForm, event)">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    return markup;
};
const $4ccab26f1b142cf4$export$2ee9e5a3556c1e43 = (xpath)=>{
    const annotations = (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["annotations"];
    (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["currentXPath"] = xpath;
    let curAnnotation;
    annotations.forEach((annotation)=>{
        if (annotation["node_xpath"] == xpath) curAnnotation = annotation;
    });
    const annotation_name = curAnnotation["annotation_name"];
    const annotation_id = curAnnotation["annotation_id"];
    const comments = curAnnotation["comments"];
    const resolved = curAnnotation["resolved"];
    let comment_markup = "";
    let resolve_button_text = "";
    let c = "";
    if (resolved) {
        resolve_button_text = "Unresolve";
        c = "remark_unresolve_button";
    } else resolve_button_text = "Resolve";
    comments.forEach((comment)=>{
        const m = $4ccab26f1b142cf4$export$3b0cc8d4739e1636(comment);
        comment_markup += m;
    });
    const markup = `
        <div class="remark_standard_sidebar" id="remark_annotations_sidebar">
        <div class="remark_standard_modal_header">
            <h3 class="remark_standard_modal_title">${annotation_name}</h3>
            <div class="remark_standard_modal_actions">
                <button class="remark_standard_button remark_resolve_button ${c}" data-annotation_id="${annotation_id}" onclick="handleResolveAnnotation(this, event)" id="remark_annotation_resolve_button">
                    ${resolve_button_text}
                </button>
                <div class="remark_standard_modal_close_btn">
                    <ion-icon name="close-outline" id="remark_standard_modal_close_btn" onclick="handleCloseModal(remark_annotations_sidebar)"></ion-icon>
                </div>
            </div>
        </div>
        <div class="remark_standard_modal_body remark_standard_sidebar_body" id="remark_comments_body">
            ${comment_markup}
        </div>
        <div class="remark_annotation_user_input">
            <textarea placeholder="Text input" id="remark_comment_input" data-annotation_id=${annotation_id}></textarea>
            <span id="content_input_submit">
                <ion-icon name="paper-plane-outline" class="remark_" onclick="handleCreateComment(remark_comment_input)"></ion-icon>
            </span>
        </div>
    </div>
    `;
    return markup;
};
const $4ccab26f1b142cf4$export$3b0cc8d4739e1636 = (comment)=>{
    let d;
    if (comment["updated_at"]) d = comment["updated_at"];
    else d = comment["created_at"];
    let content_id = `${comment["comment_id"]}message`;
    let upvotes_id = `${comment["comment_id"]}upvotes`;
    let downvotes_id = `${comment["comment_id"]}downvotes`;
    const markup = `
        <div class="remark_annotation" id="${comment["comment_id"]}">
            <div class="remark_annotation_header">
                <div class="remark_annotation_user_profile">
                    <div class="remark_annotation_user_details">
                        <h4 class="remark_annotation_user_username">
                            ${comment["created_by"]}
                        </h4>
                        <span class="remark_annotation_user_last_modified">
                            Modified On : ${d}
                        </span>
                    </div>
                </div>
                <div class="remark_comment_actions">
                    <ion-icon name="create-outline" data-comment_id="${comment["comment_id"]}" onclick="handleEditComment(this, event)"></ion-icon>
                    <ion-icon name="trash-outline" id="${comment["comment_id"]}" onclick="handleDeleteComment(this.id)"></ion-icon>
                </div>
            </div>
            <div class="remark_annotation_user_message">
                <p id="${content_id}">${comment["content"]}</p>
            </div>
            <div class="remark_annotation_vote">
                <span class="remark_annotation_vote_option">
                    <p id="${upvotes_id}">${comment["upvotes"]}</p>
                    <ion-icon name="arrow-up-outline" onclick="handleCommentUpvote(this, event)" data-comment_id="${comment["comment_id"]}" data-action_type="upvote"></ion-icon>
                </span>
                <span class="remark_annotation_vote_option">
                    <p id="${downvotes_id}">${comment["downvotes"]}</p>
                    <ion-icon name="arrow-down-outline" onclick="handleCommentUpvote(this, event)"data-comment_id="${comment["comment_id"]}" data-action_type="downvote"></ion-icon>
                </span>
            </div>
        </div>
    `;
    return markup;
};






function $3eead4b93c22c35d$export$9826392fdcbe3593(e, data) {
    const body = document.getElementsByTagName("body")[0];
    const contextMenuMarkup = (0, $4ccab26f1b142cf4$export$60c09197c1fd57e6)(data["annotation_present"]);
    body.insertAdjacentHTML("afterbegin", contextMenuMarkup);
    const contextMenu = document.getElementById("remark_context_menu");
    const posX = e.clientX;
    const posY = e.clientY;
    $3eead4b93c22c35d$export$d008d9b759c1cf1f(contextMenu, posX, posY);
    contextMenu.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const option = e.target.dataset.remark_contextmenu_option;
        $3eead4b93c22c35d$export$93cedd1d63aaca9f(option, data);
        if (contextMenu) setTimeout(()=>{
            (0, $18a61f8fa6189451$export$c229772b99a4e439)(contextMenu);
        }, 100);
    });
}
function $3eead4b93c22c35d$export$d008d9b759c1cf1f(contextMenu, x, y) {
    const i = contextMenu.style;
    i.top = `${y + 20}px`;
    i.left = `${x - 40}px`;
    i.visibility = "visible";
    i.opacity = "1";
}
function $3eead4b93c22c35d$export$93cedd1d63aaca9f(option, data) {
    (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["currentXPath"] = data["xpath"];
    (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["currentNode"] = data["node"];
    switch(option){
        case "open":
            console.log("OPENING SIDEBAR", data["xpath"]);
            (0, $401e5251b5672128$export$40be53e378c97146)(data["xpath"]);
            break;
        case "create":
            if ((0, $1462d0332aa03f78$export$fc970ed23da99565)()) (0, $401e5251b5672128$export$592d9b2be066ea35)(data["node"], data["tag"], data["className"].replace("highlight_element_light", ""), data["id"], data["textContent"]);
            else (0, $fd3a760e313b8296$export$de026b00723010c1)("INTIMATION", "Create annotation option is for admins only !", 2);
            break;
        case "edit":
            if ((0, $1462d0332aa03f78$export$fc970ed23da99565)()) (0, $401e5251b5672128$export$a144fbac6e7cc210)(data["node"], data["tag"], data["id"], data["textContent"]);
            else (0, $fd3a760e313b8296$export$de026b00723010c1)("INTIMATION", "Edit annotation option is for admins only !", 2);
            break;
        case "delete":
            if ((0, $1462d0332aa03f78$export$fc970ed23da99565)()) (0, $401e5251b5672128$export$7f4bf70cd335a417)(data["node"], data["tag"], data["id"], data["textContent"]);
            else (0, $fd3a760e313b8296$export$de026b00723010c1)("INTIMATION", "Delete annotation option is for admins only !", 2);
            break;
        default:
            break;
    }
}







async function $05710fca1e88f8c9$export$c807668e63e7354b(key) {
    const url = `${(0, $af38c480052fd5ae$export$37b96ba04a8c05d1)}/api/token/verify/${key}`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return data;
}





window.addEventListener("load", (e)=>{
    e.preventDefault();
    $c49300cd12bc6870$var$remark_init();
});
function $c49300cd12bc6870$var$remark_init() {
    const body = document.getElementsByTagName("body")[0];
    const remark_started = localStorage.getItem("remark_started");
    // 1. Register the styles and scripts (for icons)
    $c49300cd12bc6870$var$registerStyles();
    $c49300cd12bc6870$var$registerScripts();
    // 2. Add the START button
    const remark_markup = `
        <div class="remark_init_container">
            <span class="remark_init_text">REMARK</span>
            <button type="button" class="remark_standard_button remark_init_button" id="remark_start">Start Annotation</button>
        </div>
    `;
    body.insertAdjacentHTML("afterbegin", remark_markup);
    document.getElementById("remark_start").addEventListener("click", (e)=>{
        e.preventDefault();
        // 1. Check if user is logged in and verify his/her authority 
        if (remark_started) {
            const loginStatus = (0, $1462d0332aa03f78$export$256a5a3564694cfc)();
            if (!loginStatus) {
                document.querySelector(".remark_init_container").classList.add("remark_init_container_resize");
                (0, $401e5251b5672128$export$dd9c74687ae6eb45)();
            } else {
                console.log("REMARK STARTED");
                $c49300cd12bc6870$var$startAnnotationProcess();
                document.getElementById("remark_start").textContent = "Stop Annotation";
                $c49300cd12bc6870$var$repositionStart();
            }
        } else {
            document.querySelector(".remark_init_container").classList.remove("remark_init_container_resize");
            document.getElementById("remark_start").textContent = "Start Annotation";
            localStorage.setItem("remark_started", true);
        }
    });
}
function $c49300cd12bc6870$var$remark_destroy() {
    return;
}
function $c49300cd12bc6870$var$registerStyles() {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet) styleElement.styleSheet.cssText = (0, $4f12fe73e0deabbb$export$2e2bcd8739ae039);
    else styleElement.appendChild(document.createTextNode((0, $4f12fe73e0deabbb$export$2e2bcd8739ae039)));
    document.getElementsByTagName("head")[0].appendChild(styleElement);
}
function $c49300cd12bc6870$var$registerScripts() {
    const icons = document.createElement("script");
    icons.setAttribute("src", "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js");
    document.head.appendChild(icons);
}
function $c49300cd12bc6870$var$repositionStart() {
    const ele = document.querySelector(".remark_init_container");
    ele.classList.add("remark_init_container_resize");
}
async function $c49300cd12bc6870$var$startAnnotationProcess() {
    const remarkScriptTag = document.getElementById("remark_annotation_script");
    // 1. Check for API_KEY
    const api_key = remarkScriptTag.dataset.api_key;
    if (!api_key || api_key == "") {
        (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Invalid API KEY", 1);
        return;
    } else (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["api_key"] = api_key;
    // 2. Verify API_KEY
    const token_status = await (0, $05710fca1e88f8c9$export$c807668e63e7354b)(api_key);
    if (token_status.status != 200) {
        (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Error in token verification");
        return;
    }
    // 3. Load and render existing annotations if any
    website_id = remarkScriptTag.dataset.website_id;
    if (!website_id || website_id == "") (0, $fd3a760e313b8296$export$de026b00723010c1)("ERROR", "Invalid website ID");
    else (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["website_id"] = website_id;
    const annotations = await (0, $41fbc3b1898586d3$export$d32fca31e5b6ceec)(website_id, api_key);
    console.log(annotations);
    if (annotations.length > 0) {
        (0, $9bdae1cc374cba8f$export$1b94e36de2b67148)["annotations"] = annotations;
        (0, $401e5251b5672128$export$1d36b8466b2a4d4c)();
    }
    // 4. (ADMIN ONLY) Start the highlight process
    if ((0, $1462d0332aa03f78$export$fc970ed23da99565)()) (0, $18a61f8fa6189451$export$1656970ae4fe6f6e)();
    // 5. (ADMIN ONLY) Handle contextmenu event for highlighted element
    document.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const node = e.target;
        const className = node.className;
        const tag = node.tagName;
        const textContent = node.textContent;
        const id = node.id;
        const contextMenu = document.getElementById("remark_context_menu");
        if (contextMenu) (0, $18a61f8fa6189451$export$c229772b99a4e439)(contextMenu);
        if (className) {
            if (className.includes("remark_")) return;
        }
        if (className.includes("highlight_element_light")) {
            if ((0, $af38c480052fd5ae$export$78b464efab6cd2cc).includes(tag)) {
                let xpath = (0, $18a61f8fa6189451$export$987805c7826bea7f)(node);
                xpath = `//${xpath.toLowerCase()}`;
                const contextMenuData = {
                    node: node,
                    xpath: xpath,
                    tag: tag,
                    className: className,
                    textContent: textContent,
                    id: id,
                    "annotation_present": false
                };
                (0, $3eead4b93c22c35d$export$9826392fdcbe3593)(e, contextMenuData);
            }
        } else if (className.includes("highlight_element_strong")) {
            if ((0, $af38c480052fd5ae$export$78b464efab6cd2cc).includes(tag)) {
                let xpath1 = (0, $18a61f8fa6189451$export$987805c7826bea7f)(node);
                xpath1 = `//${xpath1.toLowerCase()}`;
                const contextMenuData1 = {
                    node: node,
                    xpath: xpath1,
                    tag: tag,
                    className: className,
                    "annotation_present": true
                };
                (0, $3eead4b93c22c35d$export$9826392fdcbe3593)(e, contextMenuData1);
            }
        }
    });
    document.addEventListener("keydown", (e)=>{
        if (e.key == "Escape") (0, $18a61f8fa6189451$export$7743824edd59500d)();
    });
}














0, $9bdae1cc374cba8f$export$1b94e36de2b67148;


//# sourceMappingURL=main.js.map
