export const STYLES = `

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
        width: 40rem;
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

    .remark_login_button {
        width: max-content !important;
        border: 2px solid var(--remark-color-primary) !important;background: var(--remark-color-white) !important;
        color: var(--remark-color-primary) !important;
    }

    .remark_login_button:hover {
        background:  var(--remark-color-primary) !important;
        color: var(--remark-color-white) !important;
    }
    
    .remark_disabled_button {
        background:  var(--remark-color-primary-lighter) !important;
        color: var(--remark-color-white) !important;
        pointer-events: none;
        cursor: not-allowed;
    }

    /*
        ********************* MODAL *********************
    */

    .remark_error_container {
        width: 40rem;
        background: var(--remark-color-white);
        padding: 2.6rem;
        height: auto;
        border-radius: 1.6rem;
        position: fixed;
        z-index: 100000000;
        bottom: 3.2rem;
        left: 36%;
        display: flex;
        box-shadow: var(--remark-default-box-shadow);
        font-size: 1.6rem;
        font-weight: 500;
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
        width: 96%;
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
        left: 47%;
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
        font-size: 1.4rem;
        font-weight: 700;
        margin: 1rem 0rem 0.4rem 0rem;
    }

    .remark_annotation_user_last_modified {
        font-weight: 500;
        font-size: 1.1rem;
        margin: 0.2rem 0rem 0rem 0.1rem;
    }

    .remark_annotation_user_message {
        width: 97%;
        margin: 2rem 0rem 1rem 0rem;
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
        margin: 1rem 0rem 1rem 0rem;
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

    .remark_delete_annotation_form_field {
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin: 3rem 1rem 3rem 0rem;   
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

    .remark_delete_button:hover {
        background-color: var(--remark-color-danger) !important;
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

    .remark_unresolve_button:hover {
        background-color: var(--remark-color-danger) !important;
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