import { remarkGlobalData } from "./global";
import { VALID_HTML_ELEMENTS } from "./constants";

import { renderExistingAnnotations } from "./render";

import { getAnnotationByWebsiteID } from "./annotationAPI";
import { verifyToken } from "./tokenAPI";
import { isAdmin } from "./auth";

import { highlightElements, removeHTMLElement, removeAllExistingModals } from "./utils/dom_operations";
import { contextMenuListener } from "./utils/dom_listeners";
import { showAlert } from "./alert";

export async function startAnnotationProcess() {
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
    const website_id = remarkScriptTag.dataset.website_id;
    if ((!website_id) || (website_id == "")) {
        showAlert("ERROR", "Invalid website ID");
    } else {
        remarkGlobalData["website_id"] = website_id; 
    }

    const annotations = await getAnnotationByWebsiteID();

    if (annotations.length > 0) {
        remarkGlobalData["annotations"] = annotations;
        renderExistingAnnotations();
    }

    // 4. (ADMIN ONLY) Start the highlight process
    if (isAdmin()) {
        highlightElements();
    }

  
    document.addEventListener("contextmenu", contextMenuListener,  true);

    document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            removeAllExistingModals();
        }
    }); 

    document.addEventListener("click", (e) => {
        const context_menu_check = document.getElementById("remark_context_menu");
        if(context_menu_check) {
            removeHTMLElement(context_menu_check);
        }
    })
}