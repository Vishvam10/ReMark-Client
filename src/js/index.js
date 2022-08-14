import STYLES from "./styles";
import { highlightElements, removeHTMLElement, removeAllExistingModals, getNodeXpath } from "./utils";
import { overrideContextMenu } from "./contextmenu"

import { remarkGlobalData } from "./global";
import { VALID_HTML_ELEMENTS } from "./constants";
import { renderLoginModal, renderExistingAnnotations } from "./render"
import { getAnnotationByWebsiteID } from "./annotationAPI";
import { verifyToken } from "./tokenAPI";
import { isLoggedIn, isAdmin, logout  } from "./auth";

import { showAlert } from "./alert";
import * as handlers from "./handlers"


window.addEventListener("load", (e) => {
    e.preventDefault();
    remark_init();
})


function remark_init() {
    
    registerStyles();
    registerScripts();

    const body = document.getElementsByTagName('body')[0];
    const remark_started = localStorage.getItem("remark_started");

    let remark_login_button_text = "Login";
    if(isLoggedIn()) {
        remark_login_button_text = "Logout"
    }

    const remark_markup =
        `
        <div class="remark_init_container">
            <span class="remark_init_text">REMARK</span>
            <button type="button" class="remark_standard_button remark_init_button remark_login_button" id="remark_login_button">${remark_login_button_text}</button>
            <button type="button" class="remark_standard_button remark_init_button" id="remark_start">Start Annotation</button>
        </div>
    `
    body.insertAdjacentHTML("afterbegin", remark_markup);
    document.getElementById("remark_login_button").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
                
        if(e.target.innerText == "Logout") {
            e.target.innerText = "Login";
            logout();
            return;
        }
        else if(e.target.innerText == "Login") {
            const login_modal_check = document.getElementById("remark_login_modal");
    
            if(login_modal_check) {
                return;
            }
            renderLoginModal();
        } else {
            return;
        }
    })

    document.getElementById('remark_start').addEventListener("click", (e) => {
        e.preventDefault();

        // 1. Check if user is logged in and verify his/her authority 

        if (remark_started) {
            const loginStatus = isLoggedIn();
            if (!loginStatus) {
                document.querySelector(".remark_init_container").classList.add("remark_init_container_resize");
                renderLoginModal();
            } else {
                console.log("REMARK STARTED");
                startAnnotationProcess();
                document.getElementById('remark_start').textContent = "Stop Annotation";
                repositionStart();
            }
        } else {
            document.querySelector(".remark_init_container").classList.remove("remark_init_container_resize");
            document.getElementById('remark_start').textContent = "Start Annotation";
            localStorage.setItem("remark_started", true);
        }


    });

}

function remark_destroy() {
    return;
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
    const icons = document.createElement("script");
    icons.setAttribute("src", "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js");
    document.head.appendChild(icons);
}

function repositionStart() {
    const ele = document.querySelector(".remark_init_container");
    ele.classList.add("remark_init_container_resize");
}

async function startAnnotationProcess() {
    const remarkScriptTag = document.getElementById("remark_annotation_script");

    // 1. Check for API_KEY
    const api_key = remarkScriptTag.dataset.api_key;

    if ((!api_key) || (api_key == "")) {
        showAlert("ERROR", "Invalid API KEY", 1);
        return;
    } else {
        remarkGlobalData["api_key"] = api_key;
    }

    // 2. Verify API_KEY
    const token_status = await verifyToken(api_key);
    if (token_status.status != 200) {
        showAlert("ERROR", "Error in token verification");
        return;
    }

    // 3. Load and render existing annotations if any
    website_id = remarkScriptTag.dataset.website_id
    if ((!website_id) || (website_id == "")) {
        showAlert("ERROR", "Invalid website ID");
    } else {
        remarkGlobalData["website_id"] = website_id; 
    }

    const annotations = await getAnnotationByWebsiteID(website_id, api_key);

    if (annotations.length > 0) {
        remarkGlobalData["annotations"] = annotations;
        renderExistingAnnotations();
    }

    // 4. (ADMIN ONLY) Start the highlight process
    if (isAdmin()) {
        highlightElements();
    }

    // 5. (ADMIN ONLY) Handle contextmenu event for highlighted element

    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();

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
    });

    document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            removeAllExistingModals();
        }
    });


}