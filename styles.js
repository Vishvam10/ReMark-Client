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
    font-size: 1.6rem;
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
    font-size: 1.2rem;
    color: grey;
}

ion-icon[name="create-outline"] {
    font-size: 1.2rem;
    color: #0d6efd;
}

ion-icon[name="trash-outline"] {
    font-size: 1.2rem;
    color: #0d6efd;
}

ion-icon[name="ellipsis-horizontal-outline"] {
    font-size: 1.2rem;
}

ion-icon[name="paper-plane-outline"] {
    font-size: 2rem;
    rotate: 45deg;
    /* color: #0d6efd; */
}

ion-icon[name="paper-plane-outline"]:hover {
    font-size: 2rem;
    rotate: 45deg;
    color: #0d6efd;
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
    height: 20rem;
}

/* 
    ********************* ANNOTATIONS *********************
*/

.annotation {
    /* margin: 1rem 0rem 0rem 0rem; */
    height: auto;
    padding: 1rem;
    /* border-radius: 1rem; */
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
    /* background-color: palevioletred; */
}

.annotation_header {
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

.annotation_actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    /* background-color: #0d6efd; */
}

.annotation_reply {
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

.user_profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40%;
    width: 80%;
}

.user_image {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 2rem;
}

.user_details {
    width: 86%;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: 100%;
    color: gray;
}

.user_username {
    font-size: 1.2rem;
    margin: 0rem 0rem 0.4rem 0rem;
}

.user_last_modified {
    font-weight: normal;
    font-size: 0.8rem;
}

.user_message {
    width: 80%;
    margin: -1rem 0rem 0rem 0rem;
    color: grey;
    padding: 0rem 0rem 0rem 1rem;
}


/* 
    ********************* INPUT *********************
*/

.user_input {
    /* background-color: black; */
    margin: 1rem 0rem 0rem 1rem;
    width: 80%;
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

.form_input {
    padding: 1rem 2rem 1.2rem 1rem;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 0.8rem;
    width: 100%;
    border-radius: 0.6rem;
    background-color: white;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    outline: 0px !important;
    margin: 0.4rem 0rem 1rem 0rem;
    transition: border 0.2s ease-in;
    border: 0.5px solid rgb(142, 142, 142);
    font-size: 0.8rem;
}

.form_input:focus {
    border: 0.5px solid #0d6efd;
}

.form_label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    color: grey;
}

.form_submit {
    width: 8rem;
    height: 3rem;
    margin: 2rem 0rem 1rem 0rem;
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

.remark_annotation_border {
    border: dashed 2px grey;    
}

`