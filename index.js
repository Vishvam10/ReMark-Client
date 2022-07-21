//- INITIALIZE

window.addEventListener("load", (e) => {
    e.preventDefault()
    init();
})

function init() {
    const body = document.getElementsByTagName('body')[0];

    // 1. Register the styles
    registerStyles();

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

        // 1. Check if user is logged in and verify his/her authority 
        const loginStatus = isLoggedIn();

        if (!loginStatus) {
            body.insertAdjacentHTML("afterbegin", LOGIN_MARKUP);
            const loginForm = document.getElementById("loginForm");

            const loginBtn = document.getElementById("loginBtn");
            loginBtn.addEventListener("click", (e) => {
                e.preventDefault();
                loginUser(loginForm);
            })
        } else {
            startAnnotationProcess();
        }
    });

}

function registerStyles() {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = STYLES;
    } else {
        styleElement.appendChild(document.createTextNode(STYLES));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
}

async function startAnnotationProcess() {
    // const body = document.getElementsByTagName('body')[0];
    const remarkScriptTag = document.getElementById("remark_annotation_script");

    console.log("REMARK STARTED");


    // 1. Check for API_KEY
    let api_key = remarkScriptTag.dataset.api_key;

    if ((!api_key) || (api_key == "")) {
        //- ERROR HANDLING REQUIRED
        console.log("Invalid API KEY");
    }

    // 2. Verify API_KEY
    const token_status = await verifyToken(api_key);
    if (token_status.status != 200) {
        //- ERROR HANDLING REQUIRED
        console.log("ERROR IN TOKEN VERIFICATION");
        return -1;
    }


    // NOTE : Fetch the user preferences - Use a modal or a dediated sidebar, whichever is present as the option. Use dark theme variants if dark theme is enabled

    // getUserPrefence()

    dark_theme = false
    layout = "modal"

    // 3. Load and render existing annotations if any
    const website_id = remarkScriptTag.dataset.website_id
    if ((!website_id) || (website_id == "")) {
        //- ERROR HANDLING REQUIRED
        console.log("Invalid website ID");
    }

    const annotations = getAnnotationByWebsiteID(website_id, api_key);

    if (annotations.length > 0) {
        //- renderAnnotations()

        // If there are, use render the no. of comments as a bubble 
        // and upon clicking, use a modal to load the annotation's 
        // comments. 

        // This would also have the input for adding new comments. 
        // Upon submission, refresh the UI
    }



    // 4. (ADMIN ONLY) Start the highlight process

    console.log("STARTING HIGHLIGHT PROCESS . . .");
    highlightElements()





    // 5. (ADMIN ONLY) Handle click event for highlighted element


    //  If it is a new annotation, create the empty modal where users can add comments.


    // 6. (USERS) Handle the ADD, EDIT and DELETE methods for comments

    // Parse Markdown as well

    // 7. (USERS AND ADMIN) Handle upvotes and downvotes of comments



    // 8. (ADMIN ONLY) Handle RESOLVED event


    // 9. 



}


function highlightElements() {
    document.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const tag = e.target.tagName;
        if (VALID_HTML_ELEMENTS.includes(tag)) {
            const targetHTMLElement = e.target;
            targetHTMLElement.classList.toggle("remark_annotation_border");
        }
    });
    document.addEventListener("mouseout", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const tag = e.target.tagName;
        if (VALID_HTML_ELEMENTS.includes(tag)) {
            const targetHTMLElement = e.target;
            targetHTMLElement.classList.toggle("remark_annotation_border");
        }
    });
    document.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const tag = e.target.tagName;
        if (VALID_HTML_ELEMENTS.includes(tag)) {
            const targetHTMLElement = e.target;
            console.log(targetHTMLElement);
            if (e.ctrlKey) {
                console.log("CTRL + CLICKED . . .");
            }

        }
    });
}