//- INITIALIZE

const styles = `

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

    .modal {
        width: 40rem;
        height: 40rem;
        font-family: Arial, Helvetica, sans-serif;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        border-radius: 1rem;
    }

    .modal_header {
        padding: 1rem;
        height: 5%;
        min-height: 2rem;
        max-height: 4rem;
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 1rem 1rem 0rem 0rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        /* background-color: red; */
    }

    .modal_actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 10%;
        /* background-color: #0d6efd; */
    }

    .modal_title {
        display: flex;
        flex-direction: row;
        justify-content: start;
        width: 70%;
        word-wrap: break-word;
        /* background-color: gold; */
        padding: 1rem;
    }

    .modal_body {
        /* background-color: green; */
        padding: 2rem;
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

`

window.addEventListener("load", (e) => {
    e.preventDefault()
    init();
})

function init() {
    const body = document.getElementsByTagName('body')[0];
    console.log(body);

    // 1. Register the styles
    registerStyles(styles);

    // 2. Add the START button
    const remark_markup =
        `
            <div class="start_container">
                <span class="user_message"><b>ReMark</b></span>
                <button type="button" class="btn" id="remark_start">Start Annotation</button>
            </div>
    `
    body.insertAdjacentHTML("afterbegin", remark_markup);

    document.getElementById('remark_start').addEventListener("click", (e) => {
        e.preventDefault();
        startAnnotationProcess();
    })

}

function registerStyles(CSSCode) {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = CSSCode;
    } else {
        styleElement.appendChild(document.createTextNode(CSSCode));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
}

function startAnnotationProcess() {


    // 1. Check if user is logged in and verify his/her authority 




    // 2. Check for API_KEY
    // let api_key = document.getElementById("remark_annotation_script").dataset.api_key;





    // NOTE : Fetch the user preferences - Use a modal or a dediated sidebar, whichever is present as the option. Use dark theme variants if dark theme is enabled


    // 3. Load and render existing annotations if any



    // If there are, use render the no. of comments as a bubble 
    // and upon clicking, use a modal to load the annotation's 
    // comments. 

    // This would also have the input for adding new comments. 
    // Upon submission, refresh the UI


    // 4. (ADMIN ONLY) Start the highlight process



    // 5. (ADMIN ONLY) Handle click event for highlighted element


    //  If it is a new annotation, create the empty modal where users can add comments.


    // 6. (USERS) Handle the ADD, EDIT and DELETE methods for comments

    // Parse Markdown as well

    // 7. (USERS AND ADMIN) Handle upvotes and downvotes of comments



    // 8. (ADMIN ONLY) Handle RESOLVED event


    // 9. 



}