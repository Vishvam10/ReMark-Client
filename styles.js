const STYLES = `

:root {
    --color-primary: #5ec576;
    --color-secondary: #ffcb03;
    --color-tertiary: #ff585f;
    --color-primary-darker: #4bbb7d;
    --color-secondary-darker: #ffbb00;
    --color-tertiary-darker: #fd424b;
    --color-primary-opacity: #5ec5763a;
    --color-secondary-opacity: #ffcd0331;
    --color-tertiary-opacity: #ff58602d;
    --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
    --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);
    --box-shadow: box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}

ion-icon {
    font-size: 2rem;
    color: grey;
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
    // font-size: 1.2rem;
    color: grey;
}

ion-icon[name="create-outline"] {
    font-size: 1.6rem;
}

ion-icon[name="create-outline"]:hover {
    color: #0d6efd;
}

ion-icon[name="trash-outline"] {
    font-size: 1.6rem;
}

ion-icon[name="trash-outline"]:hover {
    color: var(--color-tertiary);
}

ion-icon[name="ellipsis-horizontal-outline"] {
    font-size: 1.6rem;
}

ion-icon[name="paper-plane-outline"] {
    font-size: 2.8rem;
    rotate: 45deg;
    /* color: #0d6efd; */
}

ion-icon[name="paper-plane-outline"]:hover {
    font-size: 3.2rem;
    rotate: 45deg;
    color: #0d6efd;
}

ion-icon[name="arrow-up-outline"] {
    font-size: 1.6rem;
    margin: 0rem 0rem -0.3rem 0.4rem;
}

ion-icon[name="arrow-up-outline"]:hover {
    font-size: 1.8rem;
    color: var(--color-primary);
}

ion-icon[name="arrow-down-outline"] {
    font-size: 1.6rem;
    margin: 0rem 0rem -0.3rem 0.4rem;
}

ion-icon[name="arrow-down-outline"]:hover {
    font-size: 1.8rem;
    color: var(--color-tertiary);
}

mark {
    background-color: yellow;
    color: black;
}

.hide {
    display: none;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
}

/*
    ********************* MODAL *********************
*/

.remark_standard_modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40rem;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
    z-index: 1000;
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
    border-bottom: 1px solid #e8e8e8;
    border-radius: 1rem 1rem 0rem 0rem;
}

.remark_standard_modal_actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20%;
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
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
    z-index: 1000;
    height: 72rem;
    background: white;
    padding: 1rem;
    animation: sidebar_animation 0.6s;
}

@keyframes sidebar_animation {
    from {
        width: 0px;
    }
    to {
        width: 52rem;
    }
  }
}

/* 
    ********************* ANNOTATIONS *********************
*/


.resolve_btn {
    background-color: var(--color-primary);
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
    background-color: var(--color-primary-darker);
}

.remark_annotation {
    margin: 1.6rem 0rem 2rem 0rem;
    height: auto;
    padding: 1rem;
    border: 1px solid #e8e8e8;
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
    /* background-color: red; */
}

.remark_comment_actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    /* background-color: #0d6efd; */
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
    box-shadow: rgb(120 123 127 / 20%) 0px 8px 16px;
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
    color: gray;
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
    color: grey;
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
    ********************* INPUT *********************
*/

textarea {
    padding: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 6rem;
    width: 90%;
    border-radius: 1.4rem;
    background-color: white;
    resize: none;
    overflow-y: scroll;
    outline: 0px !important;
    scrollbar-width: none;
    margin: 1rem;
    transition: transform 0.2s ease-in;
    border: 1px solid #9c9c9c;
}

textarea:hover {
    border: 0.5px solid #444444;
}

textarea:focus {
    border: 0.5px solid #0d6efd;
}

.remark_standard_sidebar_body {
    height: 80%;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
}

.remark_annotation_user_input {
    /* background-color: black; */
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
    background-color: white;
    box-shadow: rgb(120 123 127 / 20%) 0px 8px 16px;
    border-radius: 1rem;
    padding: 2rem;
}

#loginForm {
    width: 80%;
}

#createCommentForm {
    width: 100%;
}

.remark_form_fields {
    margin: 1.6rem 0rem 0rem 0rem;
}

.remark_form_input {
    padding: 1rem 2rem 1.2rem 1rem;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 4rem;
    width: 100%;
    border-radius: 0.6rem;
    background-color: white;
    border: none;
    outline: 0px !important;
    margin: 0.4rem 0rem 1rem 0rem;
    transition: border 0.2s ease-in;
    border: 0.5px solid rgb(142, 142, 142);
    font-size: 1.2rem;
    color: grey;
}

.remark_form_input:focus {
    border: 0.5px solid #0d6efd;
}

.remark_form_label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    color: grey;
}

.remark_standard_button {
    background-color: var(--color-primary);
    font-size: 1.6rem;
    font-family: inherit;
    font-weight: 500;
    border: none;
    padding: 1.25rem 4.5rem;
    border-radius: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
    margin: 3rem 0rem 2rem 0rem;
    width: 100%;   
}

.remark_standard_button:hover {
    transform: scale(1.05);
}

.remark_standard_button:active {
    transform: scale(1.0);
}

.error_modal {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.4rem;
    height: auto;
    width: 20rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius: 0.4rem;
    padding: 0.8rem 1.4rem 1rem 1.6rem;
    color: white;
}

.highlight_element_light {
    outline: dashed 2px grey;    
    border-radius: 0.4rem;
    padding: 0.4rem;
}

.highlight_element_strong {
    outline: 2.8px solid var(--color-primary);
    border-radius: 0.4rem;
    padding: 0.4rem;
}

.remark_contextmenu_wrapper {
    visibility: hidden;
    position: fixed;
    width: 20rem;
    height: 24rem;
    border-radius: 1rem;
    background: #fff;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
    font-family: Arial, Helvetica, sans-serif;
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
    justify-content: space-between;
}

.remark_item {
    list-style: none;
    font-size: 1rem;
    height: 3.2rem;
    display: flex;
    width: 98%;
    cursor: pointer;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0 0.3125rem 0 0.625rem;
    transition: background, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin: 0.4rem 0rem 0.4rem 0rem;
}

.remark_contextmenu_icon {
    font-size: 1.6rem !important;
    color: grey !important;
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
    color: grey;
}

`