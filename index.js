//- INITIALIZE

var remarkGlobalData = {
    "website_id": "",
    "api_key": "",
    "annotations": [],
    "theme": "light",
    "currentXPath": "",
}

window.addEventListener("load", (e) => {
    e.preventDefault()
    init();
})

function init() {
    const body = document.getElementsByTagName('body')[0];
    // const em = errorModal("ERROR", "Please enter a correct value !");
    // body.insertAdjacentHTML("afterbegin", em)

    // 1. Register the styles and scripts (for icons)
    registerStyles();
    registerScripts();

    // 2. Add the START button
    const remark_markup =
        `
        <div class="remark_init_container">
        <span id="remark_init_text"><b>ReMark</b></span>
        <button type="button" class="remark_standard_button remark_init_button" id="remark_start">Start Annotation</button>
        </div>
    `
    body.insertAdjacentHTML("afterbegin", remark_markup);
    document.getElementById('remark_start').addEventListener("click", (e) => {
        e.preventDefault();

        // 1. Check if user is logged in and verify his/her authority 
        const loginStatus = isLoggedIn();

        if (!loginStatus) {
            renderLoginModal();
        } else {
            // if (isAdmin()) {
            startAnnotationProcess();
            document.getElementById('remark_start').textContent = "Stop Annotation"
                // }
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

function registerScripts() {
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("src", "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js");
    document.head.appendChild(scriptElement);
}

async function startAnnotationProcess() {
    const remarkScriptTag = document.getElementById("remark_annotation_script");

    console.log("REMARK STARTED");

    // 1. Check for API_KEY
    const api_key = remarkScriptTag.dataset.api_key;

    if ((!api_key) || (api_key == "")) {
        //- ERROR HANDLING REQUIRED
        console.log("Invalid API KEY");
    } else {
        remarkGlobalData["api_key"] = api_key;
    }

    // 2. Verify API_KEY
    const token_status = await verifyToken(api_key);
    if (token_status.status != 200) {
        //- ERROR HANDLING REQUIRED
        console.log("ERROR IN TOKEN VERIFICATION");
        return -1;
    }

    // 3. Load and render existing annotations if any
    website_id = remarkScriptTag.dataset.website_id
    if ((!website_id) || (website_id == "")) {
        //- ERROR HANDLING REQUIRED
        console.log("Invalid website ID");
    }

    const annotations = await getAnnotationByWebsiteID(website_id, api_key);

    if (annotations.length > 0) {
        remarkGlobalData["annotations"] = annotations;
        renderExistingAnnotations();
    }

    // 4. (ADMIN ONLY) Start the highlight process
    console.log("STARTING HIGHLIGHT PROCESS . . .");
    if (isAdmin()) {
        highlightElements();
    }


    // 5. (ADMIN ONLY) Handle contextmenu event for highlighted element

    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("CONTEXT MENU : ", e);

        const node = e.target;
        const className = node.className;
        const tag = node.tagName;
        const textContent = node.textContent;
        const id = node.id;

        const contextMenu = document.getElementById("remark_context_menu");

        if (contextMenu) {
            removeHTMLElement(contextMenu);
        }

        if (className) {
            if (className.includes("remark_")) {
                return;
            }
        }
        if (className.includes("highlight_element_light")) {
            console.log("IN LIGHT");
            if (VALID_HTML_ELEMENTS.includes(tag)) {

                let xpath = getNodeXpath(node);
                xpath = `//${xpath.toLowerCase()}`

                const contextMenuData = {
                    node,
                    xpath,
                    tag,
                    className,
                    textContent,
                    id,
                    "annotation_present": false
                }

                overrideContextMenu(e, contextMenuData);
            }

        } else if (className.includes("highlight_element_strong")) {
            console.log("IN STRONG");
            if (VALID_HTML_ELEMENTS.includes(tag)) {

                let xpath = getNodeXpath(node);
                xpath = `//${xpath.toLowerCase()}`

                const contextMenuData = {
                    node,
                    xpath,
                    tag,
                    className,
                    "annotation_present": true
                }

                overrideContextMenu(e, contextMenuData);
            }
        }
    })


    document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            const create_modal_check = document.getElementById("remark_create_annotation_modal");

            const edit_modal_check = document.getElementById("remark_edit_annotation_modal");

            const delete_modal_check = document.getElementById("remark_delete_annotation_modal");

            const sidebar_check = document.getElementById("remark_annotations_sidebar");

            const login_modal_check = document.getElementById("remark_login_modal");

            const signup_modal_check = document.getElementById("remark_signup_modal");

            const context_menu_check = document.getElementById("remark_context_menu");

            if (create_modal_check) {
                removeHTMLElement(create_modal_check);
            }
            if (edit_modal_check) {
                removeHTMLElement(edit_modal_check);
            }
            if (delete_modal_check) {
                removeHTMLElement(delete_modal_check);
            }
            if (sidebar_check) {
                removeHTMLElement(sidebar_check);
            }
            if (login_modal_check) {
                removeHTMLElement(login_modal_check);
            }
            if (signup_modal_check) {
                removeHTMLElement(signup_modal_check);
            }
            if (context_menu_check) {
                removeHTMLElement(context_menu_check);
            }
        }
    })


}